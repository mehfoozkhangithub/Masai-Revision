// Code that you want to import goes here

const getImgData = () => {
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // res.forEach((element, i) => {
      //   if (i < 5) imgDataArr.push(element.url);
      //   else return;
      // });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
getImgData();
