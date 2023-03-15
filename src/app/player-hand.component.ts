import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-hand',
  template: `
    <h4>{{ jogador }}</h4>
    <div class="card-deck">
      <div class="card" *ngFor="let carta of mao; let i = index" (click)="jogarCarta(i)">
        <div class="card-body">
          <h5 class="card-title">{{ carta.valor }} of {{ carta.naipe }}</h5>
        </div>
      </div>
    </div>
  `
})
export class PlayerHandComponent {
  @Input() jogador: string;
  @Input() mao: any[];
  @Output() jogarCartaEvent = new EventEmitter<number>();

  jogarCarta(indexCarta: number) {
    this.jogarCartaEvent.emit(indexCarta);
  }
}
