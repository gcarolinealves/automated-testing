/// <reference types="cypress"/>

describe("Login", () => {
    beforeEach(() => {
        cy.viewport("iphone-xr")
        cy.visit("https://automationpratice.com.br/login")
    })

    it("Successful login", () => {
        cy.get("#user").type("testing@testing.com")
        cy.get("#password").type("123456")
        cy.get("#btnLogin").click()
        cy.get(".swal2-title").should("be.visible")
        cy.get(".swal2-title").should("have.text", "Login realizado")
    });

    it("Invalid email", () => {
        cy.get("#user").type("testing.com")
        cy.get("#password").type("123456")
        cy.get("#btnLogin").click()
        cy.get(".invalid_input").should("be.visible")
        cy.get(".invalid_input").should("have.text", "Invalid email\")
    });

    it("Invalid password", () => {
        cy.get("#user").type("testing@testing.com")
        cy.get("#password").type("1")
        cy.get("#btnLogin").click()
        cy.get(".invalid_input").should("be.visible")
        cy.get(".invalid_input").should("have.text", "Invalid Password")
    });
});