import { Component, OnInit } from '@angular/core';
import { GameService } from './gameService';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.html',
})
export class GameBoardComponent implements OnInit {
  maoJogador: any[] = [];
  pilhaDescarte: any[] = [];
  cartasJogadas: any[] = [];

  constructor(public gameService: GameService) {}

  ngOnInit() {
    this.gameService.startGame(4);
    this.maoJogador = this.gameService.maoJogador[0];
  }

  jogarCarta(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.jogarCarta(0, cardIndex);
    this.maoJogador = this.gameService.maoJogador[0];
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

  descartar(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.descartar(0, cardIndex);
    this.maoJogador = this.gameService.maoJogador[0];
    this.pilhaDescarte = this.gameService.pilhaDescarte;
  }

  pegarDescarte() {
    this.gameService.pegarDescarte(0);
    this.maoJogador = this.gameService.maoJogador[0];
    this.pilhaDescarte = this.gameService.pilhaDescarte;
  }

  pegarCartaJogada() {
    this.gameService.pegarCartaJogada(0);
    this.maoJogador = this.gameService.maoJogador[0];
    this.cartasJogadas = this.gameService.cartasJogadas;
  }
}
