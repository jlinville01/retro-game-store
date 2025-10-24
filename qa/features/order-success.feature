@OrderSuccessPage
Feature: Feed Page

  @ClickCartButton
  Scenario: Adding a game to cart

    Given I am on the order-success page
    When I click the cart button
    Then I expect to land on the cart page 
    And I expect the checkout button to be displayed

  @ContinueShopping
  Scenario: Clicking the continue shopping button with an empty cart

    Given I am on the order-success page
    When I click the continue shopping button
    Then I expect to land on the feed page