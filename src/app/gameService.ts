import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  maos: any[][] = [];
  maoJogador: any[] = [];
  maoNpc: any[] = [];
  pilhaCompra: any[] = [];
  pilhaDescarte: PilhaDescarte[] = [];
  cartasJogadas: any[] = [];
  vira: any = null;
  isTurnoJogador: boolean = true;

  inicarJogo(numPlayers: number) {
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
        deck.push({ suit, value });
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

    this.maoJogador = this.maos[0];
    this.maoNpc = this.maos[1];

    this.vira = deck.pop();
    this.pilhaCompra = deck.slice(numPlayers * 3);
  }

  jogarCarta(playerIndex: number, cartaIndex: number) {
    // const carta = this.maoJogador[playerIndex][cartaIndex];
    // this.cartasJogadas.push(carta);
    // this.maoJogador[playerIndex].splice(cartaIndex, 1);
  }

  descartar(cartaIndex: number, isNpc: boolean) {
    let carta;
    if (isNpc) {
      carta = this.maoNpc[cartaIndex];
      this.maoNpc.splice(cartaIndex, 1);
    } else {
      carta = this.maoJogador[cartaIndex];
      this.maoJogador.splice(cartaIndex, 1);
    }
    this.pilhaDescarte.push({carta, isNpc: isNpc});
    this.isTurnoJogador = !this.isTurnoJogador;
  }

  comprar(playerIndex: number) {
    const carta = this.pilhaCompra.pop();
    // this.maoJogador[playerIndex].push(carta);
    this.maoJogador.push(carta);
  }

  pegarCartaJogada(playerIndex: number) {
    const carta = this.cartasJogadas.pop();
    // this.maoJogador[playerIndex].push(carta);
    this.maoJogador.push(carta);
  }

  pegarCartaDescartada(playerIndex: number) {
    const carta = this.pilhaDescarte.pop();
    // this.maoJogador[playerIndex].push(carta);
    this.maoJogador.push(carta);
  }

  valorCartas(carta: Carta) {
    switch (carta.values) {
      case '4':
        return 1;
      case '5':
        return 2;
      case '6':
        return 3;
      case '7':
        return 4;
      case 'J':
        return 5;
      case 'Q':
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
      default:
        throw new Error('deu ruim')
    }
  }

  vencedorRound(){
    const cartaNpc = this.pilhaDescarte.filter(c => c.isNpc);
    const cartaJogador = this.pilhaDescarte.filter(c => !c.isNpc);

    if (cartaNpc > cartaJogador) {

    }
  }

}

interface Carta {
  suit: string;
  values: string;
}

interface PilhaDescarte {
  carta: Carta;
  isNpc: boolean;
}
