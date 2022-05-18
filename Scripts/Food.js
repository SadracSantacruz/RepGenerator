class Food extends Recipe {
  constructor(name, culture, ingredients, directions) {
    super(name, culture, ingredients, directions);
  }

  addToCul() {
    switch (this.culture.toLowerCase()) {
      case "latino":
        latino.foods.push(this);
        break;

      case "american":
        american.foods.push(this);
        break;

      default:
        asian.foods.push(this);
        break;
    }
  }
}
