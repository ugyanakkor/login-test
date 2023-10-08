describe("Register Page", () => {
  it("Trigger validators on the register page", () => {
    cy.visit("/register");
    cy.getByTestId("firstName").click();
    cy.getByTestId("lastName").click();
    cy.getByTestId("email").type("szemese@");
    cy.getByTestId("password").click();
    cy.getByTestId("firstName").click();

    cy.contains("Enter your first name.");
    cy.contains("Enter your last name.");
    cy.contains("Enter a valid email address.");
    cy.contains("Enter a password.");

    cy.getByTestId("register-btn").should("not.enabled");
  });

  it("Register a user", () => {
    cy.visit("/register");
    cy.contains("Register");

    cy.getByTestId("firstName").type("Szem");
    cy.getByTestId("lastName").type("Ese");
    cy.getByTestId("email").type("szemese@gmail.com");
    cy.getByTestId("password").type("alma");
    cy.getByTestId("register-btn").click();

    cy.getByTestId("redirect-to-login").click();
  });
});
