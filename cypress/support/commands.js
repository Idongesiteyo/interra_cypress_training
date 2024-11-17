// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitForElement', (selector, timeout = 10000) =>{
    cy.get(selector, {timeout}).should('be.visible')
})

Cypress.Commands.add('waitForXpathElement', (selector, timeout = 10000,) =>{
    cy.xpath(selector, {timeout}).should('be.visible')
})

Cypress.Commands.add('typeWithDelay',(selector, text, delay = 100)=>{
    cy.get(selector).type(text, {delay})
})

import 'cypress-file-upload';
import { text } from 'wd/lib/commands'
require('cypress-xpath');
import '@testing-library/cypress/add-commands';