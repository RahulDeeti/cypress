/// <reference types="cypress"/>
describe("cypress core concepts", () => {
  it("visit google.com", () => {
    cy.visit("https://www.google.com");
    cy.get(".SDkEP").type("geeks for geeks{enter}");
  });
  it("should click on login to register", () => {
    cy.get(".CCgQ5 > span").click();
    cy.get(".my-auto > .btn").click();
    cy.get(".social-signin-div-grid").contains("Google").click();
  });
});

describe("Testing login with Cypress", () => {
  it("should be able to login", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    expect(username, "username was set").to.be.a("string").and.not.be.empty;
    expect(password, "password was set").to.be.a("string").and.not.be.empty;
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("#txtUsername").type(username);
    cy.get("#txtPassword").type(password, { log: false });
    cy.get("#btnLogin").click();
  });
});
