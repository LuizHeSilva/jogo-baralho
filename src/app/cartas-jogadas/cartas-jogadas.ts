import { Component } from '@angular/core';
import { GameService } from './../gameService';

@Component({
  selector: 'cartas-jogadas',
  templateUrl: './cartas-jogadas.html'
})
export class CartasJogadasComponent {

  constructor(public gameService: GameService) {}

  maoJogador: any[] = this.gameService.maoJogador[0];
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaCompra;

  pegarCartaJogada() {
    this.gameService.pegarCartaJogada(0);
    this.maoJogador = this.gameService.maoJogador[0];
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

}
