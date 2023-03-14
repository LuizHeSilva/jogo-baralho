import { Component, OnInit } from '@angular/core';
import { GameService } from './gameService';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.html',
})
export class GameBoardComponent implements OnInit {
  playerHand: any[] = [];
  discardPile: any[] = [];
  playedCards: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.startGame(4);
    this.playerHand = this.gameService.playerHands[0];
  }

  playCard(card: any) {
    const cardIndex = this.playerHand.indexOf(card);
    this.gameService.playCard(0, cardIndex);
    this.playerHand = this.gameService.playerHands[0];
    this.playedCards = this.gameService.playedCards;
  }

  discardCard(card: any) {
    const cardIndex = this.playerHand.indexOf(card);
    this.gameService.discardCard(0, cardIndex);
    this.playerHand = this.gameService.playerHands[0];
    this.discardPile = this.gameService.discardPile;
  }

  takeDiscard() {
    this.gameService.takeDiscard(0);
    this.playerHand = this.gameService.playerHands[0];
    this.discardPile = this.gameService.discardPile;
  }
}
