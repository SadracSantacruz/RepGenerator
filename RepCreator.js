// Class try 1
// class RepCreator {
//   constructor(culture, type, name, ingredients, directions) {
//     this.culture = culture;
//     this.type = type;
//     this.name = name;
//     this.ingredients = ingredients;
//     this.directions = directions;
//   }

//   separate(theObj) {
//     let fullString = "\t";
//     for (let i = 0; i < theObj.length; i++) {
//       fullString += "• " + theObj[i] + "\n\t";
//     }
//     return fullString;
//   }

//   strIngredients() {
//     return `The ingredients are:\n${this.separate(this.ingredients)}`;
//   }
//   strDirections() {
//     return `Directions and steps:\n${this.separate(this.directions)}`;
//   }
// }

//Class try 2
class RepCreator {
  constructor(culture, type, obj) {
    this.culture = culture;
    this.type = type;
    this.obj = obj;

    this.addObj_2_Type();
  }

  addObj_2_Type() {
    this.type.title = this.obj;
  }

  changePropName() {
    //This pice of code will look for the index of the element where title is at, by looping thrught the list of the properties that the object has.
    /*
    let props = Object.getOwnPropertyNames(culture);
    const findPos = function () {
      for (let i = 0; i < props.length; i++) {
        if (props[i] == "title") {
          return i;
        } else {
          return 0;
        }
      }
    };

    // This block of code is going to loop thro
    for (let i = 0; i < findPos(); i++) {
      if (pos === 0) {
      }
    }
    */
  }
}

// Object.assign() - This is to assing the properties of an object to another.
// -- Example: // Object.assign(this.type, this.obj);
