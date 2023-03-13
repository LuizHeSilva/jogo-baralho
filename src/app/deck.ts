import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discard-pile',
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
  styleUrls: ['./discard-pile.component.css']
})
export class DiscardPileComponent {
  @Input() pile: any[] = [];
}
