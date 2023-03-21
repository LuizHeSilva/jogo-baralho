import { Component } from '@angular/core';
import { GameService } from './gameService';

@Component({
  selector: 'pilha-compra',
  templateUrl: './pilha-compra.html'
})
export class PilhaCompraComponent {

  constructor(public gameService: GameService) {}

  maoJogador: any[] = this.gameService.maoJogador[0];
  cartasJogadas: any[] = this.gameService.cartasJogadas;
  pilhaDescarte: any[] = this.gameService.pilhaCompra;

  comprar() {
    if (this.gameService.pilhaCompra.length > 0) {
      this.gameService.comprar(0);
      this.maoJogador = this.gameService.maoJogador[0];
      this.pilhaDescarte = this.gameService.pilhaCompra;
    }
  }

}
