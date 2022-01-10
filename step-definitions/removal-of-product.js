module.exports = function () {

  this.Given(/^that there is a product in the cart to remove$/, async function () {

    let allButtons = await driver.findElements
      (By.css('button'));
    let plusButton1 = allButtons[15];
    await plusButton1.click();

    let plusButton2 = allButtons[18];
    await plusButton2.click();

  });

  this.When(/^the user click the cart button$/, async function () {

    await driver.wait(until.elementsLocated
      (By.css('button[class*="ax-btn-fab"]')));
    let cartButton = await driver.findElement
      (By.css('button[class*="ax-btn-fab"]'));
    await cartButton.click();
    await driver.sleep(2000);

  });

  this.When(/^the user change the amount to "([^"]*)" for the specific product$/, async function (word) {
    let cartQuantityInput = await driver.findElements
      (By.css('div.col-quantity input[name="quantity"]'));
    await cartQuantityInput[0].click();
    await cartQuantityInput[0].sendKeys(word), 1000;

  });

  this.Then(/^the user hit the small ok button and the specific product should be removed$/, async function () {

    let okButton = await driver.findElement
      (By.css('button[class*="ax-product-quantity-ok"]'))
    await okButton.click();
    await driver.sleep(1500);
    await driver.wait(until.elementsLocated
      (By.css('span[class="total"]')));
    let quantityCheck = await driver.findElement
      (By.css('span[class="total"]')).getText();
    expect(quantityCheck).to.be.equal("Totalt (1)");
  });
}