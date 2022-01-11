
module.exports = function () {
  const slowDown = require('./sleep.js');
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
        let plusIcon;
        for (let ingredient of ingredients) {
          await driver.wait(until.elementsLocated
            (by.css('input[placeholder="Sök i e-handeln"]')), 10000);
          searchField = await driver.findElement
            (by.css('input[placeholder="Sök i e-handeln"]'));
          await driver.sleep(1000);
          await searchField.sendKeys(ingredient, selenium.Key.ENTER);

          await driver.sleep(2300);
          await driver.wait(until.elementsLocated
            (by.css('button[title="Öka antal"]')), 10000);
          plusIcon = await (await driver.findElement
            (by.css('button[title="Öka antal"]')));
          await plusIcon.click();
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
    await slowDown();
  });
};
