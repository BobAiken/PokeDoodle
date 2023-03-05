describe('homepage', () => {

  beforeEach(()=>{
    cy.intercept('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0', {
      results: [{
        name:"bulbasaur",
        url:"https://pokeapi.co/api/v2/pokemon/1/"},
        {
          name:"ivysaur",
          url:"https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
          name:"venusaur",
          url:"https://pokeapi.co/api/v2/pokemon/3/"
        }]
    })
    cy.visit('http://localhost:3000/')
  })

  it('should render the correct elements', () => {
    cy.contains("PokeDoodle")
    .get('div[class="search-bar-container"]')
    .get('div[class="pokemon-container"]').children()
    .should('have.length',3)
  })

  it('should be able to search through pokemon', ()=>{
    cy.get('input[type="text"]')
    .type('ivy')
    .get('div[class="pokemon-container"]').children()
    .should('have.length',1)
    .get('div[class="card-header"]')
    .contains('ivysaur')
  })

  it('should be able to click on a pokemon to go to its information', ()=>{
    cy.get('div[class="card-header"]').contains('ivysaur').click()
    .url().should('eql','http://localhost:3000/ivysaur')
  })
})