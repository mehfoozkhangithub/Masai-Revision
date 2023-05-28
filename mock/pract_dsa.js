// $ question no 1 put the zero at last

let arr_1 = [0, 1, 2, 3, 0]; //$ 0 arr 0  // 12300
let arr_2 = [0, 0, 1, 2, 3]; //$ 00 arr // 12300
let counter = 0; //. this is for updating the index or handle the index position

// console.log("this is the before loop result:", arr_1);

for (let i = 0; i < arr_1.length; i++) {
  if (arr_1[i] !== 0) {
    arr_1[counter] = arr_1[i];
    counter++;
  }
  //* [1,2,3,0,0];
}

//. [1,2,3,3,0];

//# counter in this stage -> 3

//? this is the length of the arr_1 -> 5
while (counter < arr_1.length) {
  arr_1[counter] = 0;
  counter++;
}
// console.log("this is the after loop result:", arr_1);
// console.log(counter);

// # question no 2 UNIQUE GIFT

const uniqueGift = (String) => {
  let object = {};
  let array = [];
  let string = "";
  for (let i = 0; i < String.length; i++) {
    //@ console.log(String[i]);
    if (object[String[i]] === undefined) {
      object[String[i]] = 1;
    } else {
      object[String[i]]++;
    }
    array.push(String[i]);

    while (array.length != 0) {
      if (object[array[0]] === 1) {
        break;
      } else {
        array.shift();
      }
    }

    if (array.length === 0) {
      string += "#";
    } else {
      string += array[0];
    }
  }
  // console.log(object);
  // console.log(string);
  // console.log(array);
};
uniqueGift("abcad");

//# Question no 3 CONSECUTIVE EVEN NUMBER

const consecutiveNumber = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  console.log(count);

  if (count >= 3) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
consecutiveNumber([1, 2, 3, 4]); //. this is the one case
// consecutiveNumber([1,2,4,6,8]) //# this is the another case

//# Question 4 CONVERT_To_ROMAN

const convertToRoman = (num) => {
  const define_roman_number_table = {
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
  let bagCatchValue = "";

  for (let key in define_roman_number_table) {
    while (num >= define_roman_number_table[key]) {
      bagCatchValue += key;
      num -= define_roman_number_table[key];
      console.log(num);
    }
  }
  console.log(bagCatchValue);
};
convertToRoman(8);

// # QUESTION  NO 5 FACTORIAL

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

let ans = factorial(5);

console.log(ans);

// # end

// # QUESTION  NO 6 FIND MAXIMUM SUM

let array_1 = [3, -4, 1, 2, -1];

let array_2 = [1, 2, 0, 4, 5];

const findMaxSum = (arr) => {
  let presentVal = 0;
  let currentVal = 0;

  for (let i = 0; i < arr.length; i++) {
    //# for in loop will iterate with index
    //.  for in loop will iterate with value

    // $  this is our array --> [1,2,0,4,5]
    currentVal += arr[i]; //@ here we are putting value in this variable
    if (currentVal < 0) {
      //! handle negative value
      currentVal = 0;
    }

    if (currentVal > presentVal) {
      //? if the prev value grater then pres value then it will save to pres as prv value;
      presentVal = currentVal;
    }
  }
  console.log(presentVal);
};

findMaxSum(array_2);

// # QUESTION NO 7 HAPPY NUMBER

/*
# var num = 123456;
# var digits = num.toString().split('');
# var realDigits = digits.map(Number)
# console.log(realDigits);
*/

/* 

! test cases

. 11 -> false
. 7 -> true
. 1 -> true


*/

const happyNumber = (number) => {
  let flag = false;

  let sum = 0;

  number = Array.from(String(number), Number);

  if (number.length !== 1) {
    for (let i = 0; i < number.length; i++) {
      sum += number[i] * number[i];
      number = sum;
      if (sum === 1) {
        flag = true;
      }
    }
  }

  if (flag) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
happyNumber(11);

//# Reverse the number

let number = 123456789;

// Initializing the result variable
let result = 0;

while (number > 0) {
  //# Getting the rightmost digit
  rightmost = number % 10;

  //. Getting result is prev value from rightmost and
  result = result * 10 + rightmost;

  //@ Removing the rightmost digit from the number
  number = Math.floor(number / 10);
}
console.log("Reversed number is : " + result);

//# remove duplicate in array

let duplicate_Array = [1, 1, 3, 2, 4, 5]; //@ this is the duplicate array

let new_Array = []; //. this is new array

// let sort=duplicate_Array.sort(); //! this is the sort.Method

duplicate_Array.sort((a, b) => {
  //* In this we create function  applied sort algorithm

  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

// console.log(duplicate_Array);

let obj_1 = {};

for (let i = 0; i < duplicate_Array.length; i++) {
  // console.log(duplicate_Array[i])

  if (obj_1[duplicate_Array[i]] === undefined) {
    obj_1[duplicate_Array[i]] = 1;
  } else {
    obj_1[duplicate_Array[i]]++;
  }
}

for (let key in obj_1) {
  let change_into_number = Number(key); //* this condition is use for converting str to num;
  new_Array.push(change_into_number);
}
console.log(new_Array);

// for (const iterator of new_Array) {
//     console.log( typeof iterator)
// }
//# this is loop is for checking my final array have number of string types because that is also the '#cases'

let str = "abadbc"; //#  ans ->   aabbdd

let str_1 = "abcabc"; //# ans ->   aaabc#

let Queue = [];

let obj_cont = {};

let answer = "";

for (let i = 0; i < str_1.length; i++) {
  if (obj_cont[str_1[i]] === undefined) {
    obj_cont[str_1[i]] = 1;
  } else {
    obj_cont[str_1[i]]++;
  }

  Queue.push(str_1[i]);

  while (Queue.length) {
    if (obj_cont[Queue[0]] === 1) {
      break;
    } else {
      Queue.shift();
    }
  }

  if (Queue.length === 0) {
    answer += "#";
  } else {
    answer += Queue[0];
  }
}

console.log(Queue);

console.log(answer);

//# this is the leet code quest happy number

function isHappy(n) {
  const squares = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  };
  const memo = new Map();

  let temp = n;
  while (!memo.get(temp)) {
    temp = temp
      .toString()
      .split("")
      .reduce((acc, i) => {
        console.log(acc, i);
        acc += squares[i];
        console.log(acc, i);
        return acc;
      }, 0);
    if (!memo.has(temp)) memo.set(temp, false);
    else return false;
    if (temp === 1) return true;
  }
}

let ans1 = isHappy(1);

console.log(ans1);

// # maxSubarrayProduct

let Arr_0 = [6, -3, -10, 0, 2];
// Output:   180  // The subarray is {6, -3, -10}

let Arr_00 = [-1, -3, -10, 0, 60];
//Output:   60  // The subarray is {60}

function maxSubarrayProduct(arr, n) {
  // Initializing result
  let result = arr[0];

  for (let i = 0; i < n; i++) {
    let mul = arr[i];
    // traversing in current subarray
    for (let j = i + 1; j < n; j++) {
      // updating result every time
      // to keep an eye over the maximum product
      result = Math.max(result, mul);
      mul *= arr[j];
    }
    // updating the result for (n-1)th index.
    result = Math.max(result, mul);
  }
  return result;
}

maxSubarrayProduct(Arr_0, Arr_0.length);

//#  Binary matrix question

let matrix = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];

function binaryMatrix(N, M, matrix) {
  for (var i = 0; i < N; i++) {
    let ans = [];
    for (var j = 0; j < M; j++) {
      if (matrix[i][j] === 1) {
        ans.push("0");
      } else if (matrix[i][j] === 0) {
        ans.push("1");
      }
    }
    console.log(ans.join(" "));
  }
}

// # this is the geeks for geeks [this is out of syllabus question for self understanding];

let mat = [
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 0],
];

let mat_2 = [
  [1, 0, 1, 1],
  [1, 2, 0, 1],
  [0, 0, 1, 1],
];

// function to check if a matrix is binary matrix
// or not
function isBinaryMatrix(mat) {
  let M = mat.length;
  let N = mat[0].length;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      // Returns false if element is other than 0 or 1.
      if (!(mat[i][j] == 0 || mat[i][j] == 1)) return false;
    }
  }

  // Returns true if all the elements
  // are either 0 or 1.
  return true;
}

