# WEB - Masai Fetch E-Commerce Advanced

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the api call made - 2 marks.
 ✅ Student is able to loop through the data and append in the dom - 3 marks.
 ✅ Check the filter  - 3 marks.
 ✅ Check multiple filters - 2 marks.
 ✅ Check Add To Cart - 2 marks.
 ✅ Check if adding same product to cart multiple times works or not - 2 marks.
 ✅ In Cart page making the api requests - 2 marks.
 ✅ Able to loop through the data and show it on dom in cart - 2 marks
 ✅ Total Of the cart is visible - 1 mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html(Home Page)
- cart.html(Cart Page)
- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- In this application, we have 2 different pages:-
  1. index.html(Home Page)
  2. cart.html(Cart Page)

#### index.html(Home Page):-

- On loading this page make an API request with fetch in this API end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`.

- On Successful API request, you will get a response of E-Commerce product data which is in form of Array of Objects.

- Loop over the response data and create small cards. In your template there is a div id:- `product-container`. Inside that div there are 2 more divs. On the first div append the cards.

- Show 3 cards per row with a display grid.

- Refer to this image for better understanding:-
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-05/Screenshot%202023-01-05%20at%203.23.52%20PM_864053.png)

- In the template there is a div with id:- `filter`. Inside that you have 3 more divs.

  1. `brand-filter`
  2. `category-filter`

- The first two divs have some checkboxes inside them. You have you apply the filters using these checkboxes.
- Now if the user does not check any checkboxes show them all the products.

- If The user checks the check box with id:- `roadster` which is inside `brand-filter`, show them only the products that have brand as `roadster`.
  ![img](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-05/Screenshot%202023-01-05%20at%203.25.18%20PM_450735.png)
- Similarly if the user checks the `blackberrys` checkbox which is also inside `brand-filter` show the user product which has either brand as `roadster` or `blackberrys`.
  ![img](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-05/Screenshot%202023-01-05%20at%203.26.00%20PM_279522.png)

- Now along with the above example if the user checks `men` checkbox which is inside `category-filter` show the user those products that has brand as either `roadster` or `blackberrys` and has category as `men`.
  ![imag](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-05/Screenshot%202023-01-05%20at%203.26.36%20PM_808881.png)

- All the diff filters should work together seamlessly.

- Each Product card should also have a button inside them with text `Add To cart`.

- Clicking on that the product should be added to the localstorage with key `cart`.

- The user should not be able to add the same product to the cart multiple times.

- If adding to cart is successful the h1 tag with id:- `alert` inside template should have text:- `Product added to The cart` else the text should be `Product already in the cart`.

- In the cart localStorage don't store the whole Product data just store the id of that product.

#### cart.html(Cart Page):-

- In this page you have to take the data from the `cart` localStorage. In the localStorage as only the ids has been stored we need to make api request to get the whole product data.
- `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/id` in this api end if in place of this id you put id of the product and make the fetch request you will get the data of that perticular product.

- Loop over that data and show them in form of cads in a div with id:- `cart-container`(Given in the template)

- In the template there is also a span tag with an id:- `cart-total`. Show the total of your cart there.
- Total of cart means sum of the price of all the products in the cart.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
