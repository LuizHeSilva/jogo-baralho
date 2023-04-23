import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameBoardComponent } from './game-board.component';
import { MaoJogadorComponent } from './mao-jogador/mao-jogador';
import { MaoNpcComponent } from './mao-npc/mao-npc';
import { PilhaDescarteComponent } from './pilha-descarte/pilha-descarte';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    GameBoardComponent,
    MaoJogadorComponent,
    MaoNpcComponent,
    PilhaDescarteComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [
    GameBoardComponent,
    MaoJogadorComponent,
    PilhaDescarteComponent,
    MaoJogadorComponent,
    MaoNpcComponent,
  ],
})
export class AppModule {}
