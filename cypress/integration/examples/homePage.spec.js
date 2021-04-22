/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/card/1')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Check the Card page', () => {

    cy.get('[data-cy=card-name]').should('contain', 'Luke Skywalker')
    cy.wait(2000)
    cy.get('[data-cy=link-back-home]').click()
    // cy.get(".card")
  })

})
