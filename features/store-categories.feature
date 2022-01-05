Feature: Store categories
  As as user I want to be able to visit different
  product categories in order to see the products they contain.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Select the "Skafferi" category to see if it contains products
	  When I click on the category Skafferi
	  Then I should be directed to the Skafferi category page
	  And the products for the category should be visible