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
