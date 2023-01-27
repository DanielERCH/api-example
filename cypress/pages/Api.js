const constants = require("../fixtures/constants.json");
const { PATH_RESPONSE } = constants;

class Api {
  constructor() {
    this.verb = "";
    this.routeId = "/v2/pet/id";
    this.empty = {};
  }

  requestPath(verb, route) {
    cy.fixture("_reqBody").then((fixtures) => {
      if (route === this.routeId) {
        route = this.routeId = route.replace("id", fixtures.id);
        fixtures = this.empty;
      }
      cy.log('fixtures', fixtures)
      cy.log('route', this.routeId)
      cy.request(verb, route, fixtures).then((response) => {
        cy.writeFile(PATH_RESPONSE, response, "utf-8", { log: false });
      });
    });
  }
}

module.exports = new Api();
