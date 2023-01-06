/**
 * * How to insert array with dsa
 *
 * How to Traverse array with dsa
 *
 * ? How to Search array with dsa
 *
 * ! How to delete array with dsa
 *
 * todo:  solutions
 */

let arr = [10, 20, 40, 60, 77, 88];

/* Q-1 traverse */

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let x of arr) {
  console.log(x);
}

/*  Q-2 Searching */

let element = 77;
let index = undefined;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === element) {
    index = i;
    break;
  }
}

console.log(index);

/* How to merge tow array  */

let arr1 = new Array(1, 2, 3, 4, 5, 6);
let arr2 = new Array(7, 8, 9, 10, 11, 12);

console.log(arr1);
console.log(arr2);

let arr3 = new Array();

// let arr3 = new Array(...arr1,...arr2); // we use here spread operator

// console.log(arr3)

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}

for (let i = 0; i < arr2.length; i++) {
  arr3[arr1.length + i] = arr2[i];
}

console.log(arr3);

/* Q-4  How can we Insert the element in array */

/* Q-5 How can we delete the element in array */

let newArr = [1, 2, 3, 8, 7, 6, 5];

let index1 = 1;

/* for(let i=index1;i<newArr.length;i++){
newArr[i]=newArr[i+1]; // i am doing cloning the forward element in the current position and it will add another element in array and the last element will be undefined so we can do some thing to manage that 
}
console.log(newArr);

newArr.length=newArr.length-1; // this will handle the # Case of getting undefined previously as you can see the console of line 95 

console.log(newArr);
 */
