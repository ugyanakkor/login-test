import { UserPageComponent } from "./user-page.component";

describe("UserPageComponent", () => {
  it("should mount", () => {
    cy.mount(UserPageComponent);
  });
});
