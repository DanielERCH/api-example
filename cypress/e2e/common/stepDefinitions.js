import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import api from "../../pages/Api";

Given("Realizar un {string} a la ruta {string}", (verb, route) => {
  api.requestPath(verb, route)
});

When("Validar status code {string}", (code) => {
  cy._statuscode(code);
})

When('Validar Schema del response', () => {
  cy._schemaResponse()
})