import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameBoardComponent } from './game-board.component';
import { HandComponent } from './mao';
import { DiscardPileComponent } from './pilha-descarte';

@NgModule({
  declarations: [GameBoardComponent, HandComponent, DiscardPileComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [GameBoardComponent, HandComponent, DiscardPileComponent],
})
export class AppModule {}
