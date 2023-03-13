import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  template: `
    <div class="card-deck">
      <div class="card" *ngFor="let card of hand">
        <div class="card-body">
          <h5 class="card-title">{{card.value}}</h5>
          <p class="card-text">{{card.suit}}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./hand.component.css']
})
export class HandComponent {
  @Input() hand: any[] = [];
}
