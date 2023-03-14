import { Component, OnInit } from '@angular/core';
import { GameService } from './gameService';

@Component({
  selector: 'game-board',
  template: `
    <div class="row">
      <div class="col-8">
        <h2>Player Hands</h2>
        <div class="card-deck">
          <div class="card" *ngFor="let card of playerHand">
            <div class="card-body">
              <h5 class="card-title">{{card.value}}</h5>
              <p class="card-text">{{card.suit}}</p>
              <button class="btn btn-primary" (click)="playCard(card)">Play</button>
              <button class="btn btn-secondary" (click)="discardCard(card)">Discard</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <h2>Discard Pile</h2>
        <app-hand [pile]="discardPile"></app-hand>
      </div>
    </div>
    <hr>
    <h2>Played Cards</h2>
    <app-hand [pile]="playedCards"></app-hand>
    <button class="btn btn-primary" (click)="takeDiscard()">Take Discard</button>
  `,
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
