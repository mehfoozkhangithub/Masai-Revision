// let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let bag = "";
// for (let i = Array.length - 1; i >= 0; i--) {
//   bag += Array[i] + " ";
// }

// let ans = bag.split(" ").map(Number);

// // console.log(ans);

// let string = "Mehfooz Khan";

// for (let i = 0; i < string.length; i++) {
//   console.log(string[i]);
// }

// ******************** //  1 9 -> 1 + 81 = 82 ->64+4=68 -> 36+64=100

let num1 = 19; //YES
let num2 = 2; //NO
// output was 1 and if that match we have to print YES or NO;

// while (num1) {}
// function recursion(){

// }
function extractDigits(num) {
  let sum = 0;
  while (num != 0) {
    let lastDigit = num % 10;
    sum += lastDigit;
    // console.log(lastDigit);
    num = num / 10;
  }
  console.log(sum);
}
extractDigits(19);

/* sum = 0;

while (num1) {
  console.log("this is checking num1", num1);
  sum += num1 % 10;
  console.log("this is the sum after module operation", sum);
  num1 = Math.floor(num1 / 10);
}

console.log("this for  checking what is in the real time num1", num1);
console.log(sum);
*/

// ********************** //

let arr1 = [1, 2, 0, 4, 5]; // 12

let arr2 = [3, -4.1, 2, -1]; // 3

//! find the contagious sub array;

// *********************** //

let mat = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

/* 
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
*/
