import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
import apiData from "../fixtures/apiData.json";
import filterData from "../fixtures/filterData.json";
describe("Test", function () {
  let acc_score = 1;

  const checkCard = (data, index, get = "", index2) => {
    for (let key in data.data[index2]) {
      if (key != "id" && key != "image") {
        cy.get(get).eq(index).contains(data.data[index2][key]);
      }
    }
  };

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check if the api call made`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,
          (req) => {
            req.reply({
              body: apiData,
            });
          }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          acc_score += 2;
        });
      }); // 2
      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.get("#product-container>div")
          .eq(0)
          .children()
          .should("have.length", apiData.data.length)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#product-container>div")
          .eq(0)
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 1;
          });
        checkCard(apiData, 0, "#product-container>div>div");
        checkCard(apiData, 9, "#product-container>div>div");
        cy.then(() => {
          acc_score += 1;
        });
      }); // 3
      it(`Check the filter`, () => {
        cy.visit(url);
        cy.get("#roadster").check();
        cy.get("#men").check();
        cy.get("#product-container>div")
          .eq(0)
          .children()
          .should("have.length", filterData["roadster-men"].length);
        checkCard(
          { data: filterData["roadster-men"] },
          0,
          "#product-container>div>div",
          0
        );
        checkCard(
          { data: filterData["roadster-men"] },
          1,
          "#product-container>div>div",
          1
        );

        cy.then(() => {
          acc_score += 3;
        });
      }); //3

      it(`Check multiple filters`, () => {
        cy.get("#twills").check();
        cy.get("#product-container>div")
          .eq(0)
          .children()
          .should("have.length", filterData["roadster-twills-men"].length);
        checkCard(
          { data: filterData["roadster-twills-men"] },
          0,
          "#product-container>div>div",
          0
        );
        checkCard(
          { data: filterData["roadster-twills-men"] },
          1,
          "#product-container>div>div",
          1
        );
        cy.then(() => {
          acc_score += 2;
        });
      }); //2

      it(`Check Add To Cart`, () => {
        cy.visit(url);
        expect(localStorage.getItem("cart")).eq(null);
        cy.get("#product-container>div")
          .eq(0)
          .children("div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("cart")).length).eq(1);
          });
        cy.get("#product-container>div")
          .eq(0)
          .children("div")
          .eq(1)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("cart")).length).eq(2);
          });
        cy.then(() => {
          acc_score += 2;
        });
      }); //2
      it(`Check if adding same product to cart multiple times works or not`, () => {
        cy.get("#alert").contains("Product added to The cart");
        cy.get("#product-container>div")
          .eq(0)
          .children("div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("cart")).length).eq(2);
          });
        cy.get("#alert").contains("Product already in the cart");
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2
      it(`In Cart page making the api requests`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${apiData.data[0].id}`
        ).as("apiRequest1");
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${apiData.data[0].id}`
        ).as("apiRequest2");
        cy.visit(`${url}/cart.html`);
        cy.wait("@apiRequest1");
        cy.wait("@apiRequest2");

        cy.then(() => {
          acc_score += 2;
        });
      }); // 2
      it(`Able to loop through the data and show it on dom in cart`, () => {
        cy.get("#cart-container").children("div").should("have.length", 2);
        checkCard(apiData, 0, "#cart-container>div", 0);
        checkCard(apiData, 1, "#cart-container>div", 1);
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it(`Total Of the cart is visible`, () => {
        cy.get("#cart-total").contains("1543");
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
