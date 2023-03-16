import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartasJogadasComponent } from './cartas-jogadas';
import { GameBoardComponent } from './game-board.component';
import { MaoJogadorComponent } from './mao-jogador';
import { PilhaCompraComponent } from './pilha-compra';
import { PilhaDescarteComponent } from './pilha-descarte';

@NgModule({
  declarations: [
    GameBoardComponent,
    MaoJogadorComponent,
    PilhaCompraComponent,
    PilhaDescarteComponent,
    MaoJogadorComponent,
    CartasJogadasComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    GameBoardComponent,
    MaoJogadorComponent,
    PilhaCompraComponent,
    PilhaDescarteComponent,
    MaoJogadorComponent,
    CartasJogadasComponent
  ],
})
export class AppModule {}
