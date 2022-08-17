import start from '../pages/LoginPO'
import start2 from '../pages/descriptionPO'
import start4 from '../pages/Page2PO'

describe('Page2-Tests',() => {

    beforeEach(function() {
        //Function to logout of the system if the user is logged
        start2.go()
        cy.get('.ant-avatar-string').click()
        cy.get('.ant-dropdown-menu > :nth-child(4)').click()
        //start.validationLogoff(Message5)
        })

    it('Fill the Form Item in Horizontal Form',() =>  {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        start.go()
        start.fillForm(info)
        start.submitLogin()
        start2.GoToPage2()
        start4.fillFormPage2()
        start4.chooseRadioButtonHorizontal()
    })

    it('Fill the Form Item In Vertical Form',() =>  {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        start.go()
        start.fillForm(info)
        start.submitLogin()
        start2.GoToPage2()
        start4.fillFormPage2()
        start4.chooseRadioButtonVertical()
    })

    it('Fill the Form Item In Line Form',() =>  {
        //Variables
        var info = { usr:'testuser', password:'sr123'}
        start.go()
        start.fillForm(info)
        start.submitLogin()
        start2.GoToPage2()
        start4.fillFormPage2()
        start4.chooseRadioButtonInLine()
    })

})
