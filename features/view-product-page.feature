Feature: View Product Page
  As a user I want to click on a product to receive more details about it.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Click a specific product to view the detailed product page
    When the user clicks on a product
    Then the user should be shown an overview of the product
    And will be given the option to view the different tabs for the product