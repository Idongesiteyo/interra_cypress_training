/// <reference types="cypress"/>

import LoginPage from '../../../Pages/pageClasses/Login_Page.js';

describe('Login functionality', () => {
let userData
beforeEach(() => {
    cy.fixture('user.json').then( data => {
      userData = data;
    })
  });

  it('should log in successfully with valid credentials', () => {
    LoginPage.visit();
    LoginPage.fillUsername(userData.username);
    LoginPage.fillPassword(userData.password);
    LoginPage.submit();
    cy.url().should('include', '/inventory.html');
    LoginPage.logout()
  });

});