Feature: Cart quantity
  As a user I want to be able to change the amount of a product in my cart so
  that I can buy more or less of that product.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Increasing the quantity of a product in the cart
    Given that there are products in the cart
    And the user have clicked the cart button
    When the user clicks the plus icon next to the product in the cart
    Then the amount of the specific product should increase

  Scenario: Decreasing the quantity of a product in the cart
    Given that there are products in the cart
    And the user have clicked the cart button
    When the user clicks the minus icon next to the product in the cart
    Then the amount of the specific product should decrease