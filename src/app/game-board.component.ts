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
  vira: any = this.gameService.vira;

  constructor(public gameService: GameService) {}

  ngOnInit() {
    this.gameService.inicarJogo(2);
    this.maoJogador = this.gameService.maoJogador[0];
    this.pilhaDescarte = this.gameService.pilhaCompra;
    this.cartasJogadas = this.gameService.cartasJogadas;
    this.vira = this.gameService.vira;
  }
}
