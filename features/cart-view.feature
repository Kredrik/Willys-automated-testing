Feature: Cart view
  As a user I want to be able to visit the cart
  to see the products that have been selected so I can buy them

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Select the cart and view the selected products
    When the user has selected products and added them to the cart
    And the user clicks on the cart icon
    Then the user should see the selected products
    And the user will have the option to buy them