let ans11 = isBinaryMatrix(mat);

console.log(ans11);

//# Reverse the string with the stack

//Reverse the string using queue

let str_10 = "A transformation in Education";

let stack = [];

let reversedStr = "";

for (let i = 0; i < str_10.length; i++) {
  stack.push(str_10[i]);
}

//Creates a reversed string by popping the stack.

while (stack.length != 0) {
  reversedStr += stack.pop();
}
//returns the reversed string.
console.log(reversedStr);

//# bbl sort

function bblSort() {
  let ar1 = [1, 2, 3];
  let ar2 = [6, 5, 4];
  let arr = ar1.concat(ar2);

  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  console.log(arr);
}

bblSort();

function steps(num) {
  if (num === 0) {
    return 1;
  }
  if (num < 0) {
    return 0;
  }
  return steps(num - 1) + steps(num - 2) + steps(num - 3);
}

console.log("this is recursion problem :)->", steps(4));

function reverseTheString(str) {
  let stack = [];
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.length != 0) {
    ans += stack.pop();
  }

  console.log("this is stack reverse problem:-", stack);
  console.log("this is stack reverse problem console.log:-", ans);
}
reverseTheString("noitacudE ni noitamrofsnart A");

function factorial1(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial1(num - 1);
}

console.log("this is factorial1 problem solution:-", factorial1(5));

// #  this is more optimized way to solve the program of balance the bracket

function myFunction(str) {
  const openingBrackets = ["[", "(", "{"];
  const closingBrackets = ["]", ")", "}"];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closingBrackets.includes(str[i])) {
      const expectedBracket = openingBrackets[closingBrackets.indexOf(str[i])];
      if (stack.length === 0 || stack.pop() !== expectedBracket) {
        console.log("unbalanced");
        return;
      }
    }
  }
  if (stack.length === 0) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}

// Test cases
myFunction("{(})]["); // unbalanced
myFunction("[{()}]"); // balanced
// myFunction("{(})]["); // unbalanced
// myFunction("[{()}]"); // balanced

// # this is roman to integer

let str_12 = "MCMXCIV";
// let str_12 = "III";
function romanToInteger(s) {
  const table = {
    I: 1,
    V: 5,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    // console.log("this is roman to integer:->", s[i]);
    let currentVal = table[s[i]];
    let nextVal = table[s[i + 1]];
    // console.log(currentVal, nextVal);
    if (currentVal < nextVal) {
      ans += nextVal - currentVal;
      i++;
    } else {
      ans += currentVal;
    }
  }
  console.log(ans);
}
romanToInteger(str_12);
