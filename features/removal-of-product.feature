Feature: Removal of product
  As as user i want to be able to remove specific items from my cart
  and see that they are removed properly

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Select a product and remove it
    Given that there is a product in the cart to remove
    When the user click the cart button
    And the user change the amount to "0" for the specific product
    Then the user hit the small ok button and the specific product should be removed