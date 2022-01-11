const slowDown = require('./sleep.js');
module.exports = function () {


  this.Given(/^that there is at least 1 product in the cart$/, async function () {

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

  this.When(/^the user clicks the cart button$/, async function () {

    await driver.wait(until.elementsLocated
      (By.css('button[class*="ax-btn-fab"]')), 10000);
    let cartButton = await driver.findElement
      (By.css('button[class*="ax-btn-fab"]'));
    await cartButton.click();
    await slowDown();
    await driver.sleep(1000);

  });

  this.When(/^the user click the empty button$/, async function () {

    await driver.wait(until.elementsLocated
      (By.css('button[ax-analytics2-action="MiniCart_CleanCart"]')), 10000);
    let emptyButton = await driver.findElement
      (By.css('button[ax-analytics2-action="MiniCart_CleanCart"]'));
    await emptyButton.click();
    await slowDown();

  });

  this.When(/^the user agree to the popup that assures that the user want to empty the cart$/, async function () {

    await driver.wait(until.elementsLocated
      (By.css('button[ng-show="dialog.ok"]')), 10000);
    let button = await (await driver.findElement
      (By.css('button[ng-show="dialog.ok"]')));
    await button.click();
    await slowDown();

  })

  this.When(/^the cart should be emptied$/, async function () {

    await driver.wait(until.elementsLocated
      (by.css('h3[class="selenium--miniCart-empty-text"]')), 10000);
    let checkCartView = (await driver.findElement
      (By.css('h3[class="selenium--miniCart-empty-text"]')).getText());
    expect(checkCartView).to.be.equal('Din varukorg är tom!');
    await slowDown();
  });
}