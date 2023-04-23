import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  maos: any[][] = [];
  maoJogador: Jogador = this.inicializaJogador();
  maoNpc: Jogador = this.inicializaJogador();
  pilhaDescarte: PilhaDescarte[] = [];
  vira: any = null;
  isTurnoJogador: boolean = true;
  round: Round = this.inicializarRound();
  pontosJogador: number = 0;
  pontosNpc: number = 0;

  reiniciarJogo: any = null;

  pilhaCompra: any[] = [];
  cartasJogadas: any[] = [];

  constructor(public dialog: MatDialog){}

  inicializaJogador() {
    return {cartas: []};
  }

  inicializarRound() {
    return {jogador: 0, npc: 0};
  }

  inicarJogo(numPlayers: number) {
    this.maos = [];
    this.maoJogador = this.inicializaJogador();
    this.maoNpc = this.inicializaJogador();
    this.pilhaDescarte = [];
    this.vira = null;
    this.round = this.inicializarRound();

    // criando deck
    const deck = [];
    const suits = [
      { nipe: 'Copas', sigla: 'H' },
      { nipe: 'Ouro', sigla: 'D' },
      { nipe: 'Espada', sigla: 'S' },
      { nipe: 'Paus', sigla: 'C' },
    ];
    const values = ['A', '2', '3', '4', '5', '6', '7', 'J', 'Q', 'K'];
    for (const suit of suits) {
      for (const value of values) {
        deck.push({ suit, value, valor: this.valorCartas(value)});
      }
    }
    // embaralhar
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    // cartear
    for (let i = 0; i < numPlayers; i++) {
      this.maos.push(deck.slice(i * 3, (i + 1) * 3));
    }

    this.maoJogador.cartas = this.maos[0];
    this.maoNpc.cartas = this.maos[1];


    this.vira = deck.pop();
    this.pilhaCompra = deck.slice(numPlayers * 3);

    EventEmitterService.get('maoJogadorCartas').emit(this.maoJogador.cartas);
    EventEmitterService.get('maoNpcCartas').emit(this.maoNpc.cartas);
  }

  jogarCarta(playerIndex: number, cartaIndex: number) {
    // const carta = this.maoJogador[playerIndex][cartaIndex];
    // this.cartasJogadas.push(carta);
    // this.maoJogador[playerIndex].splice(cartaIndex, 1);
  }

  comprar(playerIndex: number) {
    const carta = this.pilhaCompra.pop();
    // this.maoJogador[playerIndex].push(carta);
    this.maoJogador.cartas.push(carta);
  }

  pegarCartaJogada(playerIndex: number) {
    const carta = this.cartasJogadas.pop();
    // this.maoJogador[playerIndex].push(carta);
    this.maoJogador.cartas.push(carta);
  }

  pegarCartaDescartada(playerIndex: number) {
    // const carta = this.pilhaDescarte.pop();
    // this.maoJogador[playerIndex].push(carta);
    // this.maoJogador.cartas.push(carta);
  }

  descartar(cartaIndex: number, isNpc: boolean) {
    let carta;
    if (isNpc) {
      carta = this.maoNpc.cartas[cartaIndex];
      this.maoNpc.cartas.splice(cartaIndex, 1);
    } else {
      carta = this.maoJogador.cartas[cartaIndex];
      this.maoJogador.cartas.splice(cartaIndex, 1);
    }

    this.pilhaDescarte.push({carta, isNpc: isNpc});
    this.isTurnoJogador = !this.isTurnoJogador;

    if (this.pilhaDescarte.length == 2) {
      this.vencedorRound();

      if (this.round.jogador === 2) {
        this.pontosJogador = this.pontosJogador + 1;
        this.mostarDialogEReiniciar('Jogador');

      } else if (this.round.npc === 2) {
        this.pontosNpc = this.pontosNpc + 1;
        this.mostarDialogEReiniciar('NPC');
      }

      if (this.maoJogador.cartas.length === 0 && this.maoNpc.cartas.length === 0) {
        this.mostarDialogEReiniciar('');
      }
    }
  }

  mostarDialogEReiniciar(vencedor: string) {
    let dialogRef = this.dialog.open(DialogComponent, {});
    let instance = dialogRef.componentInstance;
    instance.jogador = vencedor;

    setTimeout(() => {
      EventEmitterService.get('reiniciarJogo').emit();
      this.dialog.closeAll();
    }, 2000);
  }

  vencedorRound(){
    const cartaNpc = this.pilhaDescarte.filter(c => c.isNpc)[0];
    const cartaJogador = this.pilhaDescarte.filter(c => !c.isNpc)[0];

    this.valorCartaVira(cartaNpc.carta);
    this.valorCartaVira(cartaJogador.carta);

    if (cartaNpc.carta.valor > cartaJogador.carta.valor) {
      this.round.npc += 1;
      this.isTurnoJogador = false;
    } else if (cartaNpc.carta.valor < cartaJogador.carta.valor) {
      this.round.jogador += 1;
      this.isTurnoJogador = true;
    }

    setTimeout(() => {
      while (this.pilhaDescarte.length > 0) {
        this.pilhaDescarte.pop();
      }
    }, 1000);
  }

  exibirCarta(valor: any, nipe: any) {
    return `https://deckofcardsapi.com/static/img/${valor}${nipe}.png`;
  }

  private valorCartaVira(carta: Carta) {
    if (carta.valor === this.vira.valor + 1 || carta.valor + 10 === this.vira.valor) {
      switch (carta.suit.nipe) {
        case 'Paus':
          return carta.valor = 99;
        case 'Copas':
          return carta.valor = 98;
        case 'Espada':
          return carta.valor = 97;
        case 'Ouro':
          return carta.valor = 96;
      }
    }
    return;
  }

  private valorCartas(cartaValue: string) {
    switch (cartaValue) {
      case '4':
        return 1;
      case '5':
        return 2;
      case '6':
        return 3;
      case '7':
        return 4;
      case 'Q':
        return 5;
      case 'J':
        return 6;
      case 'K':
        return 7;
      case 'A':
        return 8;
      case '1':
        return 9;
      case '2':
        return 10;
      case '3':
        return 11;
    }
    return null;
  }

}

interface Carta {
  suit: Suit;
  value: string;
  valor: number;
}

interface Suit {
  nipe: string;
  sigla: string;
}

interface PilhaDescarte {
  carta: Carta;
  isNpc: boolean;
}

interface Jogador {
  cartas: Carta[];
}

interface Round {
  npc: number;
  jogador: number;
}

export class EventEmitterService {

  private static emitters: {
      [nomeEvento: string]: EventEmitter<any>
  } = {}

  static get (nomeEvento:string): EventEmitter<any> {
      if (!this.emitters[nomeEvento])
          this.emitters[nomeEvento] = new EventEmitter<any>();
      return this.emitters[nomeEvento];
  }

}
