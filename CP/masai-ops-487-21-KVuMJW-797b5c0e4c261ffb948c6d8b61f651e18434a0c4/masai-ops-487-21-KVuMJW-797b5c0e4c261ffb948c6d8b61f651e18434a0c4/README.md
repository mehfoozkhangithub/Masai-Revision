# JS-Fetch-Random-Jokes-App

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ get a random joke buttons should exists- 1 marks
 ✅ select category dropdwon should exists - 1marks
 ✅ getRandomJoke should fetch the results - 2 marks
 ✅ getRandomJokeByCategoryshould fetch the results - 2 mark
 ✅ display the random joke in p tag - 2 marks
 ✅ should fail for unsuccessfull getRandomJoke fetch request -1 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

### Use only `textContent` to append the data to the DOM
- Create a button as follows:

  - create the button on `index.html` file as child elements of section with id - container
  - The button should have the id `get-jokes-data`
  - onclicking the `Get a random joke` make a fetch request and display the joke in p tag.
  - ![](https://i.imgur.com/Ky0Yf3i.png)

- Create a dropdown as follows

  - Create a select tag with the id `get-category`
  - It should have the following four categories as options
    - animal
    - career
    - celebrity
    - dev
  - onchanging the category make a fetch request and display the joke in p tag
    ![](https://i.imgur.com/PMv8p0b.png)

- You need to complete the `getRandomJoke` function such that it perform the below mentioned actions: (use try catch block)

  - This function should be called when `getRandomJoke` button is clicked
  - the getRandomJoke function should return the data
  - make an API request to
    https://api.chucknorris.io/jokes/random

  - You need to do error handling such that if the api fails return the test `"something went wrong"`
  - You need to ensure that you use fetch keyword to get the data
  - ![](https://i.imgur.com/IIaeX6E.png)

- You need to complete the `getJokeByCategory` function such that it perform the below mentioned actions: (use try catch block)

  - make an api request to https://api.chucknorris.io/jokes/random?category={category_name}
    - category_name can be animal , career, celebrity or dev.
  - This function should be called on changing the category from the dropdown
  - the `getJokeByCategory` function should accept the event and pass the target value as category_name to the above url which returns the joke data.
  - You need to do error handling such that if the api fails return the text `"something went wrong"`
  - You need to ensure that you use fetch keyword to get the data
  - For example for `animal` category make a request to https://api.chucknorris.io/jokes/random?category=animal

  - below is the sample response object

  ```
  {
  categories: ["animal"],
  created_at: "2020-01-05 13:42:19.104863",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "o0sukejatqchi7oyjms6mw",
  updated_at: "2020-01-05 13:42:19.104863",
  url: "https://api.chucknorris.io/jokes/o0sukejatqchi7oyjms6mw",
  value: "Chuck Norris can set ants on fire with a magnifying glass. At night.",
  };
  ```

  ![](https://i.imgur.com/kWrJkyM.png)

- You need to display the joke value in a p tag
- complete the `setJokes` function by passing the joke result object
- create a div element and it should have a p tag with class = `joke-text` and display the joke value
- append this to the div with an id `joke-container` (already given in index.html)
- **Note:- Do not use any other names for the methods other than mentioned.**

  ####

  ```

  ```

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename jokesApp.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
