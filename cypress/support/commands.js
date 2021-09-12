// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('initialCheck', () => {
    cy.get('[data-cy=category-counter]').should('contain', 0)
    cy.get('[data-cy=refresh]').should('be.enabled')
    cy.get('[data-cy=recycle]').should('be.disabled')
    cy.get('[data-cy=category]').should('has.length', 4)
    cy.get('[data-cy=item-counter]').should('contain', 'Zero')
    cy.get('[data-cy=delete-item]').should('be.disabled')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
