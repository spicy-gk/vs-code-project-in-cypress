///<reference types="cypress"/>

import { TodoPage } from "../../page-object/ToDopage"

describe('To do actions', ()=>{
    const todop =new TodoPage()
beforeEach( ()=>{
    todop.navigate()
   // cy.visit('https://todomvc-app-for-testing.surge.sh/') -- above line and this line is same but we used page object modelin above line

    todop.addTodo('Javascript')
   // cy.get('.new-todo',{timeout:6000}).type('clean Room {enter}') 

})
it('should add new todo', ()=>{

    cy.get('label').should('have.text', 'clean Room')
    cy.get('.toggle').should('not.be.checked')

})
it.only('should completed new todo', ()=>{

    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line', 'line-through')

})
it('should clear new todo', ()=>{

    cy.get('.toggle').click()
    cy.contains('Clear').click()
    
})
})