// Reverse using variableName.reverse()
const name = ["a", "b", "c", "d", "e"];
let reverseName = name.reverse();

console.log(reverseName);

// Declare a variable then use for loop use for of then call the empty variable using unshift property
const numbers = [1, 2, 3, 4, 5];
let reverseNumbers = [];

for (const num of numbers) {
  reverseNumbers.unshift(num);
}
console.log(reverseNumbers);

// using for loop with arrays length
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let fruit = [];

for (let i = 0; i < fruits.length; i++) {
  const folmul = fruits[i];
  fruit.unshift(folmul);
}
console.log(fruit);

// using for loop and push 
const Numbers = [10, 20, 30, 40, 50];
const num = [];

for(let x = Numbers.length - 1; x >= 0; x--){
    const hellNumbers = Numbers[x];
    num.push(hellNumbers);
}
console.log(num);