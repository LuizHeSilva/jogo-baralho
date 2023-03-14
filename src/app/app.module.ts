import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameBoardComponent } from './game-board.component';
import { HandComponent } from './mao';

@NgModule({
  declarations: [GameBoardComponent, HandComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [GameBoardComponent, HandComponent],
})
export class AppModule {}
