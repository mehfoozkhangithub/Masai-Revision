// const check = (n) => {
//   for (let i = 2; i <= n - 1; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };

// for (let i = 100; i <= 900; i++) {
//   if (check(i)) {
//     console.log("prime no hu bhai:", i);
//   }
// }

// ! =============== optimize =============//

let Array = [];
let ps = [];

for (let i = 0; i < 10; i++) {
  Array.push(i + 1);
  let pr = Array.shift();
  // ps.push(i)
  console.log(pr);
}
