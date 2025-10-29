@FeedPage
Feature: Feed Page

  @AddToCart
  Scenario: Adding a game to cart
    Given I am on the feed page
    When I add "Pokemon Yellow" to my cart
    Then my cart should have "1" value

  @EmptyCart
  Scenario: Clicking the cart button with an empty cart
    Given I am on the feed page
    When I click the cart button
    Then I expect to land on the cart page 
    And I expect the start shopping button to be displayed

  @FullCart
  Scenario: Clicking the cart button with a full cart
    Given I am on the feed page
    When I add "Pokemon Yellow" to my cart
    And I click the cart button
    Then I expect to land on the cart page 
    And I expect the checkout button to be displayed