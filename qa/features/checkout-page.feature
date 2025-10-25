@CheckoutPage
Feature: Checkout Page

    @EmptyFullName
    Scenario: Attempting to place order with empty full name input
    
        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I click the place order button
        Then I expect to see error message for empty full name input

    @EmptyAddress
    Scenario: Attempting to place order with empty address line 1 input
    
        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I click the place order button
        Then I expect to see error message for empty address line 1 input

    @EmptyCity
    Scenario: Attempting to place order with empty city input
    
        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I click the place order button
        Then I expect to see error message for empty city input

    @EmptyState
    Scenario: Attempting to place order with empty state input
    
        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I click the place order button
        Then I expect to see error message for empty state input

    @EmptyZip
    Scenario: Attempting to place order with empty zip code input
    
        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I click the place order button
        Then I expect to see error message for empty zip code input

    @EmptyCreditCard
    Scenario: Attempting to place order with empty credit card input
    
        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I click the place order button
        Then I expect to see error message for empty credit card input

    @InvalidCreditCard
    Scenario: Entering an invalid credit card number

        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I enter 1234123412341234 into the credit card imput
        Then I expect to see error message for invalid credit card input

    @ValidCheckout
    Scenario: Placing an order

        Given I am on the feed page
        And I add "Pokemon Yellow" to my cart
        And I click the cart button
        And I click the proceed to checkout button
        When I place order with template test data
        Then I expect to land on the order success page
        And I expect the order continue shopping button to be displayed