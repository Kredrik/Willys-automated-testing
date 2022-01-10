module.exports = function () {

  let ingredients = [];
  let searchField;

  this.When(/^the user uses the search function$/, async function () {
    searchField = await driver.findElement
      (by.css('input[placeholder="Sök i e-handeln"]'));
  });

  this.When
    (/^adds "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" to the cart$/,
      async function (baguette, butter, tuna, majo, ruccola, tomatoes) {

        ingredients.push(baguette, butter, tuna, majo, ruccola, tomatoes);

        for (let ingredient of ingredients) {
          await driver.wait(until.elementsLocated
            (by.css('input[placeholder="Sök i e-handeln"]')), 10000);
          searchField = await driver.findElement
            (by.css('input[placeholder="Sök i e-handeln"]'));
          await searchField.sendKeys(ingredient, selenium.Key.ENTER);
          await driver.wait(until.elementsLocated
            (by.css('button[title="Öka antal"]')), 10000);

          let plusIcon = await (await driver.findElement
            (by.css('button[title="Öka antal"]')));
          await plusIcon.click();
          await driver.sleep(500);
        }
        let miniCart = (await driver.findElement
          (by.css('button[class*="MiniCartButton"]')));
        await miniCart.click();
      });


  this.Then(/^the user should have multiple products in the cart$/, async function () {
    await driver.wait(until.elementsLocated
      (By.css('span[class^="MiniCartstyles"')), 10000);
    let checkCartView = +(await driver.findElement
      (By.css('span[class^="MiniCartstyles"')).getText());
    expect(checkCartView).to.be.equal(ingredients.length);
  });
};

//Skapa en array med alla ingredienser
//Gå igenom med en loop: Sök och lägg till produkten i vagnen
//Söktagg: ('input[placeholder="Sök i e-handeln"]')