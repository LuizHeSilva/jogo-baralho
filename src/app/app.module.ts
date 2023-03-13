import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameBoardComponent } from './app.component';

@NgModule({
  declarations: [
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [GameBoardComponent]
})
export class AppModule { }
