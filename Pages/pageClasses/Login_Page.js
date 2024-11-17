class LoginPage {

    constructor() {
      this.usernameInput = '#user-name';
      this.passwordInput = '[data-test="password"]';
      this.loginButton = '[data-test="login-button"]';
      this.menuButton = '#react-burger-menu-btn';
      this.logoutButton = '[data-test="logout-sidebar-link"]';
      this.errorMessageElement = '[data-test="error"]'
    }
  
    visit() {
      cy.visit('https://www.saucedemo.com');
    }
  
    fillUsername(username) {
      cy.get(this.usernameInput)
      .should('have.attr','placeholder', 'Username')
      .type(username);
      
    }
  
    fillPassword(password) {
      cy.get(this.passwordInput)
      .should('have.attr','placeholder', 'Password')
      .type(password);
    }
  
    submit() {
      cy.get(this.loginButton)
      .should('be.visible').should('have.class','btn_action')
      .click();
    }

    logout(){
      cy.get(this.menuButton).click();
      cy.get(this.logoutButton).click();
    }

    errorMessageValidation(){
      cy.get(this.errorMessageElement).should('be.visible')
      .should('contain', 'Epic sadface: Username and password do not match any user in this service')
    }
  }
  
  export default new LoginPage();