import Deck from './deck.js';

const computerCardSlot = document.querySelector('.computer-card-slot');
const playerCardSlot = document.querySelector('.player-card-slot');

const computerDeck = document.querySelector('.computer-deck');
const playerDeck = document.querySelector('.player-deck');

const deck = new Deck();
deck.shuffle();
console.log(deck.cards);

computerCardSlot.append(deck.cards[1].getCardHTML());
playerCardSlot.append(deck.cards[7].getCardHTML());
