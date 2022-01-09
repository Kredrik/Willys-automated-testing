module.exports = function () {

  this.Given(/^that there are products in the cart to change$/, async function () {

    let showMoreButton = await driver.findElement
      (By.css('div[class="ax-has-more-btn"]'));
    await showMoreButton.click(2000);

    await driver.executeScript
      ('document.querySelector(\'div[class="ax-has-more-btn"]\').scrollIntoView()');

    let addButtons = await driver.findElements
      (By.css('button'));
    let addButton1 = addButtons[103];
    await addButton1.click();
    await driver.sleep(1000);

    let addButton2 = addButtons[109];
    await addButton2.click();
    await driver.sleep(1000);

  });

  this.Given(/^the user have clicked the cart button$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('button[class*="ax-btn-fab"]')));
      let cartButton = await driver.findElement
        (By.css('button[class*="ax-btn-fab"]'));
      await cartButton.click();

    });

  this.When(/^the user clicks the plus icon next to the product in the cart$/,
    async function () {

      // let increaseButtons = await driver.findElements(By.css('button'));
      // let increaseButton = increaseButtons[178];
      // await driver.sleep(2000);
      // await increaseButton.click();
      // await driver.sleep(2000);

      await driver.wait(until.elementsLocated(By.css('button[class*="add-to-cart-btn"]')), 10000);
      let increaseButton = await driver.findElement(By.css('button[class*="add-to-cart-btn"]'));
      await increaseButton.click();

    });

}