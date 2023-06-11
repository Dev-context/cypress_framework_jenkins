import {Given,When,Then} from "cypress-cucumber-preprocessor/steps" 
import login from "../../support/page/loginpage" 

Given("i access login page",()=>{
    login.acessPage();
})
And("i type valid user {string} and password {string}", (user,password) => {
	login.setUsername(user);
    login.setPassword(password);
});


When(/^click on login button$/, () => {
	login.clicklogin();
});

Then(/^should be logged$/, () => {
	login.hasHomepage();
});
