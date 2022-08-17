//import cypress from '../../cypress'
//import DescriptionPage from '../pages/descriptionPO'
//methods
class   Page1{


    go() {
    cy.visit('')
}
    submitLogin() {
    cy.get('.ant-btn').click();
    }

    submitNextPage() {
    cy.get('.ant-pagination-next > .ant-pagination-item-link').click()
    }

    submitPreviousPage() {
    cy.get('.ant-pagination-prev > .ant-pagination-item-link').click()
    }

    }



export default new Page1;
