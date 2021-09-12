describe('counter app', () => {
    beforeEach('checking the initial state', () => {
        cy.visit('/')
        cy.initialCheck()
    })

    it('can add and delete items from one category', () => {
        cy.get('[data-cy=add-item]').first().click()
        cy.get('[data-cy=add-item]').first().click()

        cy.get('[data-cy=item-counter]').should('contain', 2)
        cy.get('[data-cy=category-counter]').should('contain', 1)

        cy.get('[data-cy=delete-item]').first().click()
        cy.get('[data-cy=delete-item]').first().click()

        cy.initialCheck()
    })

    it('can add and delete items from all categories', () => {
        cy.get('[data-cy=add-item]').click({ multiple: true })

        cy.get('[data-cy=item-counter]').should('contain', 1)
        cy.get('[data-cy=category-counter]').should('contain', 4)

        cy.get('[data-cy=delete-item]').click({ multiple: true })

        cy.initialCheck()
    })


    it('can add and delete items with refresh button', () => {
        cy.get('[data-cy=add-item]').click({ multiple: true })

        cy.get('[data-cy=item-counter]').should('contain', 1)
        cy.get('[data-cy=category-counter]').should('contain', 4)

        cy.get('[data-cy=refresh]').click()

        cy.initialCheck()
    })


    it('can add an item and delete it with its category', () => {
        cy.get('[data-cy=add-item]').first().click()

        cy.get('[data-cy=item-counter]').should('contain', 1)
        cy.get('[data-cy=category-counter]').should('contain', 1)

        cy.get('[data-cy=delete-category]').first().click()

        cy.get('[data-cy=category]').should('has.length', 3)
        cy.get('[data-cy=category-counter]').should('contain', 0)
        cy.get('[data-cy=item-counter]').should('contain', 'Zero')
        cy.get('[data-cy=delete-item]').should('be.disabled')
    })

    it('can delete all categories and recycle', () => {
        cy.get('[data-cy=delete-category]').click({ multiple: true })

        cy.get('[data-cy=category]').should('has.length', 0)
        cy.get('[data-cy=refresh]').should('be.disabled')
        cy.get('[data-cy=recycle]').should('be.enabled')

        cy.get('[data-cy=recycle]').click()

        cy.initialCheck()
    })
})
