Feature: common features

    Scenario: Login with sucess
    Given i access login page
    And i type valid user "standard_user" and password "secret_sauce"
    When click on login button
    Then should be logged
