const button = document.querySelector("#myButton");
button.addEventListener(
  "click",
  throttler(() => {
    console.log("Button clicked!");
  }, 1000)
);

function throttler(callback, delay) {
  let throttleTimeout = null;

  return function () {
    const args = arguments;
    const context = this;

    if (!throttleTimeout) {
      throttleTimeout = setTimeout(function () {
        callback.apply(context, args);
        throttleTimeout = null;
      }, delay);
    }
  };
}
