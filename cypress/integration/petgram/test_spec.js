describe('Petgram', () => {
    it('app works', () => {
        cy.visit('/')
    })

    it('navegamos a una categoria y vemos fotos', () => {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('navegamos con la navbar a la home', () => {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })

    it('Lo usuarios no registrados ven el formulario de registro o inicio de sesion al ir a favs', () => {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})