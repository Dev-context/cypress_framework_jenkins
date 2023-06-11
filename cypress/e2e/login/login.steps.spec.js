import {Given,When,Then,And,After} from "cypress-cucumber-preprocessor/steps"
import login from "../../support/page/loginpage" 
 
 Given("i enter on login page", () => {
    login.acessPage();
});

And("provide username {string}", (UserName) => {
    login.setUsername(UserName)
});

And("provide password {string}", (Password) => {
    login.setPassword(Password);
});


When("i click on button login", () => {
    login.clicklogin();
});

Then("should be {string}", (message) => {
    login.showErrMessage(message);
  
    
});

After(()=>{
    cy.screenshot();
})

