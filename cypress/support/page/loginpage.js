/// <reference types="cypress"/>
import {btn_login, password, username,ErroMessageLogin} from "../elements/login.json" 

class Loginpage {

    acessPage() {
        cy.visit("/");
    }

    setUsername(user) {
        cy.get(username).type(user);
    }

    setPassword(pass) {
        cy.get(password).type(pass, {log: false});
    }

    clicklogin() {
        cy.get(btn_login).click();
    }

     hasHomepage() {
         cy.url()
    }

    showErrMessage(message){
       if(message){
        cy.get(ErroMessageLogin).should('have.text',message)
       }else{
        this.hasHomepage();
       }
    }


}

const login = new Loginpage();

export default login;
