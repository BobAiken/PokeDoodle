describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })

  it('should render the correct elements', () => {
    cy.contains("PokeDoodle")
  })
})