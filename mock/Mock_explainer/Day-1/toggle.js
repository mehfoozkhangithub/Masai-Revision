// example code
function toggler(...args) {
  let index = 0; // initialize index to 0

  return function () {
    const result = args[index]; // get the current value at index
    index = (index + 1) % args.length; // increment index and wrap around if it exceeds array length
    return result;
  };
}
const toggle = toggler(1, 2, 3);

console.log("this is first trigger function", toggle());
// 1
console.log("this is second trigger function", toggle());
// 2
console.log("this is third trigger function", toggle());
// 3
