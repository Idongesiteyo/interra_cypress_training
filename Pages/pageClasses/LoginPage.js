class LoginPage {
    constructor() {
      this.usernameField = () => cy.findByPlaceholderText('Username');
      this.passwordField = () => cy.findByPlaceholderText('Password');
      // this.loginButton = () => cy.findByRole('button', { name: /login/i });
      this.loginButton = '[data-test="login-button"]';
    }
  
    visit() {
      cy.visit('https://www.saucedemo.com');
    }
  
    enterUsername(username) {
      this.usernameField()
      .type(username);
    }
  
    enterPassword(password) {
      this.passwordField()
      .type(password);
    }
  
    // clickLogin() {
    //   this.loginButton()
    //   .should('be.visible')
    //   .should('have.class','btn_action').click();
    // }

    clickLogin() {
      cy.get(this.loginButton)
      .should('be.visible').should('have.class','btn_action')
      .click();
    }
  }
  
  export default LoginPage;
  