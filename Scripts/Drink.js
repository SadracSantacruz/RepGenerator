class Drink extends Recipe {
  constructor(name, culture, ingredients, directions) {
    super(name, culture, ingredients, directions);
  }

  addToCul() {
    switch (this.culture.toLowerCase()) {
      case "latino":
        latino.drinks.push(this);
        break;

      case "american":
        american.drinks.push(this);
        break;

      default:
        asian.drinks.push(this);
        break;
    }
  }
}
