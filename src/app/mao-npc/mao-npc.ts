import { Component, OnInit } from '@angular/core';
import { GameService } from './../gameService';

@Component({
  selector: 'mao-npc',
  templateUrl: './mao-npc.html',
})
export class MaoNpcComponent implements OnInit {
  maoNpc: any[] = this.gameService.maoNpc;
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaDescarte;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    console.log('oi: ', this.gameService.maoNpc);
  }

  jogarCarta(card: any) {
    const cardIndex = this.maoNpc.indexOf(card);
    this.gameService.jogarCarta(1, cardIndex);
    this.maoNpc = this.gameService.maoNpc;
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

  descartar(card: any) {
    console.log(this.maoNpc);
    const cardIndex = this.gameService.maoNpc.indexOf(card);
    this.gameService.descartar2(cardIndex, true);
    this.maoNpc = this.gameService.maoNpc;
    this.pilhaDescarte = this.gameService.pilhaDescarte;
  }
}
