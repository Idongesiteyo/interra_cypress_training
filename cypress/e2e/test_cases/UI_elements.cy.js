/// <reference types="cypress"/>

const { alertText } = require("wd/lib/commands")

// beforeEach(()=>{
//     cy.visit('https://selectorshub.com/xpath-practice-page/')
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         return false
//         })
//     cy.wait(300)
// });

// describe('Interaction with a Standard button', () =>{
//     it('click a button', ()=>{
//         cy.visit('https://demoqa.com/')
//         cy.wait(1000)
//         cy.get('header > a > img').click()
//     })
// })

// describe('Interaction with a Radio button', () =>{
//     it('click a radio button', ()=>{
//         cy.visit('https://demoqa.com/radio-button')
//         Cypress.on('uncaught:exception', (err, runnable) => {
//         return false
//         })
//         cy.get(':nth-child(3) > .custom-control-label').click()
//         cy.get('.text-success').should('contain.text','Impressive')
//         cy.get(':nth-child(2) > .custom-control-label').click()
//         cy.get('.text-success').should('contain.text','Yes')
        
//     })
// })

describe('Interaction with a Checkbox', () =>{
    it('click a button', ()=>{
        cy.visit('https://way2automation.com/way2auto_jquery/registration.php#load_box')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
            // cy.get('[data-cy="myCheckboxIcon"]').click()
            cy.get('.relative > input')
            .should('not.be.checked')
            .check()
            .should('be.checked')

    })
})

describe('Interaction with a modal', () =>{
    it('click a button', ()=>{
        cy.get('#myBtn').click()
        cy.get('.modal-header > h2 > a')
        .should('contain.text','Testing Daily - Free App to get the latest testing feed.')
        cy.get('.close').click()
        cy.get('[onclick="windowAlertFunction()"]').click()

    })
    
})

describe('Interaction with a window alert', () =>{
    it('click an click', ()=>{
        cy.get('[onclick="windowAlertFunction()"]').click()
        cy.on('window:alert', (alertText) =>{
            expect(alertText).to.equal('Press a button!')
        });
    })

})

