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
  // 19
  let obj = {}; // ! checking
  while (N != 1) {
    // * condition for checking
    if (!obj[N]) obj[N] = 1;
    else {
      console.log("No");
      return;
    }
    N = square(N);
  }
  console.log("Yes");
  console.log("this is object", obj);
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

HappyNumber(happyNumber_1);

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

// let arr = [3, -4, 1, 2, -1];
let arr = [1, 2, 0, 4, 5];

//* function to find maximum sum of contiguous subarray
function findMaxSumSubarray(arr) {
  let maxSoFar = 0; // [1, 2, 0, 4, 5]
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
findMaxSumSubarray(arr);
// ? This is the question factorial ?

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// ? This is the question Balance parenthesis ?

let str = "{(})][";

let str1 = "[{()}]";

function myFunction(str) {
  let flag = true;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length !== 0 && stack[stack.length - 1] == str[i]) {
      stack.pop();
    } else {
      if (str[i] == "[") {
        stack.push("]");
      } else if (str[i] == "(") {
        stack.push(")");
      } else if (str[i] == "{") {
        stack.push("}");
      } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
        flag = false;
      }
    }
  }
  if (stack.length == 0 && flag) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}

myFunction(str1);

// ? This is question Zero to end ?

let nums = [2, 0, 1, 0, 3];

let count = 0;
for (var i = 0; i < nums.length; i++) {
  if (nums[i] != 0) {
    nums[count] = nums[i];
    count++;
  }
}
while (count < nums.length) {
  nums[count] = 0;
  count++;
}
return console.log(nums);

function convertToRoman(num) {
  const romanNumeralTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  for (let key in romanNumeralTable) {
    while (num >= romanNumeralTable[key]) {
      romanNumeral += key;
      num -= romanNumeralTable[key];
    }
  }

  return romanNumeral;
}

console.log(convertToRoman(4)); // Output: "IV"
console.log(convertToRoman(9)); // Output: "IX"
console.log(convertToRoman(14)); // Output: "XIV"
console.log(convertToRoman(3999)); // Output: "MMMCMXCIX"
