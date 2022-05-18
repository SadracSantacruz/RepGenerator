"use strict";

// Objects
let latino = {
  foods: [],
  drinks: [],
};

let american = {
  foods: [],
  drinks: [],
};

let asian = {
  foods: [],
  drinks: [],
};

// Latino foods
let tacos = new Food(
  "Tacos",
  "latino",
  [
    "1 flank steak, trimmed of excess fat",
    "1 cup pickled jalapenos, including the carrots and onions that come in the jar",
    "Salt and pepper",
    "Corn tortillas",
    "¼ cup white onion, coarsely chopped",
    "¼ cup cilantro leaves",
    "2 tablespoons salsa de arbol",
    "1 tablespoon canola oil, plus more, as needed",
  ],
  [
    "Cover flank steak on one side with the pickled jalapenos, then turn over let sit at room temperature, covered for 1 hour.",
    "Preheat the grill or broiler.",
    "Season both sides of the steak with salt and pepper and place on a hot grill or under the broiler. Cook the steak for 5 to 6 minutes on each side (for medium rare), and then chop into 1/4-inch pieces.",
    "Heat a small saute pan and add 1 tablespoon canola oil. Warm corn tortillas for 30 seconds on each side, adding more oil as necessary. Stack 2 tortillas together, place the meat in the center of the tortillas and top with the onion and cilantro. Drizzle a teaspoon of the salsa de arbol on top of each taco.",
  ]
);

let caldoRes = new Food(
  "Caldo de Res",
  "latino",
  [
    "2 pounds beef shank, with bone",
    "1 tablespoon vegetable oil",
    "2 teaspoons salt",
    "2 teaspoons ground black pepper",
    "1 onion, chopped",
    "1 (14.5 ounce) can diced tomatoes",
    "3 cups beef broth",
    "4 cups water",
    "2 medium carrot, coarsely chopped",
    "¼ cup chopped fresh cilantro",
    "1 potato, quartered (Optional)",
    "2 ears corn, husked and cut into thirds",
    "2 chayotes, quartered (Optional)",
    "1 medium head cabbage, cored and cut into wedges",
    "¼ cup sliced pickled jalapenos",
    "¼ cup finely chopped onion",
    "1 cup chopped fresh cilantro",
    "2 limes, cut into wedges",
    "4 radishes, quartered",
  ],
  [
    "Cut the meat from the beef bones into about 1/2 inch pieces, leaving some on the bones.",
    "Heat a heavy soup pot over medium-high heat until very hot. Add the oil, tilting the pan to coat the bottom. Add the meat and bones, and season with salt and pepper. Cook and stir until thoroughly browned.",
    "Add 1 onion, and cook until onion is also lightly browned. Stir in the tomatoes and broth. The liquid should cover the bones by 1/2 inch. If not, add enough water to compensate. Reduce heat to low, and simmer for 1 hour with the lid on loosely. If meat is not tender, continue cooking for another 10 minutes or so.",
    "Pour in the water, and return to a simmer. Add the carrot and 1/4 cup cilantro, and cook for 10 minutes, then stir in the potato, corn and chayote. Simmer until vegetables are tender. Push the cabbage wedges into the soup, and cook for about 10 more minutes.",
    "Ladle soup into large bowls, including meat vegetables and bones. Garnish with jalapenos, minced onion, and additional cilantro. Squeeze lime juice over all, and serve with radishes.",
  ]
);

// The Latino drinks

let aguaDePepino = new Drink(
  "Agua de Pepino",
  "latino",
  [
    "5 cups water, or to taste",
    "3 cucumbers, peeled and chopped",
    "½ seedless watermelon",
    "¼ cup granular sucralose sweetener, or to taste",
  ],
  [
    "Blend 2 cups water, cucumbers, lime juice, and 2 tablespoons sweetener together in a blender until smooth. Pour into pitcher; add remaining water. Stir in additional sweetener to taste.",
  ]
);

let aguaSandia = new Drink(
  "Agua de Sandia",
  "latino",
  [
    "½ seedless watermelon",
    "2 cups cold water",
    "½ cup white sugar, or to taste",
    "½ cup water",
  ],
  [
    "Scoop flesh from watermelon half and transfer watermelon to a blender. Add 2 cups cold water. Place a folded towel on blender lid and blend until liquefied, about 1 minute. Strain through a fine mesh strainer into a large bowl to remove fibers. Discard fibers left in strainer. Skim and discard excess foam from juice if desired.",
    "Place sugar and 1/2 cup water into a saucepan over medium heat and stir until water is hot and sugar has dissolved. Turn off heat and let simple syrup cool to room temperature. Stir simple syrup into watermelon juice to taste.",
    "Pour drink into a 2-quart pitcher and refrigerate until cold, at least 30 minutes. To serve, fill tall glasses with ice cubes and pour agua fresca drink over ice. Serve with straws.",
  ]
);

//American Drinks

//American Foods

//Asian Food

let soyNuddles = new Food(
  "Soy Nuddles",
  "asian",
  [
    "Oyster Sauce",
    "Light Soy",
    "Sesame Oil",
    "Dark Soy",
    "Garlic",
    "Mirin",
    "Green Onion",
    "Nuddles",
  ],
  [
    "Sauce – Mix the sauce.",
    "Green onion – Cut up the green onion, separating the darker green part from the firmer white and pale green parts. We’re going to cook the white part first as they take longer to cook. The green part only needs to be tossed in at the very end as it wilts in seconds.",
    "Cook noodles per the packet directions. Some tips: Cook noodles just before you start stir frying. Don’t leave cooked, drained noodles laying around before stir frying as it makes them more prone to breaking or sticking to each other. Use plenty of boiling water so the noodles cook evenly and loosen. Rinse the noodles briefly after draining so they don’t end up sticking together in a gluey block.",
    "Sauté aromatics – Using either a wok or large non-stick pan over high heat, heat the oil until very hot. Then we start by cooking the white and pale green part of the green onion for around 20 seconds to give them a head start as well as flavouring the oil. Then, toss the garlic in and cook for around 10 seconds just until lightly golden. Don’t let the garlic burn – it goes bitter!",
    "Noodles and sauce – Add the noodles and sauce then toss for around 1 1/2 minutes until all the noodles are evenly coated in the sauce and you start to see some of the noodles caramelising a bit. It might take a bit longer depending on the strength of your stove.",
    "Green onion – Lastly, add the green part of the green onions then toss for 30 seconds just until wilted. That’s it, you’re done! Ready to serve!",
  ]
);
//Asian drinks
