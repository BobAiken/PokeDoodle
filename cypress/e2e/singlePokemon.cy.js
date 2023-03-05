describe('singlePokemon', ()=>{

  beforeEach(()=>{
    cy.visit('http://localhost:3000/ivysaur')
  })

  it('should be able to go home', ()=>{
    cy.get('button[class="single-pokemon-go-home-button"]').click()
    .url().should('eql','http://localhost:3000/')
  })

  it('should have an image', ()=>{
    cy.get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"]')
  })

  it('should have information',()=>{
    cy.get('div[class="pokedex-data"]')
    .contains('Name: ivysaur')
    .get('div[class="pokedex-data"]')
    .contains('NationalNo: 2')
    .get('div[class="pokedex-data"]')
    .contains('Type: grass poison')
    .get('div[class="pokedex-data"]')
    .contains('Height: 10 m')
    .get('div[class="pokedex-data"]')
    .contains('Weight: 130 kg')
    .get('div[class="pokedex-data"]')
    .contains('Abilities: overgrow, chlorophyll')
  })

  it('should be able to draw an image',()=>{
    cy.get('button[class="display-button"]').click()
    .get('button[class="single-pokemon-go-home-button"]').click()
    .get('div[style="display: block; background: rgb(255, 255, 255); touch-action: none; width: 320px; height: 320px;"]')
  })

})