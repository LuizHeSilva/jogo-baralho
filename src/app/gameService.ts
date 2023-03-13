import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  playerHands: any[][] = [];
  playedCards: any[] = [];
  discardPile: any[] = [];

  startGame(numPlayers: number) {
    // create deck of cards
    const deck = [];
    const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
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
    // deal cards
    for (let i = 0; i < numPlayers; i++) {
      this.playerHands.push(deck.slice(i * 5, (i + 1) * 5));
    }
    this.discardPile = deck.slice(numPlayers * 5);
  }

  playCard(playerIndex: number, cardIndex: number) {
    const card = this.playerHands[playerIndex][cardIndex];
    this.playedCards.push(card);
    this.playerHands[playerIndex].splice(cardIndex, 1);
  }

  discardCard(playerIndex: number, cardIndex: number) {
    const card = this.playerHands[playerIndex][cardIndex];
    this.discardPile.push(card);
    this.playerHands[playerIndex].splice(cardIndex, 1);
  }

  takeDiscard(playerIndex: number) {
    const card = this.discardPile.pop();
    this.playerHands[playerIndex].push(card);
  }
}
