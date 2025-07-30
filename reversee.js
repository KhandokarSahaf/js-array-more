const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const number = numbers.reverse();
console.log(number);

// **********************
// **********************

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const reverse_number = [];

for (const number of numbers) {
  reverse_number.unshift(number);
}
console.log(reverse_number);

// **********************
// **********************

const numbers = ["sahaf", "saha", "sah", "sa", "s"];
const reverse = [];

for (i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  reverse.unshift(num);
}
console.log(reverse);

// **********************
// **********************

const numbers = ["sahaf", "saha", "sah", "sa", "s"];
const reverseNumber = [];

for (i = numbers.length - 1; i >= 0; i--) {
  const arrayNum = numbers[i];
  reverseNumber.push(arrayNum);
}
console.log(reverseNumber);
