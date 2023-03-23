let normal_div = document.querySelector(".n_count");
let throttling_div = document.querySelector(".t_count");

let normal_count = 0;
let throttling_count = 0;
let isThrottle = true;

// ! In here we are counting normal scroll.
const normal_count_func = () => {
  normal_count++;
  normal_div.innerHTML = `Normal Count : ${normal_count}`;
};

// ! In here we are counting throttling scroll some condition is here to manage the throttling see below.
const throttling_count_func = () => {
  if (isThrottle === true) {
    throttling_count++;
    throttling_div.innerHTML = `Throttling Count : ${throttling_count}`;
    isThrottle = false;
    setTimeout(() => {
      isThrottle = true;
    }, 1000);
  }
};
// console.log(throttling_count);

const myFunc = () => {
  // this is main function which is all function call here;
  normal_count_func();
  throttling_count_func();
};
