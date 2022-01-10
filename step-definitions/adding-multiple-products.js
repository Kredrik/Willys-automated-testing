module.exports = function () {

  let ingredients = [];
  let input;

  this.When(/^the user uses the search function$/, async function () {
    input = await driver.findElement(by.css('input[placeholder="Sök i e-handeln"]'));
  });

  this.When
    (/^adds "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" to the cart$/,
      async function (baguette, butter, tuna, majo, ruccola, tomatoes) {

        ingredients.push(baguette, butter, tuna, majo, ruccola, tomatoes);

        for (let ingredient of ingredients) {

        }






      });


  this.Then(/^the user should have multiple products in the cart$/, async function () {

  });
};

//Skapa en array med alla ingredienser
//Gå igenom med en loop: Sök och lägg till produkten i vagnen
//Söktagg: ('input[placeholder="Sök i e-handeln"]')