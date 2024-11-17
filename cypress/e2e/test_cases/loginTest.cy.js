/// <reference types="cypress"/>

import LoginPage from '../../../Pages/pageClasses/LoginPage.js';

describe('Login Test Suite', () => {
  const loginPage = new LoginPage();

  const users = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'error_user', password: 'secret_sauce' },
    { username: 'visual_user', password: 'secret_sauce' }
  ];

  users.forEach((user) => {
    it(`should log in successfully as ${user.username}`, () => {
      loginPage.visit();
      loginPage.enterUsername(user.username);
      loginPage.enterPassword(user.password);
      loginPage.clickLogin();

      cy.url().should('contain', '/inventory.html');
    });
  });
});
