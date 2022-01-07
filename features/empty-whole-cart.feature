Feature: Empty whole cart
  As a user I want to be able to empty my whole cart so that I can start from
  scratch.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Select the cart and empty the cart
    Given that there is at least 1 product in the cart
    When the user clicks the cart button
    And the user click the empty button
    And the user agree to the popup that assures that the user want to empty the cart
    Then the cart should be emptied
