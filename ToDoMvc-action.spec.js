///<reference types="cypress"/>
it('Add new todo',() => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo',{timeout:6000}).type('clean Room {enter}') 

    cy.get('label').should('have.text', 'clean Room')
    
    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()

    cy.get('.toggle').should('be.checked')
    cy.get('label').should('have.css','text-decoration-line', 'line-through')

    cy.contains('Clear').click()
    cy.get('.todo-list')
})