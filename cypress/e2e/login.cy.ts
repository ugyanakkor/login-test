describe("Register Page", () => {
  const user = {
    firstName: "Szem",
    lastName: "Ese",
    email: "szemese@gmail.com",
    password: "alma",
  };

  beforeEach(() => {
    window.localStorage.setItem("users", JSON.stringify([user]));
  });

  it("Check wrong credentials error message", () => {
    cy.visit("/login");
    cy.getByTestId("email").type("szemese@gmail.com");
    cy.getByTestId("password").type("korte");
    cy.getByTestId("login-btn").click();

    cy.contains("Invalid credentials.");
  });

  it("Login a user than logout", () => {
    cy.visit("/login");
    cy.getByTestId("email").type("szemese@gmail.com");
    cy.getByTestId("password").type("alma");
    cy.getByTestId("login-btn").click();

    cy.getByTestId("logout").click();

    cy.contains("Don't have an account?");
  });
});
