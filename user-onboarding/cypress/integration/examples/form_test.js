
//name input and assertion

//arrange
describe('Name', function () {
    //act
    it('will Use an assertion to check if the text inputted contains the name you provided', function () {
        //assert
        cy.visit('http://localhost:3000/')
        cy.get("input[name=q]").type('abc123{enter}')
        cy.get("input[name=q]").should('have.value', 'abc123')
        
    })
})

//email
//arramge 
describe('Email', function (){
    //act
    it('will check email input', function (){
        cy.get('input[email=q]').should('have.value', 'abc@abc.com')
    })
})

//password

//arramge 
describe('Password', function () {
    //act
    it('will check password input', function () {
        cy.get('input[passwordl=q]').should('have.value', '123abc')
    })
})


//terms of service

//arramge 
describe('terms of service', function () {
    //act
    it('will check and see if terms of service is checked', function () {
        cy.get('[type="checkbox"]').check() 
    })
})

//submit

//arramge 
describe('submit', function () {
    //act
    it('will check and see if form has been submitted', function () {
        cy.get('form').submit() 
    })
})

//empty fields 

//arramge 
describe('empty', function () {
    //act
    it('will check and see if form is empty', function () {
        cy.get('[data-cy=inputField]').should('have.value', '');
    })
})



