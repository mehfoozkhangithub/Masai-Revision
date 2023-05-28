// let num_1=19;

// let num_2=2;

// const happyNumber = (x) =>{

//     let obj={};

//     while(x!==1){
//         if(!obj[x]){
//             obj[x]=1;
//         }
//         else{
//             console.log("No");
//             return
//         }
//         x=square(x);
//     }
//     console.log("Yes");
// }

// function square(n){

//     let m;
//     let val=0;

//     while(n>0){
//         m=n%10;

//         val+=m*m;

//         n=Math.floor(n/10);
//     }
//     return val;

// }

// happyNumber(num_2);

// # this is the geeks for geeks searching if all element is not in 1 and 0 formate so we have to find that in this

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
  console.log(N, M);
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      //! Returns false if element is other than 0 or 1.
      if (!(mat[i][j] == 0 || mat[i][j] == 1)) return false;
    }
  }

  //. Returns true if all the elements
  //. are either 0 or 1.
  return true;
}

let ans11 = isBinaryMatrix(mat_2);

//   console.log(ans11);

//#  Binary matrix question

let matrix = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];

function binaryMatrix(N, M, matrix) {
  for (let i = 0; i < N; i++) {
    let ans = [];
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 1) {
        ans.push("0");
      } else if (matrix[i][j] === 0) {
        ans.push("1");
      }
    }
    console.log(ans.join(" "));
  }
}

binaryMatrix(matrix.length, matrix[0].length, matrix);

let store = [];

store.push({ name: "aman" });

console.log(store);

//# zero to end

let arr_11 = [0, 0, 1, 2, 0, 3];

let arr_12 = [1, 0, 2, 0, 3, 3, 0];

let count = 0;

for (let i = 0; i < arr_11.length; i++) {
  if (arr_11[i] !== 0) {
    arr_11[count] = arr_11[i];
    count++;
  }
}

while (count < arr_11.length) {
  arr_11[count] = 0;
  count++;
}
console.log(arr_11);
console.log(count);

function balance(str) {
  let n = str.length;
  let a = 0;
  let b = 0;
  let bag = "";
  for (let i = 0; i < n; i++) {
    bag = str[i] + str[i + 1];
    if (bag === "ab") {
      a++;
    } else if (bag === "ba") {
      b++;
    }
  }

  console.log(Math.abs(a - b));
}

balance("abbaab");
balance("abba");

//# balance string

// # steps taken

// let number =4; // output:7;

// function steps(num){
//   if(num===1){
//     return 1;
//   }
//   if(num===0){
//     return 0;
//   }

//   return steps(n-1)+steps(n-2)+steps(n-3)
// }
// let ans=steps(number)

// console.log(ans);
