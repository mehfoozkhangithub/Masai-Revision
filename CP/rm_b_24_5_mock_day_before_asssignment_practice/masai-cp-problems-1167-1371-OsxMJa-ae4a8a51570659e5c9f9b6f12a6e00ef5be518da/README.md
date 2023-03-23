# WEB - Masai NGO Management App

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit Storing Data is LS - 1 marks.
 ✅ Visit the donators page and check the table - 2 marks.
 ✅ Check Filtering in donators Page  - 1 marks.
 ✅ Check the Deleting in donators page  - 1 marks.
 ✅ Visit the volantiers page and check the table  - 2 marks.
 ✅ Check Filtering in volantiers Page - 1 mark.
 ✅ Check the Deleting in the volantiers Page - 1 mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- donators.html
- volantiers.html
- Scripts/index.js
- Scripts/donators.js
- Scripts/volantiers.js
- For css you can create a style tag in the html pages or you can create css files.
- Please ignore all the other files except the above-mentioned ones.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- Build a NGO management application with HTML,CSS, JS, DOM and LS.
- Your application have a Navbar that contains 3 tabs (this is already in the template no need to build).
  1. Home(index.html)
  2. Donators(donators.html)
  3. Volantiers(volantiers.html)
     ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-02-02/Screenshot%202023-02-02%20at%203.35.58%20PM_223234.png)

### Home Page:-

- This page contains a form with 3 input boxes and 2 select tags having the following fields (this is already in the template no need to build).

1. Name (Input-Type-text)
2. Phone Number (Input-Type-number)
3. Email (Input-Type-email)
4. Category (Select)
5. Type (Select)

- On clicking on form submit (form submit event) you should store contact data in your local storage with key `Helpers`.

`Hint : localStorage.setItem("Helpers",JSON.stringify(data))`

- Refer to this image for better understanding:- ![form.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-02-02/Screenshot%202023-02-02%20at%203.34.21%20PM_125848.png)

### Donators Page:-

- On this page take the data from `Helpers` localStorage and show only those data that has `type` as `Donator`.
- This page will have a table and you have to show the data as table rows.

- The table will have the following columns:-

  1. Name
  2. Phone No.
  3. Email
  4. Category
  5. Delete

- Here the values will come from the LacalStorage Except for the last column.

- On all the rows of the last column will have this value `Delete`. This word is case sensitive. Please note that.

- When clicked on the `Delete` cell that row should be deleted both from DOM and LS.

- Refer to this image for better understanding ![donators.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-02-02/Screenshot%202023-02-02%20at%203.34.49%20PM_955650.png)

### Volantiers Page:-

- On this page take the data from `Helpers` localStorage and show only those data that has `type` as `Volantier`.
- This page will have a table and you have to show the data as table rows.

- The table will have the following columns:-

  1. Name
  2. Phone No.
  3. Email
  4. Category
  5. Delete

- Here the values will come from the LacalStorage Except for the last column.

- On all the rows of the last column will have this value `Delete`. This word is case sensitive. Please note that.

- When clicked on the `Delete` cell that row should be deleted both from DOM and LS.

### Filtering Data:-

- In both the Donators Page and Volantiers Page you will have a select tag with id:- `filter`.

- The user should be able to filter the table data by `category` using the select tag.

- When the user selects the default option in the select tag the user should be able see all the data.
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-02-02/Screenshot%202023-02-02%20at%203.35.08%20PM_260283.png)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
