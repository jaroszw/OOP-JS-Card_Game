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

  get cardsLength() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.cardsLength - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * i + 1);
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Card {
  constructor(suite, value) {
    this.suite = suite;
    this.value = value;
  }

  get color() {
    return this.suite === '♠' || this.suite === '♣' ? 'black' : 'red';
  }

  getCardHTML() {
    const cardDiv = document.createElement('div');
    cardDiv.innerText = this.suite;
    cardDiv.classList.add('card', this.color);
    cardDiv.dataset.value = `${this.suite} ${this.value}`;
    return cardDiv;
  }
}

function getNewCards() {
  return suits.flatMap((suite) => {
    return values.map((val) => {
      const card = new Card(suite, val);
      return card;
    });
  });
}
