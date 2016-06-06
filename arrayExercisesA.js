//Positive Numbers
var arr = [1, 3, -5, 3, -9];
var positives = arr.filter(function(n) {
  return n >= 0;
});
console.log(positives);

//Square the Numbers
var arr1 = [2, 3, 4, 5];
var squared = arr1.map(function(n) {
  return n * n;
});
console.log(squared);

//Good Job!
var people = [
  'Sandhya',
  'Dave',
  'Carolyn',
  'DeeAnn',
  'Allen',
  'Anthony',
  'Kyle',
  'Shanda',
  'Cody',
  'Tim',
  'Regan',
  'Matt',
  'Andrew'
];
var sentences = people.map(function(person) {
  return 'Good job, ' + person;
});
var result = sentences.join('\n');
console.log(result);

//All "A" Names
function startsWithA(str) {
  if (str.charAt(0) === 'A') {
    return true;
  }
}
var aStudents = people.filter(startsWithA);

//Costs
var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];
var prices = items.map(function(n) {
  return n.price;
});
console.log(prices);

var priceOverTen = items.filter(function(n) {
  return n.price > 10;
});
console.log(priceOverTen);

var totalCost = items.map(function(n) {
  return n.price * n.quantity;
});
console.log(totalCost);

//Sum the Array
var arr2 = [1, 2, 3, 4, 5];
var sum = arr2.reduce(function(sum, n) {
  return sum + n;
}, 0);
console.log(sum);

//Get the Largest Number
var array = [1, 2, 3, 4, 5];
var largest = array.reduce(function(currentValue, number) {
  if (number > currentValue) {
    return number;
  } else {
    return currentValue;
  }
}, array[0]);
console.log(largest);


//Total Cost
var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];
var totalCosts = items.map(function(n) {
  return n.price * n.quantity;
});
var total = totalCosts.reduce(function(sum, n) {
  return sum + n;
}, 0);
console.log(total);

//Sum Array of Arrays
var arr4 = [
  [1, 2, 3],
  [4, 5],
  [6, 7]
];
var sums = arr4.map(function(n) {
  var sum = n.reduce(function(currentValue, n) {
    return currentValue + n;
  }, 0);
  return sum;
});
var finalSum = sums.reduce(function(sum, n) {
  return sum + n;
});
console.log(finalSum);


//Is All Positives
var arr3 = [1, -4, 5, -6, -11, 9];
var positivity = arr3.every(function(n) {
  return n >= 0;
});
console.log(positivity);
