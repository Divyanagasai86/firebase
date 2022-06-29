import { getDefaultNormalizer } from "@testing-library/react"

describe('empty spec', () => {
  beforeEach('first', () => {
    cy.visit('http://localhost:3004/')
  })
  it('passes', () => {
   cy.get("#email").type("divya123@gmail.com")
   cy.get("#password").type("divyasai")
   cy.get("#signin").click()
   cy.get("#dashboard").contains("Hello User")
   cy.get("#logout").click()
  })
})