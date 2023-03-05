describe('singlePokemon', ()=>{

  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })

  it('should display an error component on bad url path and allow you to go home',()=>{
    cy.visit('http://localhost:3000/ducks')
    .contains('Something has gone wrong...')
    .get('button').click()
    .url().should('eql','http://localhost:3000/')
  })

})