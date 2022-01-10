#Bygg en lyxmacka med denna feature!
Feature: Adding multiple products
  As a user I want to be able to add multiple items to the cart.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  #Ingredienser: Baguette, smör, tonfisk, majonäs, ruccola, tomat
  Scenario: Use the search function to add multiple products to the cart
    When the user uses the search function
    And adds "Baguette Hel", "Bregott", "Tonfisk i Olja Msc", "Lättmajonnäs", "Ruccola Ekologisk Klass 1", "Tomater Cocktail Klass 1" to the cart
    Then the user should have multiple products in the cart