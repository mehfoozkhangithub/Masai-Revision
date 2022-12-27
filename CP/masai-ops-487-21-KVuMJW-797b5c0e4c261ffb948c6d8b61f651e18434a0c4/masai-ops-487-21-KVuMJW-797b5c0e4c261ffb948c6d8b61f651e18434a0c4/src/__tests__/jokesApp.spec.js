const { getRandomJoke, setJokes, getJokeByCategory } = require("../jokesApp");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;
// jest.setTimeout(10000);
let jokes = {
  categories: [],
  created_at: "2020-01-05 13:42:26.447675",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "w1ODpbIIT-qWtyNq6arA7g",
  updated_at: "2020-01-05 13:42:26.447675",
  url: "https://api.chucknorris.io/jokes/w1ODpbIIT-qWtyNq6arA7g",
  value:
    "All bad guys ever kicked by Chuck Norris in TV/movies immediatly died upon end of contract. Chuck Norris respects the Law.",
};
let resByaCategory = {
  categories: ["animal"],
  created_at: "2020-01-05 13:42:28.420821",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "qlg0kzTbS4K_jG1yoNSDEA",
  updated_at: "2020-01-05 13:42:28.420821",
  url: "https://api.chucknorris.io/jokes/qlg0kzTbS4K_jG1yoNSDEA",
  value: "Chuck Norris can understand Charlie Sheen.",
};
jest.dontMock("fs");

describe("fetch random jokes", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("get a random joke buttons should exists", function () {
    expect(document.getElementById("get-jokes-data")).toBeTruthy();
    global.score += 1;
  });
  it("select category dropdwon should exists", () => {
    let fetchSelectTag = document.getElementById("get-category");
    console.log(fetchSelectTag.options.length, "length");
    expect(fetchSelectTag).toBeTruthy();
    expect(fetchSelectTag.options.length).toBe(5);
    global.score += 2;
  });
  it("getRandomJoke should fetch the results", function (done) {
    fetch.mockResponse(JSON.stringify(jokes));
    let fetchBtn = document.getElementById("get-jokes-data");
    fetchBtn.click();
    getRandomJoke()
      .then((res) => {
        expect(res).toEqual({
          categories: [],
          created_at: "2020-01-05 13:42:26.447675",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          id: "w1ODpbIIT-qWtyNq6arA7g",
          updated_at: "2020-01-05 13:42:26.447675",
          url: "https://api.chucknorris.io/jokes/w1ODpbIIT-qWtyNq6arA7g",
          value:
            "All bad guys ever kicked by Chuck Norris in TV/movies immediatly died upon end of contract. Chuck Norris respects the Law.",
        });
        expect(res).toHaveProperty("icon_url", jokes.icon_url);
        expect(res).toHaveProperty("categories", jokes.categories);
        expect(res).toHaveProperty("value", jokes.value);

        expect(fetch).toBeCalled();
        expect(fetch).toBeCalledWith("https://api.chucknorris.io/jokes/random");
        global.score += 2;
        done();
      })
      .catch((err) => done(err));
  });
  it("getRandomJokeByCategoryshould fetch the results", function (done) {
    fetch.mockResponse(JSON.stringify(resByaCategory));
    let fetchSelectTag = document.getElementById("get-category");
    console.log(fetchSelectTag.options.length, "length");
    expect(fetchSelectTag).toBeTruthy();
    expect(fetchSelectTag.options.length).toBe(5);
    let event = { target: { value: "animal" } };
    getJokeByCategory(event)
      .then((res) => {
        console.log(res, "res");
        expect(res).toEqual({
          categories: ["animal"],
          created_at: "2020-01-05 13:42:28.420821",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          id: "qlg0kzTbS4K_jG1yoNSDEA",
          updated_at: "2020-01-05 13:42:28.420821",
          url: "https://api.chucknorris.io/jokes/qlg0kzTbS4K_jG1yoNSDEA",
          value: "Chuck Norris can understand Charlie Sheen.",
        });
        expect(res).toHaveProperty("icon_url");
        expect(res).toHaveProperty("categories", resByaCategory.categories);
        expect(res).toHaveProperty("value", resByaCategory.value);

        expect(fetch).toBeCalled();
        expect(fetch).toBeCalledWith(
          "https://api.chucknorris.io/jokes/random?category=animal"
        );
        global.score += 3;
        done();
      })
      .catch((err) => done(err));
  });

  it("display the random joke in p tag", function () {
    const json = {
      categories: [],
      created_at: "2020-01-05 13:42:23.240175",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "S5MhJGJmTN6SammS2fL13g",
      updated_at: "2020-01-05 13:42:23.240175",
      url: "https://api.chucknorris.io/jokes/S5MhJGJmTN6SammS2fL13g",
      value:
        "If you ever piss Chuck Norris off while he is standing in the light of a full moon, he will naturally turn into a werechuck and fuck you right the hell on up.",
    };

    setJokes(json);
    expect(document.querySelector(".joke-text")).toBeTruthy();
    let res = document.querySelector(".joke-text").textContent;
    expect(res).toBe(json.value);
  });
  it("should fail for unsuccessfull getRandomJoke fetch request", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });
    await expect(getRandomJoke()).resolves.toEqual("something went wrong");
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
