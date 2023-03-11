let DataLs = JSON.parse(localStorage.getItem("detail"));

displayTable(DataLs);

function displayTable(DataLs) {
  //   let name = ;
  let position = document.getElementById("position");
  let start = document.getElementById("start");
  let end = document.getElementById("end");
  DataLs.forEach(function (elem) {
    let s = new Date(elem.leaveStartDate);

    let e = new Date(elem.leaveEndDate);

    var diff = e.getTime() - s.getTime();

    var dayDiff = diff / (1000 * 60 * 60 * 24) + "days";

    console.log(dayDiff);

    let name = document.createElement("p");

    name.innerText = elem.name;

    let position = document.createElement("p");
    position.innerText = elem.position;

    let start = document.createElement("p");
    start.innerText = elem.leaveStartDate;

    let end = document.createElement("p");
    end.innerText = elem.leaveEndDate;

    document.getElementById("name").append(name);
    document.getElementById("position").append(position);
    document.getElementById("start").append(start);
    document.getElementById("end").append(end);
    document.getElementById("day_diff").append(dayDiff);
  });
}

//todo:-    here we are selecting  all the  input come form user   //
const form = document.querySelector("#otp-form");
const inputs = document.querySelectorAll(".otp-input");
const verifyBtn = document.querySelector("#verify-btn");

//?  this function handle the all input value input in array  //
const isAllInputFilled = () => {
  return Array.from(inputs).every((inputs) => inputs.value);
};

// ? this is function is getting the otp form "isAllInputFilled" this function give and return the text //
const getOtpText = () => {
  let text = "";
  inputs.forEach((input) => {
    text += input.value;
  });
  return text;
};

// ? this function checking where the otp is there or not if the have then alert the OTP //
const verifyOTP = () => {
  if (isAllInputFilled()) {
    const OTP = getOtpText();
    alert(`your OTP is ${OTP}`);
  }
};

// ?  this function is checking for my text is present and if that present it will append in html some class name filled  to change the color of done element //
const toggleFilledClass = (field) => {
  if (field.value) {
    field.classList.add("filled");
  } else {
    field.classList.remove("filled");
  }
};

// ? this function is for handling the after user will filled the input we focus on new input box //
form.addEventListener("input", (e) => {
  const target = e.target;
  const value = target.value;
  toggleFilledClass(target);
  if (target.nextElementSibling) {
    target.nextElementSibling.focus();
  }
  verifyOTP();
});

// ? this is for input coming and we are handling the event as paste and backspace //
inputs.forEach((input, currentIndex) => {
  toggleFilledClass(input);

  //! pats event
  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    inputs.forEach((item, index) => {
      if (index >= currentIndex && text[index - currentIndex]) {
        item.focus();
        item.value = text[index - currentIndex] || "";
        toggleFilledClass(item);
        verifyOTP();
      }
    });
  });

  //*   backspace event
  input.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) {
      e.preventDefault();
      input.value = "";
      toggleFilledClass(input);
      if (input.previousElementSibling) {
        input.previousElementSibling.focus();
      } else {
        if (input.value && input.nextElementSibling) {
          input.nextElementSibling.focus();
        }
      }
    }
  });
});
