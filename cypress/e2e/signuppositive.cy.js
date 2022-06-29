describe('empty spec', () => {
  beforeEach('first', () => {
    cy.visit('http://localhost:3004/')
  })


  it('passes', () => {
    cy.get("#signup").click()
    cy.get("#email").type("divyasai@gmail.com")
    cy.get("#password").type("divyasai")
    cy.get("#signin").click()
    cy.get("dashboard").contains("logout")
  })
})