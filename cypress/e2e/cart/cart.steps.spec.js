import {Given,And, When,Then, After} from "cypress-cucumber-preprocessor/steps" 
import login from "../../support/page/loginpage" 
import products_page from "../../support/page/productspage";

And("i'm on the products page", () => {
	products_page.productPage();
});

When("click {string}", (btn_txt) => {
    products_page.setItem(btn_txt);
});

Then("should be {string}",(badge_item)=>{
products_page.hasItemBadge(badge_item);
})

And("should have be show text {string}",(btn_txt)=>{
products_page.verifyBtntxt(btn_txt);
})

After(()=>{
    cy.screenshot();
})

