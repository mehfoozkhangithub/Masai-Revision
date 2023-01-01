/* 




*/


let size=4;


let arr1=new Set([0,0,0]);
let arr2=new Set([0,1,0]);
let arr3=new Set([1,0,1]);
let arr4=new Set([0,1,0,1,1,0,1,1,0,1,1,1,1,0]);

let count=0;
for(let i of arr1){
   if(i==="1"&&i!=="1"){
    count++;
   }
}
console.log(count);