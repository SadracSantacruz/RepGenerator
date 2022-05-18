class Recipe {
  constructor(name, culture, ingredients, directions) {
    this.name = name;
    this.culture = culture;
    this.ingredients = ingredients;
    this.directions = directions;

    this.addToCul();
  }

  giveName() {
    return this.name;
  }

  giveCulture() {
    return this.culture;
  }

  giveIngredients() {
    return this.separate(this.ingredients);
  }

  giveDirections() {
    return this.separate(this.directions);
  }

  separate(arr) {
    let fullString = "";
    for (let i = 0; i < arr.length; i++) {
      fullString += `▪️ ${this.ingredients[i]}\n`;
    }
    return fullString;
  }
}
