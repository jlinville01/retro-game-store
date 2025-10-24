@CartPage
Feature: Cart Page

  @EditQuantity
  Scenario: Adjusting the quantity of an item in cart
    
    Given I am on the feed page
    And I add 'Pokemon Yellow' to my cart
    And I click the cart button
    Then I expect the quantity to be 1
    When I increase the quantity for "Pokemon Yellow"
    Then I expect the quantity to be 2
    And I expect the price to be 69.98

  @RemoveItem
  Scenario Outline: Removing an item from cart

    Given I am on the feed page
    And I add 'Pokemon Yellow' to my cart
    And I click the cart button
    When I click the remove button for "Pokemon Yellow"
    Then I expect the empty cart message to be displayed
    And I expect the start shopping button to be displayed

  @ClickProceedToCheckout
  Scenario: Clicking the procced to checkout button

    Given I am on the feed page
    And I add 'Pokemon Yellow' to my cart
    And I click the cart button
    When I click the proceed to checkout button
    Then I expect to land on the checkout page 
    And I expect the place order button to be displayed