'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Your order was received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   numGuests: 'Giovanni Rossi',
// };

//OR ASSIGNMENT OPERATOR
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewanadowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

//this is my pattern and it worked well
// const { team1: team1, x: draw, team2: team2 } = game.odds;
// console.log(team1, draw, team2);

//this is his pattern

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, x, team2);

//6
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//////////////////////////
//SHORT CIRCUITING STARTS HERE
// //FOR THE OR OPERATOR
// console.log(3 || 'Timi');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //FOR THE AND OPERATOR
// console.log(0 && 'Timi');
// console.log(7 && 'Timi');
// console.log('Timi' && 23 && null && 'Hello');

//NULLISH OPERATOR
//Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

////////////////////////////////////
//Rest patterns and Parameters
// //1) DESTRUCTURING
// //SPREAD, because on RIGHT HAND side of the =
// const arr = [1, 2, ...[3, 4]];

// //REST, because it is on the LEFT HAND side of the =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// //An example using both the rest and spread operators
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [25, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //THE SPREAD OPERATOR STARTS HERE
// const arr = [7, 8, 9];
// const basNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(basNewArr);

// const newArr = [1, 2, ...arr];
// // console.log(newArr);
// // console.log(...newArr);

// const newMenu = ['Ekpang', 'Custard', ...restaurant.mainMenu];
// // console.log(newMenu);

// //Copying an array into a new one
// const mainMenuCopy = [...restaurant.mainMenu];
// //Joining two arrays together
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(`this is the `, menu);

// //Real world example
// // const ingredients = [
// //   prompt("Let's make Pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3a?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients); //this gets all the elements of the ingredients array

// //Using the spread operator on an object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Timi' };
// console.log(newRestaurant);

// //Using the spread operator to make a copy of an object
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Justice Restaurant';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// // //OBJECTS DESTRUCTURING
// // const { name, openingHours, categories } = restaurant;
// // // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // // console.log(restaurantName, hours, tags);
// // //Here, I am adding default values for the property that doesn't exist.
// // const { menu = [], starterMenu: starters = [] } = restaurant;

// // //mutating variables(changing their positions)
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // // console.log(a, b);

// // //nested objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // // console.log(o, c);

// // //destructuring arrays
// // // const arr = [2, 3, 4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // const [x, y, z] = arr;
// // // console.log(x, y, z);

// // //to destructure the categories array and get its two elements
// // let [main, , secondary] = restaurant.categories;
// // // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);

// // //how to receive two return values from a function
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, 'and', mainCourse);

// // //nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // //console.log(i, j);
// // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// // // order: function (starterIndex, mainIndex) {
// // //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// // //  */
