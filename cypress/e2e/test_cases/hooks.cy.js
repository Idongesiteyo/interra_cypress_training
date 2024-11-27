/// <reference types = "cypress"/>

let userData;
let userData2;
const  baseURL = 'https://www.saucedemo.com'
describe('Test suite with hooks', () =>{
 
    afterEach(()=>{
        cy.wait(4000)
        cy.log('Clearing up test data after each test')
    });


    after(()=>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.log('Clearing test data')
    });
    
    before(()=>{
        cy.log('Load a fixture')

        cy.fixture('test_data.json').then( data =>{
            userData = data;
        })

        cy.fixture('user.json').then( data =>{
            userData2 = data;
        })
    });


    beforeEach(()=>{
        cy.visit(baseURL)
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     return false
        // })
        // cy.visit('https://nigsims.ng/')
        // cy.contains('Login').click()
        // cy.get(':nth-child(1) > .form-control').click()
        // cy.get(':nth-child(2) > .form-control').click()
        cy.log('Login successful')
        console.log('Current grep pattern:', Cypress.env('grep'))

        // cy.wait(10000)
    });
    
    


    it('Standard user @smoke', function(){

        cy.get('[data-test="username"]').type(userData.test_username)
        cy.get('[data-test="password"]').type(userData.test_password)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.waitForElement('[data-test="shopping-cart-link"]').click()
        // cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('Sauce Labs Backpack').should('contain', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Onesie').should('contain', 'Sauce Labs Onesie')
    })

    it('Error user login', function(){
        cy.get('[data-test="username"]').type(userData.errorUser)
        cy.get('[data-test="password"]').type(userData.test_password)
        cy.get('[data-test="login-button"]').click()

       
    })

    it('Problem user login @smoke', function(){
        cy.get('[data-test="username"]').type(userData.problemUser)
        cy.get('[data-test="password"]').type(userData.test_password)
        cy.get('[data-test="login-button"]').click()

    })


})

// describe('Demo test', ()=>{
//     it('test 1', function(){
//         cy.log('Printing to the console')
//     })
// })