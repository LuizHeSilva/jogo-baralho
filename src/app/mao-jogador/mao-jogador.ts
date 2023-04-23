import { Component, OnInit } from '@angular/core';
import { EventEmitterService, GameService } from './../gameService';

@Component({
  selector: 'mao-jogador',
  templateUrl: './mao-jogador.html',
})
export class MaoJogadorComponent implements OnInit {
  maoJogador: any[] = this.gameService.maoJogador.cartas;
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaDescarte;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    EventEmitterService.get('maoJogadorCartas').subscribe(cartasMaoJogador => {
      this.maoJogador = cartasMaoJogador;
    });
  }

  jogarCarta(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.jogarCarta(0, cardIndex);
    this.maoJogador = this.gameService.maoJogador.cartas;
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

  descartar(card: any) {
    const cardIndex = this.maoJogador.indexOf(card);
    this.gameService.descartar(cardIndex, false);
    this.maoJogador = this.gameService.maoJogador.cartas;
    this.pilhaDescarte = this.gameService.pilhaDescarte;
  }

  mao1() {
    if (this.gameService.round.jogador === 1 || this.gameService.round.jogador === 2) {
      return 'circulo-preenchido';
    }
    return null;
  }

  mao2() {
    if (this.gameService.round.jogador === 2) {
      return 'circulo-preenchido';
    }
    return null;
  }

}
