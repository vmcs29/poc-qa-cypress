/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
  
    cy.visit('http://www.bairesdev.com/')
  })

  it('verify Top 5 Most Read', () => {
   
    cy.get("//*[@id='menu-1-60126afe']/li[5]/a[contains(text(),'Blog')]").click()
    cy.get("most-read-this-week").should('be.visible')
    
  })

})
