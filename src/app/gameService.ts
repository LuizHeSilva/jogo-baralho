import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  maoJogador: any[][] = [];
  pilhaCompra: any[] = [];
  pilhaDescarte: any[] = [];
  cartasJogadas: any[] = [];

  startGame(numPlayers: number) {
    // create deck of cartas
    const deck = [];
    const suits = [
      { nipe: 'Copas', sigla: 'H' },
      { nipe: 'Ouro', sigla: 'D' },
      { nipe: 'Espada', sigla: 'S' },
      { nipe: 'Paus', sigla: 'C' },
    ];
    const values = [
      'A','2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K',
    ];
    for (const suit of suits) {
      for (const value of values) {
        deck.push({ suit, value });
      }
    }
    // shuffle deck
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    // deal cartas
    for (let i = 0; i < numPlayers; i++) {
      this.maoJogador.push(deck.slice(i * 5, (i + 1) * 5));
    }
    this.pilhaCompra = deck.slice(numPlayers * 5);
  }

  jogarCarta(playerIndex: number, cartaIndex: number) {
    const carta = this.maoJogador[playerIndex][cartaIndex];
    this.cartasJogadas.push(carta);
    this.maoJogador[playerIndex].splice(cartaIndex, 1);
  }

  descartar(playerIndex: number, cartaIndex: number) {
    const carta = this.maoJogador[playerIndex][cartaIndex];
    this.pilhaDescarte.push(carta);
    this.maoJogador[playerIndex].splice(cartaIndex, 1);
  }

  comprar(playerIndex: number) {
    const carta = this.pilhaCompra.pop();
    this.maoJogador[playerIndex].push(carta);
  }

  pegarCartaJogada(playerIndex: number) {
    const carta = this.cartasJogadas.pop();
    this.maoJogador[playerIndex].push(carta);
  }

  pegarCartaDescartada(playerIndex: number) {
    const carta = this.pilhaDescarte.pop();
    this.maoJogador[playerIndex].push(carta);
  }
}
