import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  maos: any[][] = [];
  maoJogador: any[] = [];
  maoNpc: any[] = [];
  pilhaCompra: any[] = [];
  pilhaDescarte: any[] = [];
  cartasJogadas: any[] = [];
  vira: any = null;

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
    console.log(cartaIndex);
    if (isNpc) {
      carta = this.maoNpc[cartaIndex];
      console.log(this.maoNpc);
      this.maoNpc.splice(cartaIndex, 1);
    } else {
      carta = this.maoJogador[cartaIndex];
      this.maoJogador.splice(cartaIndex, 1);
    }
    console.log(carta);
    this.pilhaDescarte.push(carta);
  }

  descartar2(cartaIndex: number, isNpc: boolean) {
    let carta;
    carta = this.maoNpc[cartaIndex];
    this.maoNpc.splice(cartaIndex, 1);
    this.pilhaDescarte.push(carta);
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
}
