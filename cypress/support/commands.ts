// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * @description Select an element by the data-testid
 */

Cypress.Commands.add("getByTestId", (locator, options) =>
  cy.get(`[data-testid="${locator}"]`, options),
);
