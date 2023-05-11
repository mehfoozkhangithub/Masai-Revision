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
