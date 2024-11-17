/// <reference types="cypress"/>

// beforeEach(()=>{
//     cy.visit('https://ecommerce-playground.lambdatest.io');
//     cy.xpath('//*[@id="widget-navbar-217834"]/ul[1]/li[6]/a[1]/div[1]/span[1]').trigger('mouseover');
// });

describe.skip('How to handle Asynchronous Behaviour in Cypress', ()=>{
    it('Handling Asynchronous Behaviour', ()=>{
        cy.contains('Register').should('be.visible').click();
        cy.get('#input-firstname').type('ID')
        cy.get('#input-lastname').type('EYO')
        cy.get('#input-email').type('test_id@test.com')
        cy.get('#input-telephone').type('08080000000')
        cy.get('#input-password').type('AB123c$')
        cy.get('#input-confirm').type('AB123c$')
        cy.xpath('//*[@id="content"]/form[1]/fieldset[3]/div[1]/div[1]/div[1]').should('not.be.checked')
        cy.get('.float-right > .custom-control').click()
        cy.xpath('//*[@id="content"]/form[1]/div[1]/div[1]/input[1]').should('be.visible').click()
    })
})

describe.skip('How to handle Asynchronous Behaviour in Cypress', ()=>{
    it('Assert  user details', ()=>{
        cy.contains('Login').should('be.visible').click();
        cy.typeWithDelay('#input-email','test_id@test.com')
        // cy.get('#input-email').type('test_id@test.com')
        cy.get('#input-password').type('AB123c$')
        cy.waitForXpathElement('//*[@id="content"]/div[1]/div[2]/div[1]/div[1]/form[1]/input[1]').click()
        // cy.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/div[1]/form[1]/input[1]').should('be.visible').click()
        cy.xpath('//*[@id="content"]/div[1]/div[1]/div[1]/div[1]/a[1]').should('be.visible').click()
        cy.waitForElement('#input-firstname').and('contain.value','ID')
        cy.get('#input-lastname').should('be.visible').and('contain.value','EYO')
        cy.get('#input-email').should('be.visible').and('contain.value','test_id@test.com')
        cy.get('#input-telephone').should('be.visible').and('contain.value','08080000000')
    })
})


describe.skip('How to handle Asynchronous Behaviour in Cypress', ()=>{
    it('Assert  user details', ()=>{
        cy.contains('Login').should('be.visible').click();
        cy.typeWithDelay('#input-email','test_id@test.com')
        // cy.get('#input-email').type('test_id@test.com')
        cy.get('#input-password').type('AB123c$')
        cy.waitForXpathElement('//*[@id="content"]/div[1]/div[2]/div[1]/div[1]/form[1]/input[1]').click()
        // cy.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/div[1]/form[1]/input[1]').should('be.visible').click()
        cy.xpath('//*[@id="content"]/div[1]/div[1]/div[1]/div[1]/a[1]').should('be.visible').click()
        cy.waitForElement('#input-firstname').and('contain.value','ID')
        cy.get('#input-lastname').should('be.visible').and('contain.value','EYO')
        cy.get('#input-email').should('be.visible').and('contain.value','test_id@test.com')
        cy.get('#input-telephone').should('be.visible').and('contain.value','08080000000')
    })
})

describe.skip('Responsive Design Tests', () => {
    const viewports = [[1920, 1080], [1366, 768], [375, 667]];
    
    viewports.forEach(([width, height]) => {
      it(`should display correctly at ${width}x${height}`, () => {
        cy.viewport(width, height);
        cy.visit('https://ecommerce-playground.lambdatest.io');
        
        if (width <= 375) {
            cy.xpath('//*[@id="widget-navbar-217834"]/ul[1]/li[6]/a[1]/div[1]/span[1]').trigger('mouseover').should('be.visible');
            cy.xpath('//*[@id="widget-navbar-217834"]/ul[1]/li[6]/a[1]/div[1]/span[1]').trigger('mouseover').should('not.be.visible');
        } else {
            cy.xpath('//*[@id="widget-navbar-217834"]/ul[1]/li[6]/a[1]/div[1]/span[1]').trigger('mouseover').should('be.visible');
            cy.xpath('//*[@id="widget-navbar-217834"]/ul[1]/li[6]/a[1]/div[1]/span[1]').trigger('mouseover').should('not.be.visible');
        }
      });
    });
  });