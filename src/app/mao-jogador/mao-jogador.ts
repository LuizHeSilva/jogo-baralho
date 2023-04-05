import { Component } from '@angular/core';
import { GameService } from './../gameService';

@Component({
  selector: 'mao-jogador',
  templateUrl: './mao-jogador.html',
})
export class MaoJogadorComponent {
  maoJogador: any[] = this.gameService.maoJogador;
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaDescarte;

  constructor(public gameService: GameService) {}

  jogarCarta(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.jogarCarta(0, cardIndex);
    this.maoJogador = this.gameService.maoJogador;
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

  descartar(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.descartar(cardIndex, false);
    this.maoJogador = this.gameService.maoJogador;
    this.pilhaDescarte = this.gameService.pilhaDescarte;
  }
}
