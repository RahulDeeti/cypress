/// <reference types="cypress"/>

it("google test", () => {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Geeks for Geeks{enter}");
  //   cy.get(".dmenKe > :nth-child(1) > .usJj9c > h3 > .l", {
  //     timeout: 6000,
  //   }).click();
  cy.wait(4000);
  cy.contains("Images").click();
});
