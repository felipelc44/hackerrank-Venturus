//import cypress from '../../cypress'
//import DescriptionPage from '../pages/descriptionPO'
//methods
class   LoginPage{


        go() {
        cy.visit('')
    }


        fillForm(info) {
            cy.get('#normal_login_username').type(info.usr)
            cy.get('#normal_login_password').type(info.password)
        }

        //fillForm(invalidInfo) {
        //    cy.get('#normal_login_username').type(invalidInfo.usr)
        //    cy.get('#normal_login_password').type(invalidInfo.password)
        //}


        validationOne(Message1) {
            cy.contains('Please input your username.').should('have.text','Please input your username.');
        }

        validationTwo(Message2) {
            cy.contains('Please input your Password.').should('have.text',Message2);
        }

        validationThree(Message3) {
            cy.contains('There was a problem logging in: Login/Password is incorrect').should('have.text', Message3);
        }

        validationFour(Message4) {
            cy.contains('Hi, Test User').should('have.text', Message4);
        }

        validationLogoff(Message5) {
            cy.contains('Login with your Account').should('have.text', Message5);
        }


    submitLogin() {
        cy.get('.ant-btn').click();
    }

        }



export default new LoginPage;
