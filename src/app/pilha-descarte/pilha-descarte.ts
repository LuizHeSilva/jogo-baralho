import { Component } from '@angular/core';
import { GameService } from './../gameService';

@Component({
  selector: 'pilha-descarte',
  templateUrl: './pilha-descarte.html',
})
export class PilhaDescarteComponent {
  constructor(public gameService: GameService) {}

  maoJogador: any[] = this.gameService.maoJogador[0];
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaDescarte;

  pegarCartaDescartada() {
    if (this.gameService.pilhaDescarte.length > 0) {
      this.gameService.pegarCartaDescartada(0);
      this.maoJogador = this.gameService.maoJogador[0];
      this.pilhaDescarte = this.gameService.pilhaDescarte;
    }
  }
}
