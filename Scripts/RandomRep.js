// Randomize cultures
// Cultures up to the moment 3

function getRandomProperty() {
  let rand = Math.floor(Math.random() * 3);

  switch (rand) {
    case 0:
      return latino;
    case 1:
      return american;
    default:
      return asian;
  }
}

// console.log(getRandomProperty());

// Selecting buttons
const randomRep = document.getElementById("generateRep-intro");

randomRep.addEventListener("click", () => {
  //console.log(getRandomProperty().foods);
  // Food or Drink
  let foodOrDrink = Math.floor(Math.random() * 2);
  let elementInList;

  switch (foodOrDrink) {
    case 0:
      //console.log(getRandomProperty().foods);
      elementInList = Math.floor(
        Math.random() * getRandomProperty().foods.length
      );
      console.log(getRandomProperty().foods[elementInList]);

      break;

    default:
      //console.log(getRandomProperty().drinks);
      elementInList = Math.floor(
        Math.random() * getRandomProperty().drinks.length
      );
      break;
  }
});
