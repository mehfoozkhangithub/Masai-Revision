// # question no 2 UNIQUE GIFT

const uniqueGift = (String) => {
    let object = {};
    let array = [];
    let string = "";
    for (let i = 0; i < String.length; i++) {
      //@ console.log(String[i]);
      if (object[String[i]] === undefined) {
        object[String[i]] = 1;
      } else {
        object[String[i]]++;
      }
      array.push(String[i]);
      console.logrray)
  
      while (array.length != 0) {
          console.log("this is the nor cos", object[array[0]]);
          //   if (object[array[0]] === 1) {
          //     break;
          //   }
          //   else{
          //   }
      }
    }
    console.log("this is object console:", object);
  
    console.log("this is the array console :", array);
  };
  uniqueGift("abcad");