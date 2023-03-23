import data from "../../submissionData.json"; // do not create this file
import "cypress-localstorage-commands";
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "S",
    phone: 1234,
    email: "s@gmail.com",
    category: "Covid helper fund",
    email: "s@gmail.com",
    type: "Donator",
  },
  {
    name: "S",
    phone: 1234,
    email: "s@gmail.com",
    category: "Covid helper fund",
    email: "s@gmail.com",
    type: "Volantier",
  },
  {
    name: "S",
    phone: 1234,
    email: "s@gmail.com",
    category: "Orphanage helper fund",
    email: "s@gmail.com",
    type: "Donator",
  },
  {
    name: "S",
    phone: 1234,
    email: "s@gmail.com",
    category: "Orphanage helper fund",
    email: "s@gmail.com",
    type: "Volantier",
  },
];
describe("Test", function () {
  let acc_score = 1;

  function FormSubmit(data, LSLen) {
    cy.get("#name").clear().type(data.name);
    cy.get("#phone").clear().type(data.phone);
    cy.get("#email").clear().type(data.email);
    cy.get("#category").select(data.category);
    cy.get("#type").select(data.type);
    cy.get("form")
      .submit()
      .should(() => {
        expect(JSON.parse(localStorage.getItem("Helpers")).length).to.equal(
          LSLen
        );
      });
  }

  function CheckTable(data, index) {
    cy.get("tbody tr").eq(index).contains("td", data.name);
    cy.get("tbody tr").eq(index).contains("td", data.category);
    cy.get("tbody tr").eq(index).contains("td", data.phone);
    cy.get("tbody tr").eq(index).contains("td", data.email);
  }

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      // modifyUrl(url);
      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("Form Submit Storing Data is LS", () => {
        cy.visit(url);
        FormSubmit(Data[0], 1);
        FormSubmit(Data[1], 2);
        FormSubmit(Data[2], 3);
        FormSubmit(Data[3], 4);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:- 1
      it("Visit the donators page and check the table", () => {
        cy.visit(url + "/donators.html");
        CheckTable(Data[0], 0);
        CheckTable(Data[2], 1);
        cy.then(() => {
          acc_score += 2;
        });
      }); // Score:- 2
      it("Check Filtering in donators Page", () => {
        cy.get("#filter").select("Covid helper fund");
        CheckTable(Data[0], 0);
        cy.get("#filter").select("Orphanage helper fund");
        CheckTable(Data[2], 0);
        cy.get("#filter").select("");
        CheckTable(Data[0], 0);
        CheckTable(Data[2], 1);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:-1
      it("Check the Deleting in donators page", () => {
        cy.visit(`${url}/donators.html`);
        cy.get("tbody tr").should("have.length", 2);
        cy.get("tbody tr").eq(0).contains("Delete").click();
        cy.get("tbody tr").should("have.length", 1);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:- 1

      it("Visit the volantiers page and check the table", () => {
        cy.visit(url + "/volantiers.html");
        CheckTable(Data[1], 0);
        CheckTable(Data[3], 1);
        cy.then(() => {
          acc_score += 2;
        });
      }); // Score:- 2
      it("Check Filtering in volantiers Page", () => {
        cy.get("#filter").select("Covid helper fund");
        CheckTable(Data[1], 0);
        cy.get("#filter").select("Orphanage helper fund");
        CheckTable(Data[3], 0);
        cy.get("#filter").select("");
        CheckTable(Data[0], 0);
        CheckTable(Data[2], 1);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:-1
      it("Check the Deleting in the volantiers Page", () => {
        cy.visit(`${url}/volantiers.html`);
        cy.get("tbody tr").should("have.length", 2);
        cy.get("tbody tr").eq(0).contains("Delete").click();
        cy.get("tbody tr").should("have.length", 1);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:- 1
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
