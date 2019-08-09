/// <reference types="Cypress" />

context('Pieces jointes deposees', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=appbar-connexion-btn]').should('be.visible').click()
    if (cy.isApiMock()) {
      cy.get('[data-cy=appbar-menuitem-connexion-depositaire]').should('be.visible').click()
    } else {
      cy.get('#kc-login').should('be.visible')
      cy.get('#username').type('jean.martin')
      cy.get('#password').type('jean.martin')
      cy.get('#kc-login').click()
    }
  })

  it('cy.click() - go to depots pieces jointes DP page', () => {
    cy.contains("Mes dépôts").should('be.visible')
    cy.get('[title="Voir le dépôt"]').should('be.visible').first().click()
    cy.contains("Dépôt n°0").should('be.visible')
    cy.get("[data-cy=piecesjointes-btn]").should('be.visible').click()
    cy.contains('CERFA 13703-06').should('be.visible')
  })

  it('cy.click() - go to depots pieces jointes PCMI page', () => {
    cy.contains("Mes dépôts").should('be.visible')
    cy.get('[title="Voir le dépôt"]').should('be.visible').last().click()
    cy.contains("Dépôt n°1").should('be.visible')
    cy.get("[data-cy=piecesjointes-btn]").should('be.visible').click()
    cy.contains('CERFA 13406-06').should('be.visible')
  })
})