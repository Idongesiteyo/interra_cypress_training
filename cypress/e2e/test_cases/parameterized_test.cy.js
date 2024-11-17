

const users = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'error_user', password: 'secret_sauce' },
    { username: 'visual_user', password: 'secret_sauce' }
  ];
  
  users.forEach((user) => {
    describe(`Login Test for ${user.username}`, () => {
      it(`should log in successfully as ${user.username}`, () => {
        cy.visit('https://www.saucedemo.com');
        cy.findByPlaceholderText('Username').type(user.username);
        cy.findByPlaceholderText('Password').type(user.password);
        cy.findByRole('button', { name: /login/i }).click()
      
        cy.url().should('contain','/inventory.html'); 
      });
    });
  });