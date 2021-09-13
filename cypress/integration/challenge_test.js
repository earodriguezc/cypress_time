/// <reference types="cypress" />


it('BTC test', function() {

    cy.visit('https://devmalta.bitso.com/login')
    cy.get('#client_id').type('testedgar078@gmail.com')
    cy.get('#password').type('Test2604?')
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get(':nth-child(2) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1 > :nth-child(1)').click()
    cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()
    cy.wait(10000)
    cy.get('.Typography__H3-qw5r90-2').should('have.text', 'Oops! Something went wrong')

})

it('ETH test', function() {

    cy.visit('https://devmalta.bitso.com/login')
    cy.get('#client_id').type('testedgar078@gmail.com')
    cy.get('#password').type('Test2604?')
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get(':nth-child(7) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1 > :nth-child(1)').click()
    cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()
    cy.wait(10000)
    cy.get('.Typography__H3-qw5r90-2').should('have.text', 'Oops! Something went wrong')

})

it('BCH test', function() {

    cy.visit('https://devmalta.bitso.com/login')
    cy.get('#client_id').type('testedgar078@gmail.com')
    cy.get('#password').type('Test2604?')
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get(':nth-child(4) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1 > :nth-child(1)').click()
    cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()
    cy.wait(10000)
    cy.get('.Typography__H3-qw5r90-2').should('have.text', 'Oops! Something went wrong')

})

it('DAI test', function() {

    cy.visit('https://devmalta.bitso.com/login')
    cy.get('#client_id').type('testedgar078@gmail.com')
    cy.get('#password').type('Test2604?')
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get(':nth-child(6) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1 > :nth-child(1)').click()
    cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()
    cy.wait(10000)
    cy.get('.Typography__H3-qw5r90-2').should('have.text', 'Oops! Something went wrong')

})

it('XRP test', function() {

    cy.visit('https://devmalta.bitso.com/login')
    cy.get('#client_id').type('testedgar078@gmail.com')
    cy.get('#password').type('Test2604?')
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get(':nth-child(12) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1 > :nth-child(1)').click()
    cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()
    cy.wait(10000)
    cy.get('.Typography__H3-qw5r90-2').should('have.text', 'Oops! Something went wrong')

})

it('MANA test', function() {

    cy.visit('https://devmalta.bitso.com/login')
    cy.get('#client_id').type('testedgar078@gmail.com')
    cy.get('#password').type('Test2604?')
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get(':nth-child(9) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1 > :nth-child(1)').click()
    cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()
    cy.wait(10000)
    cy.get('.Typography__H3-qw5r90-2').should('have.text', 'Oops! Something went wrong')

})