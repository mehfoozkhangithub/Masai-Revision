// let age = 18;

// if (age >= 18) {
//   console.log("You are eligible");
// } else if (age < 18) {
//   console.log("You are under age  or not adult  to vote!!");
// }

// let marks=77;

// if(marks>=90&&marks<=100){
//     console.log("A")
// }

// let amount = 100;

// let discount = (amount / 100) * 10;

// console.log(discount);

// let grade = 1;

// if (grade >= 60) {
//   console.log("You passed");
// } else if (grade <= 50) {
//   console.log("You Filed");
// } else {
//   console.log("Study hard and better luck next time...");
// }

// let ans = grade ? true : false;

// console.log(ans);

// ? Q1 Happy Number.  ***************

let happyNumber_1 = 19;
let happyNumber_2 = 2;

//** this code from rahul side  */

function HappyNumber(N) {
  let num = N;
  let obj = {};
  while (N != 1) {
    if (!obj[N]) obj[N] = 1;
    else {
      console.log("No");
      return;
    }
    N = square(N);
  }
  console.log("Yes");
}
function square(n) {
  let x;
  let val = 0;
  while (n > 0) {
    x = n % 10;
    val += x * x;
    n = Math.floor(n / 10);
  }
  return val;
}

HappyNumber(happyNumber_2);

//** this code from ali side  */

// function isHappy(n) {
//   let seen = new Set();

//   while (!seen.has(n)) {
//     seen.add(n);
//     sqSum = 0;
//     while (n > 0) {
//       sqSum += (n % 10) * (n % 10);
//       n = Math.floor(n / 10);
//     }
//     if (sqSum === 1) {
//       console.log("Yes");
//       return;
//     }

//     n = sqSum;
//   }
//   console.log("No");
// }

// isHappy(happyNumber_2);

// END Question  Happy Number *********

// ? Transversal matrix

let matrix = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

let colum = matrix[0].length;
let row = matrix.length;

for (let i = 0; i < colum; i++) {
  let bag = "";
  for (let j = 0; j < row; j++) {
    bag += matrix[j][i] + " ";
  }
  console.log(bag);
}

//* END of Traversal Matrix

// ?
/* 
You are given an array of integers of size N. You need to find and point maximum sum of contiguous sub array from this array 

output Description 
for each test case print the maximum sum of contiguous array on new line 

sample input 
2 
5
1 2 0 4 5 
5 
3 -4 1 2 -1

sample output 
12
3

*/

let arr = [3, -4, 1, 2, -1];
// let arr = [1, 2, 0, 4, 5];

//* function to find maximum sum of contiguous subarray
function findMaxSumSubarray(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];
    console.log("this is the ending wala console", maxEndingHere);
    console.log("this is the maxSofar wala console", maxSoFar);
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
}

let ans = findMaxSumSubarray(arr);
console.log(ans);
