import { Component, OnInit } from '@angular/core';
import { GameService } from './gameService';

@Component({
  selector: 'mao-jogador',
  templateUrl: './mao-jogador.html',
})
export class MaoJogadorComponent implements OnInit {

  constructor(public gameService: GameService) {}

  maoJogador: any[] = this.gameService.maoJogador[0];
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaCompra;

  ngOnInit(): void {
    console.log(this.maoJogador);
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
    this.pilhaDescarte = this.gameService.pilhaCompra;
  }

}
