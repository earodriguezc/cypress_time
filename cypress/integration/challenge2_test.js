/// <reference types="cypress" />


it('get PIN error test', function() {

    cy.visit('https://devmalta.bitso.com/login')
    cy.get('#client_id').type('testedgar078@gmail.com')
    cy.get('#password').type('Test2604?')
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get('.styles__HamburgerIcon-sc-45f87p-6').click()
    cy.get('.gPcPFP > :nth-child(4) > .Container__StyledContainer-sc-1nmtyg4-0').click()
    cy.get('.styles__Content-sc-1yqfi1l-2 > [href="/r/user/overview"]').click()
    cy.get(':nth-child(12) > .styles__StyledNavLink-del7u6-6').click()
    cy.get('.Container__StyledContainer-sc-1nmtyg4-0 > .styles__StyledButton-sc-1mfj3x4-0').click()
    cy.get('#first_name').type('Eduardo')
    cy.get('#last_name').type('Ramirez')
    cy.get('#second_last_name').type('Gonzalez')
    cy.get(':nth-child(1) > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5').type('3{enter}')
    cy.get(':nth-child(2) > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5').type('March{enter}')
    cy.get('.styles__Inner-sc-1d1h13w-2 > :nth-child(3) > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5').type('1998{enter}')
    cy.get('.gLhA-DK > .css-m0do4z > .css-16ljna5').click()
    cy.get('.css-a6evln').invoke('show').children().find('div.css-1am634n').click()
    cy.get('#percentage').type('40')
    cy.get('[data-testid=add-beneficiary-button]').click()
    cy.get('#pin').type('0404')
    cy.get('.Container__StyledContainer-sc-1nmtyg4-0 > .eUzSKh').click()
    cy.get('.styles__Message-vmzast-2').should('have.text', 'Incorrect PIN')
})