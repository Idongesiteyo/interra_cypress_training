/// <reference types="cypress"/>
const baseUrl = Cypress.config('baseUrl')

let userData
beforeEach(() => {
    cy.visit(baseUrl)
    cy.fixture('user.json').then( data => {
      userData = data;
    })

  });

  after(()=>{
    // cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.log('Clearing test data')
  })

describe('Login test', ()=>{
    it('Open web site and assert', ()=>{

        cy.get('[data-test="username"]').should('have.attr','placeholder', 'Username')
        .type('standard_user')
        cy.get('[data-test="password"]').should('have.attr','placeholder', 'Password')
        .type('secret_sauce')
        cy.contains('LOGIN')
        .should('be.visible').should('have.class','btn_action')
        .click()
        cy.url().should('contain','https://www.saucedemocom/v1/inventory.html')
        cy.wait(2000)
    

    })

})

// describe.skip('My first test2', ()=>{
//         it('Login to website', ()=>{
//             cy.visit(baseUrl)
//             cy.viewport('samsung-note9')
//             cy.get('[data-test="username"]').type(userData.username)
//             cy.get('[data-test="password"]').type(userData.password)
//             cy.contains('LOGIN').click()
//             cy.wait(2000)
//             cy.get('.bm-burger-button > button').click()
//             console.log("test complete")
    
//         })


// })

// // describe('My second test', () =>{
// //         it('Visit demoQA', ()=>{
// //         cy.visit('https://demo.nopcommerce.com/register');
// //         cy.get('#gender-male').should('not.be.checked')
// //         cy.get('#gender-female').should('not.be.checked')
// //         cy.get('#Newsletter').should('be.checked')

// //     })


    
        
// //   })


