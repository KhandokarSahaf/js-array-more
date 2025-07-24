//      //      //      //      //      //      //
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const num = numbers.reverse();

// console.log(num);
//      //      //      //      //      //      //
const rev_numbers = [];

for (const num of numbers) {
  //   console.log(num);
  rev_numbers.unshift(num);
}
// console.log(rev_numbers);
//      //      //      //      //      //      //
const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  reversed_numbers.unshift(num);
}
// console.log(reversed_numbers);
//      //      //      //      //      //      //
const rev_rev = [];
for (let x = numbers.length - 1; x >= 0; x--) {
  const number = numbers[x];
  rev_rev.push(number);
}
console.log(rev_rev);
