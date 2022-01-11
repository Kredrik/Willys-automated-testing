const slowDown = require('./sleep.js');

module.exports = function () {

  this.Given(/^that there are products in the cart to change$/, async function () {
    await driver.wait(until.elementsLocated
      (by.css('div.ax-product-quantity-instock button[aria-label^="Lägg till"]')));
    let addButtons = await driver.findElements
      (By.css('div.ax-product-quantity-instock button[aria-label^="Lägg till"]'));
    await addButtons[0].click();
    await slowDown();
    await driver.wait(until.elementsLocated
      (by.css('div.ax-product-quantity-instock button[aria-label^="Lägg till"]')));
    await addButtons[1].click();
    await slowDown();
  });

  this.Given(/^the user have clicked the cart button$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('button[class*="ax-btn-fab"]')));
      let cartButton = await driver.findElement
        (By.css('button[class*="ax-btn-fab"]'));
      await cartButton.click();
      await slowDown();

    });

  this.When(/^the user clicks the plus icon next to the product in the cart$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('div.col-quantity button[aria-label*="Lägg till"]')));
      let increaseButtons = await driver.findElements
        (By.css('div.col-quantity button[aria-label*="Lägg till"]'));
      await increaseButtons[0].click();
      await increaseButtons[1].click();
      await slowDown();

    });

  this.When(/^the user clicks the minus icon next to the product in the cart$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('div.col-quantity button[aria-label*="Ta bort"]')));
      let decreaseButtons = await driver.findElements
        (By.css('div.col-quantity button[aria-label*="Ta bort"]'));
      await decreaseButtons[0].click();
      await slowDown();

    });

  this.Then(/^the amount of the specific product should increase$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('span[class="total"]')));
      let quantityCheck = await driver.findElement
        (By.css('span[class="total"]')).getText();
      expect(quantityCheck).to.be.equal("Totalt (4)")
      await slowDown();
    });

  this.Then(/^the amount of the specific product should decrease$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('span[class="total"]')));
      let quantityCheck = await driver.findElement
        (By.css('span[class="total"]')).getText();
      expect(quantityCheck).to.be.equal("Totalt (1)")
      await slowDown();
    });
}