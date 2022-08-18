import start from '../pages/LoginPO'
import start2 from '../pages/descriptionPO'

describe('Login-Tests',() => {

    /*before(function() {
        //Function to logout the user to restart the tests
        start2.go()
        cy.get('.ant-avatar-string').click()
        cy.get('.ant-dropdown-menu > :nth-child(4)').click()
    })*/

    it('Sucess_login',() => {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        const Message4 = 'Hi, Test User'
        //var start = new LoginPage()

        start.go()
        start.fillForm(info)
        start.submitLogin()

        //var start2 = new DescriptionPage()
        start2.go()
        start2.validationFour(Message4)
        //
        start2.go()
        cy.get('.ant-avatar-string').click()
        cy.get('.ant-dropdown-menu > :nth-child(4)').click()
    })

    it('Username_and_Password should be inputed ',() => {
        //Variables
        //var start = new LoginPage()
        const Message1 = 'Please input your username.'
        const Message2 = 'Please input your Password.'

        start.go()
        cy.get('.ant-btn').dblclick()
        cy.get('.ant-btn').dblclick()
        start.validationOne(Message1)
        start.validationTwo(Message2)

    })

        it('Login/Password is Incorrect',() => {
            //Variables
            var invalidInfo = {usr:'tes1', password:'tes1'}
            const Message3 = 'There was a problem logging in: Login/Password is incorrect'
            //var start = new LoginPage()

            start.go()
            start.fillForm(invalidInfo)
            cy.get('.ant-btn').dblclick()
            cy.get('.ant-btn').dblclick()
            start.validationThree(Message3)
            })

            
    it('Sucess_logout',() => {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        const Message4 = 'Hi, Test User'
        const Message5 = 'Login with your Account'
        //var start = new LoginPage()

        start.go()
        start.fillForm(info)
        start.submitLogin()

        //var start2 = new DescriptionPage()
        start2.go()
        start2.validationFour(Message4)

        cy.get('.ant-avatar-string').click()
        cy.get('.ant-dropdown-menu > :nth-child(4)').click()
        start.validationLogoff(Message5)
    })


    
})