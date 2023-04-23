import { Component, OnInit } from '@angular/core';
import { EventEmitterService, GameService } from './../gameService';

@Component({
  selector: 'mao-npc',
  templateUrl: './mao-npc.html',
})
export class MaoNpcComponent implements OnInit {
  maoNpc: any[] = this.gameService.maoNpc.cartas;
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaDescarte;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    EventEmitterService.get('maoNpcCartas').subscribe(cartasMaoNpc => {
      this.maoNpc = cartasMaoNpc;
    });
  }

  jogarCarta(card: any) {
    const cardIndex = this.maoNpc.indexOf(card);
    this.gameService.jogarCarta(1, cardIndex);
    this.maoNpc = this.gameService.maoNpc.cartas;
    this.cartasJogadas = this.gameService.cartasJogadas;
  }

  descartar(card: any) {
    const cardIndex = this.gameService.maoNpc.cartas.indexOf(card);
    this.gameService.descartar(cardIndex, true);
    this.maoNpc = this.gameService.maoNpc.cartas;
    this.pilhaDescarte = this.gameService.pilhaDescarte;
  }

  mao1() {
    if (this.gameService.round.npc === 1 || this.gameService.round.npc === 2) {
      return 'circulo-preenchido';
    }
    return null;
  }

  mao2() {
    if (this.gameService.round.npc === 2) {
      return 'circulo-preenchido';
    }
    return null;
  }
}
