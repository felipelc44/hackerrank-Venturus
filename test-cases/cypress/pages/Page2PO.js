//import cypress from '../../cypress'
//import DescriptionPage from '../pages/descriptionPO'
//methods
class   Page2{


    go() {
    cy.visit('')
}


    fillForm(info) {
        cy.get('#normal_login_username').type(info.usr)
        cy.get('#normal_login_password').type(info.password)
    }



    fillFormPage2() {
        cy.get('.ant-input-affix-wrapper > .ant-input').type('Test input field to validate')//input field
        cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('Brazil')//select country field
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click()//Tree Selection
        cy.get('.ant-select-tree-title').click()//Tree Selection Color
        cy.get('.ant-cascader-picker > .ant-input').click()//Cascader picker1
        cy.get('.ant-cascader-menu-item').click()//Cascader picker2
        cy.get(':nth-child(2) > [title="São Paulo"]').click()//Cascader picker3
        cy.get('.ant-calendar-picker-input').click()//calendar picker input
        cy.get('.ant-calendar-today-btn').click()//date picker input
        cy.get('.ant-input-number-input').click().type('0')//Slider field
        cy.get('.ant-switch').click()//switch button
        cy.get('.ant-form-item-children > .ant-input').type('Text/Area values to validate')// text/area field

    }
    chooseRadioButtonVertical() {
        cy.get('.ant-radio-group > :nth-child(2) > :nth-child(2)').click()
    }

    chooseRadioButtonInLine() {
        cy.get('.ant-radio-group > :nth-child(3) > :nth-child(2)').click()
    }

    chooseRadioButtonHorizontal() {
        cy.get('.ant-radio-button-wrapper-checked').click()
    }

    }



export default new Page2;
