const numberCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const cardTypes = ["trebol", "spades", "diamond", "clubs"];

function getAllOrderedDecks(allCards = 1000) {
  // console.time();

  //here first I create the dictionary to get the latest deck of the card
  const originalDeck = cardTypes.reduce((a, b) => {
    return {
      ...a,
      ...numberCards.reduce((na, nb) => ({ ...na, [`${nb} - ${b}`]: 0 }), {})
    };
  }, {});

  const arrayCards = new Array(allCards).fill(0).map(card => {
    const randomIndexNumbers = getRandomIntInclusive(0, numberCards.length - 1);
    const randomIndexTypes = getRandomIntInclusive(0, cardTypes.length - 1);

    const newCard = `${numberCards[randomIndexNumbers]} - ${cardTypes[
      randomIndexTypes
    ]}`;
    return newCard;
  });

  const arrayOfAllDecks = [];

  console.time()
  arrayCards.forEach(card => {
    //here I take the latest index of the card and add the array with the new card and add 1 to the index because the card is on a deck
    arrayOfAllDecks[originalDeck[card]] = [
      ...(arrayOfAllDecks[originalDeck[card]] || []),
      card
    ];

    originalDeck[card]++;
  });
  console.timeEnd();

  console.log(arrayOfAllDecks);
  //   const newArrayCards = Array.fill(allCards);
}
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

getAllOrderedDecks();
