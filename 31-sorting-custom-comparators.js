/*
Custom Comparators Problem Set
from Beyond Cracking the Coding Interview
Chapter 31 - Sorting
For each problem, define a customer comparator in your language.
*/

// Question 1: Sort an array of strings lexicographically (dictionary order), descending, ignoring case.
let arr1 = ['apple', 'Cherry', '3', 'Banana', '42', 'GRAPE', '10'];

function compareFn1(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return 1;
  }
  if (b.toLowerCase() < a.toLowerCase()) {
    return -1;
  }
  return 0;
}

console.log(arr1.sort(compareFn1));

// Question 2: Sort an array of intervals by the end-values.
let arr2 = [[3, 9], [1, 4], [4, 7], [2, 3]];

function compareFn2(a, b) {
  if (a[1] < b[1]) return -1;
  if (a[1] > b[1]) return 1;
  return 0;
}

console.log(arr2.sort(compareFn2));

// Question 3: Sort playing cards by value in ascending order, cards of same values should be
// sorted Clubs < Hearts < Spades < Diamonds.
// Note: I didn't really end up using the suggested Card class, I just used plain old objects instead.
class Card {
  constructor(value, suit) {
    self.value = value; // number between 1 and 13
    self.suit = suit;   // 'clubs', 'hearts', 'spades', 'diamonds'
  }
}

let deck = [
  { value: 8, suit: 'hearts' },
  { value: 8, suit: 'clubs' },
  { value: 3, suit: 'clubs' },
  { value: 3, suit: 'hearts' },  
];

function compareCards(a, b) {
  let suitVals = {
    'clubs': 0,
    'hearts': 1,
    'spades': 2,
    'diamonds': 3
  };

  if (a.value < b.value) return -1;
  if (b.value < a.value) return 1;
  if (suitVals[a.suit] < suitVals[b.suit]) return -1;
  if (suitVals[b.suit] < suitVals[a.suit]) return 1;
  return 0;
}

console.log(deck.sort(compareCards));

// Question 4: Sort by a different suit ordering first, then by value.

function compareCards2(a, b) {
  let suitVals = {
    'hearts': 0,
    'clubs': 1,
    'diamonds': 2,
    'spades': 3
  };

  if (suitVals[a.suit] < suitVals[b.suit]) return -1;
  if (suitVals[b.suit] < suitVals[a.suit]) return 1;
  if (a.value < b.value) return -1;
  if (b.value < a.value) return 1;
  return 0;
}

console.log(deck.sort(compareCards2));

// Question 5: Stable sort the cards by value, i.e. for cards of same value, preserve
// the order they appear in the input array.

let deck2 = [
  { value: 9, suit: 'clubs' },
  { value: 4, suit: 'spades' },
  { value: 9, suit: 'spades' },
  { value: 4, suit: 'clubs' },  
];

function compareCards3(a, b) {
  let suitVals = {
    'clubs': 0,
    'hearts': 1,
    'spades': 2,
    'diamonds': 3
  };

  if (a.value < b.value) return -1;
  if (b.value < a.value) return 1;
  return 0;
}

console.log(deck2.sort(compareCards3));
