const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

let bubblegum=202;
let toffee=118;
let ice_cream=2250;
let milk_chocolate=1680;
let doughnut=1075;
let pancake=80;
let income = (bubblegum + toffee + ice_cream + milk_chocolate + doughnut + pancake);

console.log("Earned amount:");
console.log("Bubblegum: $" + bubblegum);
console.log("Toffee: $" + toffee);
console.log("Ice cream: $" + ice_cream);
console.log("Milk Chocolate: $" + milk_chocolate);
console.log("Doughnut: $" + doughnut);
console.log("Pancake: $" + pancake);
console.log();

console.log("Income:" + income);
let staffExpenses = Number(input("Staff expenses:"));
let otherExpenses = Number(input("Other expenses:"));
let netIncome = income - (staffExpenses + otherExpenses);

console.log("Net income: $" + netIncome);

