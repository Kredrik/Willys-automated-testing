Feature: Store categories
  As as user I want to be able to visit different
  product categories in order to see the products they contain.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Select the Bröd category to see if it contains products
    When The user click on the category Bröd & Kakor
    And click on the sub-category Bröd
    Then I should be directed to the Bröd category page
