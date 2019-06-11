
/**
 * Creates an array containing a deck of cards
 */
const createDeck = () => {
  let deck = [];
  const suits = ['H', 'C', 'D', 'S'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  for ( let i=0; i< suits.length; i++) {
    for ( let j=0; j < values.length; j++) {
      deck.push(values[j]+suits[i]);
    }
  }
  return deck;
}

const drawOne = (arr) => {
  const card = arr.shift();
  return { card: card, newStack: arr }
}

// let deck = createDeck();
// console.log(drawOne(deck));
// console.log(drawOne(deck));
export { createDeck, drawOne };