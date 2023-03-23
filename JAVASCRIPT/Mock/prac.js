// var a = 10;
// let b = 10;

// var c = true;

// if (c === true) {
//   var a = 20;
//   let b = 20;
// }

// console.log(a);
// console.log(b);

// !

// func1();
// func2();

// function func1() {
//   console.log("clg1");
// }

// var func2 = function () {
//   console.log("clg2");
// };

// !

// let obj = {
//   a: 10,
//   b: 10,
// };

// obj.c = 20;
// obj.a = 20;

// console.log(obj);

// !

// var arr = [1, 2, 3, 4, 5, 6];

// var out = arr
//   .filter(function (el) {
//     return el % 3 === 0;
//   })
//   .reduce(function (acc, ele) {
//     return acc + ele ** 3;
//   }, 1);

// console.log(out);

// !

// function func(params) {
//   console.log("clg1");
//   return function () {
//     console.log("clg2");
//     params();
//     return function () {
//       console.log("clg4");
//       return "clg5";
//     };
//   };
// }
// func(function () {
//   console.log("clg3");
// })()();

// !

// console.log(a);
// var a = 10;

// console.log(b);
// let b = 10;

// !

// var nums = [1, 6, 7, 8, 9];

// var out = nums.map(function (elem, index) {
//   return index % 2 === 0;
// });

// console.log(out);

// function sum() {
//   let a = (b = 10);
//   console.log(a);
//   return a;
// }
// sum();

// console.log(a);
// console.log(b);

let myArray = [null, 1, 5, undefined];

myArray.reduce((el) => {
  return el !== undefined;
  //   return el;
});

console.log(myArray);
