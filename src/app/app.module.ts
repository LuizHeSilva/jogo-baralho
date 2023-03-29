import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartasJogadasComponent } from './cartas-jogadas/cartas-jogadas';
import { GameBoardComponent } from './game-board.component';
import { MaoJogadorComponent } from './mao-jogador/mao-jogador';
import { MaoNpcComponent } from './mao-npc/mao-npc';
import { PilhaCompraComponent } from './pilha-compra/pilha-compra';
import { PilhaDescarteComponent } from './pilha-descarte/pilha-descarte';

@NgModule({
  declarations: [
    GameBoardComponent,
    MaoJogadorComponent,
    MaoNpcComponent,
    PilhaCompraComponent,
    PilhaDescarteComponent,
    CartasJogadasComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    GameBoardComponent,
    MaoJogadorComponent,
    PilhaCompraComponent,
    PilhaDescarteComponent,
    MaoJogadorComponent,
    CartasJogadasComponent,
    MaoNpcComponent,
  ],
})
export class AppModule {}
