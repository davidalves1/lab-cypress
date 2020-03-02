describe('My First Test', () => {
  it('should be a h1 element', () => {
    cy.visit('http://localhost:8080');

    cy.get('h1')
      .should('have.text', 'Hello Cypress!');
  });

  it('should have a span with input value', () => {
    cy.visit('http://localhost:8080');
    const name = 'David';
    const surname = 'Alves';

    cy.get('#txtName')
      .type(name)
      .should('have.value', name);

    cy.get('#txtSurname')
      .type(surname)
      .should('have.value', surname);

    cy.get('#myName')
      .should('have.text', `${name} ${surname}`);
  })
})
