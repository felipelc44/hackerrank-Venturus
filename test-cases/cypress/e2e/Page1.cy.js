import start from '../pages/LoginPO'
import start2 from '../pages/descriptionPO'
import start3 from '../pages/Page1PO'

describe('Page1-Tests',() => {
/*
    beforeEach(function() {
        //Function to logout of the system if the user is logged
        start2.go()
        cy.get('.ant-avatar-string').click()
        cy.get('.ant-dropdown-menu > :nth-child(4)').click()
        //start.validationLogoff(Message5)
        })
*/
    it('Order by Name Ascending',() =>  {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        start.go()
        start.fillForm(info)
        start.submitLogin()
        start2.GoToPage1()

    })

    it('Order by Name Descending',() =>  {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        start.go()
        start.fillForm(info)
        start.submitLogin()
        start2.GoToPage1()
        start2.GoToPage1()
    })

    it('Go to Next Page',() => {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        start.go()
        start.fillForm(info)
        start.submitLogin()
        start2.GoToPage1()
        start3.submitNextPage()
    })

    it('Go to Previous Page',() => {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        start.go()
        start.fillForm(info)
        start.submitLogin()
        start2.GoToPage1()
        start3.submitNextPage()
        start3.submitPreviousPage()
    })


})
