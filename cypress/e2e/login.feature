@regression
Feature: Login
    I`m user like to make login

    Background: preconditions
        Given i enter on login page


    Scenario Outline: Valid and invalid loggin
        And provide username "<UserName>"
        And provide password "<Password>"
        When i click on button login
        Then should be "<errorMessage>"


        Examples:
            | UserName                | Password     | errorMessage                                                              |
            | standard_user           | secret_sauce |                                                                           |
            | locked_out_user         | secret_sauce |                                                                           |
            | problem_user            | secret_sauce |                                                                           |
            | performance_glitch_user | secret_sauce |                                                                           |
            | standard_teste          | secret       | Epic sadface: Username and password do not match any user in this service |
           