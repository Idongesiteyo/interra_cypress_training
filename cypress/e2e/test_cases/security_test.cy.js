/// <reference types = "cypress"/>

const  baseURL = 'https://www.saucedemo.com'

describe('Security Testing using Cypress', () =>{
 

    beforeEach(()=>{
        cy.visit(baseURL)
        cy.log('Login successful')
    });
    
    
    it('XSS Vulnerability Test on login fields', function() {
        cy.get('[data-test="username"]').type('<script>alert("XSS")</script>');
        cy.get('[data-test="password"]').type('<script>alert("XSS")</script>');
        cy.get('[data-test="login-button"]').click();
    
        // Assertion that the alert didn't appear
        cy.on('window:alert', (txt) => {
            // Fail the test if any alert is triggered
            expect(txt).to.not.contain('XSS');
        });
    
        cy.get('[data-test="username"]').should('not.have.html', '<script>alert("XSS")</script>');
    });

    const xssPayloads = [
        '<script>alert("XSS")</script>',               
        '<img src=x onerror=alert("XSS")>',           
        '" onmouseover="alert(\'XSS\')"',             
        '"><svg/onload=alert("XSS")>',                
        "<script>document.write('XSS')</script>",     
        "<iframe src='javascript:alert(\"XSS\")'></iframe>", 
        '<body onload=alert("XSS")>'                  
    ];

    xssPayloads.forEach(payload => {
        it(`should prevent XSS for payload: ${payload}`, () => {
            cy.get('[data-test="username"]').type(payload);
            cy.get('[data-test="password"]').type('dummyPassword');
            cy.get('[data-test="login-button"]').click();

            cy.on('window:alert', (alertText) => {
                expect(alertText).not.to.equal('XSS');
            });

            cy.get('[data-test="username"]').should('not.have.html', payload);
        });
    });
    
    it('SQL Injection Test on Login Fields', function() {
        const sqlPayloads = [
            "' OR 1=1 --",       
            "' OR 'a'='a",       
            "'; DROP TABLE users --",
            "' UNION SELECT null, username, password FROM users --"
        ];
    
        sqlPayloads.forEach((payload) => {
            cy.get('[data-test="username"]').type(payload);
            cy.get('[data-test="password"]').type(payload);
            cy.get('[data-test="login-button"]').click();
    
            cy.get('[data-test="error"]', {force: true}).should('be.visible')
              .and('contain', 'Epic sadface: Username and password do not match any user in this service');
        });
    });
    

})