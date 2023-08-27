import { Card } from '../../interface/Card.interface'

class Deck {
  cards: Card[] = []

  constructor(deck: Card[]) {
    this.cards = deck
  }

  dealCards(): Card[] {
    let cardsToPlay: Card[] = []

    return cardsToPlay
  }

  takeOne(): Card {
    return this.cards[0]
  }

  clearDeck(): void {
    this.cards = []
  }
}
