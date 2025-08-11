let num = [1, 2, 3, 4, 5, 6, 7];
let reverseNumber = [];

// for (const numbers of num) {
//   //   console.log(numbers);
//   reverseNumber.unshift(numbers);
// }
// console.log(reverseNumber);

for (i = 0; i < num.length; i++) {
  const number = num[i];
  reverseNumber.unshift(number);
}
console.log(reverseNumber);
