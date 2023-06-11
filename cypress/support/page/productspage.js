/// <reference types="cypress"/>
import product from "../elements/product.json"

class productsPage {

    productPage() {
        cy.get(product.productsTiTle).should("contain.text", "Products");
    }


    setItem(action) {
        switch (action) {
            case "Add to cart":
                cy.get(product.addcartBtn).click();
                break;
            case "Remove":
                cy.get(product.addcartBtn).click();
                cy.get(product.removeBtn).click();
                break;

        }

    }

    verifyBtntxt(text) {
        switch (text) {
            case 'Remove':
                cy.get(product.removeBtn).should('contain.text', text)
                break;

            case 'Add to cart':
                cy.get(product.addcartBtn).should('contain.text', text)
                break;
        }

    }
 
    hasItemBadge(qtd) {
        if (qtd) {
            cy.get(product.cartBadgeNumber).should("contain.text", qtd);
        } else if (!qtd) {
            cy.get(product.cartBadgeNumber).should("not.exist");
        }


    }



}

const products_page = new productsPage();

export default products_page;