Feature: Cart sum
	As user I want to be able to see that the cart shows and calculate the
	correct price and that I can see the total price before I choose to buy.

	Background:
		Given that we are on Willy's website
		And that we accepted the standard cookie policy
		And that we have been through the initial where to deliver popup

	Scenario: Add different bread products and check the cart to see if the sum is calculated correctly
		Given that there are products in the cart
		And the user press the cart button
		Then the user see that the cart shows the correct total price
