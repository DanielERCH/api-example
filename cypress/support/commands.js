const constants = require("../fixtures/constants.json");
const { PATH_RESPONSE } = constants;

Cypress.Commands.add("_statuscode", (code) => {
  cy.readFile(PATH_RESPONSE).then((response) => {
    expect(response.status).to.equal(Number(code));
  });
});

Cypress.Commands.add("_schemaResponse", () => {
  cy.fixture("_response").then((fixturesCreate) => {
    expect(fixturesCreate.body).to.have.property("id").that.is.a("number");
    expect(fixturesCreate.body).to.have.property("category").that.is.a("object");
    expect(fixturesCreate.body).to.have.property("name").that.is.a("string");
    expect(fixturesCreate.body).to.have.property("photoUrls").that.is.a("array");
    expect(fixturesCreate.body).to.have.property("tags").that.is.a("array");
    expect(fixturesCreate.body).to.have.property("status").that.is.a("string");
  });
});
