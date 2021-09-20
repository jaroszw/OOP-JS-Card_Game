const suits = ['♠', '♥', '♦', '♣'];
const values = [
  'A',
  'K',
  'Q',
  'J',
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
];

export default class Deck {
  constructor(cards = getNewCards()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * i + 1);
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }

  pop() {
    return this.cards.shift();
  }

  push(card) {
    this.cards.push(card);
  }
}

export class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === '♠' || this.suit === '♣' ? 'black' : 'red';
  }

  getCardHTML() {
    const cardDiv = document.createElement('div');
    cardDiv.innerText = this.suit;
    cardDiv.classList.add('card', this.color);
    cardDiv.dataset.value = `${this.value} ${this.suit}`;
    return cardDiv;
  }
}

function getNewCards() {
  return suits.flatMap((suit) => {
    return values.map((val) => {
      const card = new Card(suit, val);
      return card;
    });
  });
}
