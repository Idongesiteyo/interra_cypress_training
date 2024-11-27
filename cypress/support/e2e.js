// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
// import '@shelex/cypress-allure-plugin';

// Add these lines for cypress-grep

import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

// Alternative method using import (use either this OR the require method above, not both)
// import '@cypress/grep'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Optional: Add grep debugging
// Cypress.on('test:before:run', (test) => {
//     console.log('Current grep pattern:', Cypress.env('grep'))
//     console.log('Running test:', test.title)
// })