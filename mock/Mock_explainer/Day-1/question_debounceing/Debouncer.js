const getData = () => {
  // calls an API and get the data;
  console.log("fetching the data ...");
};

//  doSomeMagic === debounce both function is same;
const doSomeMagic = (fu, delay) => {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    console.log("this is context output", context);
    console.log("this is argument output", args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = doSomeMagic(getData, 300);
