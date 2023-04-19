# Interview HandBook `Revision`

1. Mock _DSA_ Interview `Problem With Solution`

- Q1. Happy Number

```Javascript
let happyNumber_1 = 19; // this is only the number which we get from user and we have to iterate  this value.
let happyNumber_2 = 2;

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

// output

/*

Yes
No

*/


```

- Q2. Transversal matrix

```js
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

// output

/* 

0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4

*/
```

    Q3. You are given an array of integers of size N. You need to find and point maximum sum of contiguous sub array from this array
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

```js
// let arr = [1, 2, 0, 4, 5];
let arr = [3, -4, 1, 2, -1];

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

// output

/* 

12
3

*/
```

- This is for `Coding Mock Interview Question`
