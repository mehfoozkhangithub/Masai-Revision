let str = "aabb";
// let str = "abbabaadcbbc";

const warOfMinions = (data) => {
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let value = data[i];

    if (obj[value] === undefined) {
      obj[value] = 1;
    } else {
      obj[value]++;
    }
  }
  let jhola = "";
  for (let key in obj) {
    if (obj[key] % 2 === 1) {
      jhola += key;
    }
  }

  if (jhola === "") {
    console.log(-1);
  } else {
    console.log(jhola);
  }
};

warOfMinions(str);

/* 


    let arr=[];
    for(let i=0;i<n;i++){
    if(arr.length===0){
    arr.push(str[i]);
    }else if(str[i]==arr[arr.length-1]){
    arr.pop();
    }else if(str[i]!=arr[arr.length-1]){
    arr.push(str[i]);
    }
    }
    // console.log(stack);
    if(arr.length===0){
    console.log(-1);
    }else{
    console.log(arr.join(""));
    }


*/

const debuggedArr = () => {
  let n = str.length; // 4 str -> aabb
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (arr.length === 0) {
      arr.push(str[i]);
    } else if (str[i] === arr[arr.length - 1]) {
      arr.pop();
    } else if (str[i] !== arr[arr.length - 1]) {
      arr.push(str[i]);
    }
  }
};
