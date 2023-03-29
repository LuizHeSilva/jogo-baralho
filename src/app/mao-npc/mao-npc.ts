import { Component, OnInit } from '@angular/core';
import { GameService } from './../gameService';

@Component({
  selector: 'mao-npc',
  template: `aqui era praestar meu html`,
})
export class MaoNpcComponent implements OnInit {
  maoNpc: any[] = this.gameService.maoNpc;
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaCompra;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    console.log(this.gameService.maoNpc);
  }

  jogarCarta(card: any) {
    const cardIndex = this.maoNpc.indexOf(card);
    this.gameService.jogarCarta(1, cardIndex);
    this.maoNpc = this.gameService.maoNpc;
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

  descartar(card: any) {
    const cardIndex = this.maoNpc.indexOf(card);
    this.gameService.descartar(1, cardIndex);
    this.maoNpc = this.gameService.maoNpc;
    this.pilhaDescarte = this.gameService.pilhaCompra;
  }
}
