class OrderRep {
  constructor(name, ingredients, directions) {
    this.name = name;
    this.ingredients = ingredients;
    this.directions = directions;
  }

  giveTitle() {
    return this.name;
  }
  giveIngredients() {
    return this.ingredients;
  }
  giveDirections() {
    return this.directions;
  }

  separate(theObj) {
    let fullString = "\t";
    for (let i = 0; i < theObj.length; i++) {
      fullString += "• " + theObj[i] + "\n\t";
    }
    return fullString;
  }

  strIngredients() {
    return `The ingredients are:\n${this.separate(this.ingredients)}`;
  }
  strDirections() {
    return `Directions and steps:\n${this.separate(this.directions)}`;
  }
}
