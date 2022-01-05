Feature: Cart view
    As a user I want to be able to visit the cart
    And see the products that have been selected so I can buy them

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Select the cart and view the selected products
    When the user has selected products in the cart
    And clicks on the cart tab
    Then the user should see selected products
    And will have the option to buy them
