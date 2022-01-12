# Willys-automated-testing
Testing the website Willys.se for specific functions
3rd and last project for the partcourse "Programmering för testare" @ Jensen Yrkeshögskola
Teacher: Thomas Frank
Use of test tools: Cucumber (Gherkin) and Selenium
Other tools: Visual Studio Code, GitHub Desktop, Chrome

Team: 
Scrum master - Christoffer Gustavsson
Testers and Developers - Fredrik Kastberg, Simon Haag, Roger Lindblom, Carl-Johan Tornberg

GitHub:
https://github.com/Kredrik/Willys-automated-testing

package.json test scripts:

 "scripts": {
    "test": "node node_modules/updated-selenium-cucumber-js/index",
    "test-adding-multiple-products": "node node_modules/updated-selenium-cucumber-js/index -f features/adding-multiple-products.feature",
    "test-cart-quantity": "node node_modules/updated-selenium-cucumber-js/index -f features/cart-quantity.feature",
    "test-cart-sum": "node node_modules/updated-selenium-cucumber-js/index -f features/cart-sum.feature",
    "test-cart-view": "node node_modules/updated-selenium-cucumber-js/index -f features/cart-view.feature",
    "test-empty-whole-cart": "node node_modules/updated-selenium-cucumber-js/index -f features/empty-whole-cart.feature",
    "test-removal-of-product": "node node_modules/updated-selenium-cucumber-js/index -f features/removal-of-product.feature",
    "test-store-categories": "node node_modules/updated-selenium-cucumber-js/index -f features/store-categories.feature",
    "test-view-product-page": "node node_modules/updated-selenium-cucumber-js/index -f features/view-product-page.feature"
  }