describe('Interaction with a alert prompt', () =>{
    it('alert prompt interaction', function() {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Yes!');
            cy.get('[onclick="promptAlertFunction()"]').click()
              });
        });
       
    });

    describe('Interaction with a Droddown List', () =>{
        it('click a button', ()=>{
            cy.get('#cars').select('Opel').should('contain.text','Opel')
        })
        
    });

    describe('Interaction with a Date Picker', () =>{
        it('click a button', ()=>{
            cy.viewport(1920, 957)
            cy.get('[type="date"]', {force: true}).type('2024-08-17',);
               
        })
        
    });

    describe('Interaction with  User table', ()=>{
        it('click a button',()=>{
            cy.get('.userform > h3').should('contain.text', 'Users Table')
            cy.get(':nth-child(2) > .null').should('contain.text','Username')
            cy.get('[style="width: 20%;"] > .null').should('contain.text','User Role')
            cy.get(':nth-child(4) > .null').should('contain.text','Employee Name')
            cy.get('[style="width: 14%;"] > .null').should('contain.text','Status')

        })
    })

    describe('Interaction with pagination', ()=>{
        it('click a button',()=>{
            cy.get('#tablepress-1_info')
            .should('contain.text','Showing 1 to 10 of 99 entries')
            cy.get('label > select').select('25');
            cy.get('#tablepress-1_info')
            .should('contain.text','Showing 1 to 25 of 99 entries')
            cy.get('#tablepress-1_previous')
            .should('contain.text','Previous')
            .and('be.visible');
            cy.get('#tablepress-1_next')
            .should('contain.text','Next')
            .and('be.visible')
            .click()
            cy.get('#tablepress-1_info')
            .should('contain.text','Showing 26 to 50 of 99 entries')

        })
    })

    describe('Interacting with Hoverable Buttons', () => {
        it('Reveals a list on hover', () => {
        cy.get('.dropbtn').trigger('mouseover')
        cy.contains('Try TestCase Studio').should('contain.text','Try TestCase Studio')
        cy.contains('SHub Youtube Channel').should('contain.text','SHub Youtube Channel').click({force: true})
        // cy.contains('Join Training').click({force: true})
        });
      });

    //   describe.only('Interactiong with a Disabled Text field',()=>{
    //     it('Filling a disabed text field',()=>{
    //         cy.get('[placeholder="Enter Last name"]')
    //         .invoke('removeAttr','placeholder')
    //         .type('Test',{force: true})
    //     })
    //   })

    describe('Interacting File upload Button', () => {
        it('upload a file', () => {
            // cy.get('#myFile').attachFile('hahaaha.jpg');
            cy.get('#myFile').attachFile('hahaaha.jpg');
      });
    })

  describe('Interacting with Auto Complete', () => {
        it('Select an option from auto complete', () => {
            cy.visit('https://demoqa.com/auto-complete', {timeout: 12000})
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
                })
        // cy.get('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').type('Yel')
        // cy.get('#react-select-3-option-0').should('contain.text','Yellow').click()
        cy.get('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').type('W')
        cy.get('#react-select-3-option-1').should('contain.text','White')
        
      });
    })

    describe('Interacting with page tabs', () => {
        it('Clicking on a page tab', () => {
            cy.visit('https://demoqa.com/tabs', {timeout: 12000})
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
                })
        cy.get('#demo-tab-origin').contains('Origin').click()
        cy.focused().should('have.attr','id', 'demo-tab-origin');
        // cy.get('#demo-tab-use').contains('Use').click()
      });
    })

    describe('Interacting with Tool Tips', () => {
        it('Displays a tooltip on hover', () => {
          cy.visit('https://demoqa.com/tool-tips');
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
            cy.get('#toolTipButton')
            .trigger('mouseover')
            .should('be.visible')
            cy.get('.tooltip-inner')
            .should('contain.text','You hovered over the Button');
        });
      });

      describe('Interacting with Sliders', () => {
        it('Moves a slider', () => {
          cy.visit('https://demoqa.com/slider');
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })

            cy.get('.range-slider')
            .invoke('val',100)
            .trigger('input')
            .trigger('change');
            // cy.get('.range-slider').invoke('val',100).should('have.value',100);
            cy.get('.range-slider__tooltip__label').should('contain', '100');
            cy.get('#sliderValue').should('have.value', '100')
        });
      });
    //   describe.only('Interacting with Sliders', () => {
    //     it('Moves a slider', () => {
    //       cy.visit('https://demoqa.com/slider');
          
    //       // Handle any uncaught exceptions
    //       Cypress.on('uncaught:exception', (err, runnable) => {
    //         return false;
    //       });
      
    //       // Get the slider element
    //       cy.get('.range-slider').then(($slider) => {
    //         // Calculate the target value
    //         const targetValue = 50;
    //         const currentValue = 25;
    //         const sliderWidth = $slider[0].getBoundingClientRect().width;
      
    //         // Calculate the pixels needed to move the slider
    //         const min = $slider.attr('min') || 0;
    //         const max = $slider.attr('max') || 100;
    //         const step = $slider.attr('step') || 1;
      
    //         const percentage = (targetValue - currentValue) / (max - min);
    //         const moveBy = sliderWidth * percentage;
      
    //         // Simulate the drag action
    //         cy.wrap($slider)
    //           .trigger('mousedown', { which: 1, pageX: 0 })
    //           .trigger('mousemove', { which: 1, pageX: moveBy })
    //           .trigger('mouseup', { force: true });
      
    //         // Assert that the slider value is updated to 50
    //         cy.get('.range-slider').should('have.value', targetValue.toString());
    //         cy.get('#sliderValue').should('have.value', targetValue.toString());
    //       });
    //     });
    //   });
    describe('Interacting with Sliders', () => {
        it('Moves the slider to the right to reach the value 50 and updates the tooltip', () => {
          cy.visit('https://demoqa.com/slider');
      
          // Handle any uncaught exceptions
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
      
          // Function to simulate dragging the slider
          const dragSliderToValue = (slider, targetValue) => {
            const sliderRect = slider.getBoundingClientRect();
            const sliderWidth = sliderRect.width;
            const minValue = parseFloat(slider.getAttribute('min')) || 0;
            const maxValue = parseFloat(slider.getAttribute('max')) || 100;
      
            // Calculate the pixel position to move the slider handle
            const percentage = (targetValue - minValue) / (maxValue - minValue);
            const moveBy = sliderWidth * percentage;
      
            // Simulate the drag action
            cy.wrap(slider)
              .trigger('mousedown', { which: 1, pageX: sliderRect.left + (sliderWidth / 2) })
              .trigger('mousemove', { which: 1, pageX: sliderRect.left + (sliderWidth / 2) + moveBy })
              .trigger('mouseup', { force: true });
          };
      
          // Get the slider and simulate dragging
          cy.get('.range-slider').then(($slider) => {
            const slider = $slider[0];
            const targetValue = 50;
      
            // Drag the slider to the target value
            dragSliderToValue(slider, targetValue);
      
            // Assert that the slider value and tooltip within the slider are updated correctly
            cy.assertSliderValue('.range-slider', targetValue.toString());
            
            // Verify the tooltip value within the slider
            cy.get('.range-slider').find('.tooltip-selector') // Replace '.tooltip-selector' with the actual selector for the tooltip
              .should('have.text', targetValue.toString());
          });
        });
      });
      

      describe.only('Interacting with Accordian', () => {
        it('Click on Accordians', () => {
          cy.visit('https://demoqa.com/accordian');
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })

            let saveText;
            let accordianText1;
            cy.get('#section1Heading').click()
            cy.get('#section1Content > p').invoke('text').then((text) =>{
                accordianText1 = text.trim();
                cy.log('Accordian saved text:' + accordianText1);
            });
            cy.get('#section1Content > p').should(($p) =>{
                expect($p.text().trim()).to.equal(accordianText1);
            })
            cy.get('#section2Heading').click()
            cy.get('#section3Heading').click()
            cy.get('#section3Content > p').invoke('text').then((text) =>{
                saveText = text.trim();
                cy.log('Save text:' + saveText);
            });
            cy.get('#section3Content > p').should(($p) =>{
                expect($p.text().trim()).to.equal(saveText);
            })
        });

      });
      

      
       
