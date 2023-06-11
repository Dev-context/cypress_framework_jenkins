Feature: add or remove intens on the cart

    How user i'd like to insert or remove itens on the cart

    Background:Precoditions
        Given i access login page
        And i type valid user "standard_user" and password "secret_sauce"
        When click on login button
        Then should be logged
        And i'm on the products page

    @regression
    Scenario Outline:add or Remove un Item
        When click "<btn_txt>"
        Then should be "<badge_item>"
        And should have be show text "<btn_txt_clicked>"

        Examples:
            | btn_txt     | badge_item | btn_txt_clicked |
            | Add to cart | 1          | Remove          |
            | Remove      |            | Add to cart     |



