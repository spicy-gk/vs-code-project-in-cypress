///<reference types ='cypress'/>
describe('filter' ,()=>{

    beforeEach(()=>{
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('clean Room {enter}')
        cy.get('.new-todo').type('Javascript {enter}')
        cy.get('.new-todo').type('Java {enter}') 
       
        cy.get(':nth-child(2) > .view > .toggle').click()
    })

    it('Should filter "Active" todos',()=>{
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length',2)

    })
    it('Should filter "completed" todos',()=>{
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length',1)
    })
    it('Should filter "clear" todos',()=>{
        cy.contains('Clear completed').click()

    })

})