Feature: Adding one or more products
  As a user I want to be able to add one or more items of the same product in the cart.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Add the first available product to the cart and try to increase the quantity of it in the cart
    When the user clicks on the plus icon next to the first available product
    Then the user should have increased the quantity of the product