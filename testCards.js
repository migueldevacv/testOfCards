const numberCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const cardTypes = ["trebol", "spades", "diamond", "clubs"];

function getAllOrderedDecks(allCards = 1000) {
  console.time()
  const arrayCards = new Array(allCards).fill(0).map((card) => {
    const randomIndexNumbers = getRandomIntInclusive(0, numberCards.length - 1);
    const randomIndexTypes = getRandomIntInclusive(0, cardTypes.length - 1);

    const newCard = `${numberCards[randomIndexNumbers]} - ${cardTypes[randomIndexTypes]}`;
    return newCard;
  });

  //   const newArrayCards = Array.fill(allCards);
  console.timeEnd();
}
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

getAllOrderedDecks();
