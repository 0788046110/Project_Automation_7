/// <reference types= "cypress" />

const expectedCurrency="SAR"
const expectedAttr="lang"
const expectedLanguage="en"
describe('Aspire Test cases', () => {
  it('check The currency is SAR', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedCurrency)
    
  })
  it('check the language of the web site', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi').click()
    cy.get('html').should('have.attr',expectedAttr,expectedLanguage)
  });
})