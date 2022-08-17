

//methods
class   DescriptionPage{


    go() {
    cy.visit('http://localhost:3000/#/')
}

    GoToPage1() {
        cy.get('[href="#/page1"] > span').click()
        cy.get('.ant-table-column-sorters').click()
    }

    GoToPage2() {
        cy.get('[href="#/page2"] > span').click()
         }

    validationFour(Message4) {
        cy.contains('Hi, Test User').should('have.text', Message4);
    }

    }



export default new DescriptionPage;