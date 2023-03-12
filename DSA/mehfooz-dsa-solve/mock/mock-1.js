/* const string_1 = "11";
const string_2 = "0110";
let count = 0;

for (let i = 0; i < string_2.length; i++) {
  count++;
}

if (count % 2 === 0) {
  console.log("0");
} else if (count % 2 === 1) {
  console.log("1");
} */

//! this is the second question of mock //
// ? and this question time complexity is O(n) //
// let Array = [0, 0, 1, 0, 0, 1, 0]; //

let Array = [0, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {
  var jumpCount = 0;
  var i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] === 0) {
      jumpCount++;
      i += 2;
    } else if (c[i + 1] === 0) {
      jumpCount++;
      i++;
    }
    if (i === c.length - 1) break;
  }
  return jumpCount;
}

let x = jumpingOnClouds(Array);

console.log(x);

//! this is the second approach upper question

/* function jumpingOnClouds(c) {
  let arrCumulus = [];
for(let i=0; i<c.length; i++) {
if(c[i] === 0) {
  arrCumulus.push(i);
}
}
for(let i=0; i<arrCumulus.length-2; i++) {
if(arrCumulus[i+2]-arrCumulus[i] === 2) {
  arrCumulus.splice(i+1, 1);
}
}
return arrCumulus.length-1;
} */
