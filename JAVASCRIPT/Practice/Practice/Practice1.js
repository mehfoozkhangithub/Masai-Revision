let Array = [1, 2, 3, 4, 5, 6, 7, 8];

let string = "mehfooz";

const main2 = () => {
  for (let x of string) {
    console.log(x);
  }
};

function main() {
  for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
  }
}

main2();

main();

let object = {
  name: "mehfooz",
  age: 23,
  study: "Graduate University in Mumbai",
  status: "Unmarried",
  job: "Not have!",
};

for (let x in object) {
  console.log("*************************************************************");
  console.log(object[x]);
}
