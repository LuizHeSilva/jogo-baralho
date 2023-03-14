import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  template: `
    <div class="card-deck">
      <div class="card" *ngFor="let card of pile">
        <div class="card-body">
          <h5 class="card-title">{{card.value}}</h5>
          <p class="card-text">{{card.suit}}</p>
        </div>
      </div>
    </div>
  `,
})
export class HandComponent {
  @Input() pile: any[] = [];
}
