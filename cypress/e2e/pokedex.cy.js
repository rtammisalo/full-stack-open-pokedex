describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000/')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be opened', function() {
    cy.contains('slowpoke').click()
    cy.get('.pokemon-info').contains('slowpoke')
    cy.get('.pokemon-info').contains('oblivious')
    cy.get('.pokemon-info').contains('regenerator')
  })
})
