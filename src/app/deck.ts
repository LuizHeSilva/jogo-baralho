import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
})
export class DeckComponent implements OnInit {
  deck: any[] = [];

  ngOnInit(): void {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
    ];

    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ value: value, suit: suit });
      }
    }
  }
}
