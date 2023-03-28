import { Component, Input, OnInit } from '@angular/core';
import { GameService } from './../gameService';

@Component({
  selector: 'mao-jogador',
  templateUrl: './mao-jogador.html',
})
export class MaoJogadorComponent implements OnInit {
  @Input() teste = true;

  constructor(public gameService: GameService) {}

  cartas: any[] = [];
  maoJogador: any[] = this.gameService.maoJogador;
  maoNPC: any[] = this.gameService.maoNpc;
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaCompra;

  ngOnInit(): void {
    console.log(this.teste);
    if (this.teste) {
      this.cartas = this.maoJogador;
    } else {
      this.cartas = this.maoNPC;
    }

    console.log(this.gameService.maos);
  }

  jogarCarta(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.jogarCarta(0, cardIndex);
    this.maoJogador = this.gameService.maoJogador;
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

  descartar(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.descartar(0, cardIndex);
    this.maoJogador = this.gameService.maoJogador;
    this.pilhaDescarte = this.gameService.pilhaCompra;
  }
}
