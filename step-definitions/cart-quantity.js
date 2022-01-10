module.exports = function () {

  this.Given(/^that there are products in the cart to change$/, async function () {
    //Förbättring: Kan försöka peka på enbart knappar 
    //för produkten istället för alla
    let addButtons = await driver.findElements
      (By.css('button'));
    let addButton1 = addButtons[12];
    await addButton1.click();

    let addButton2 = addButtons[18];
    await addButton2.click();

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
      await driver.wait(until.elementsLocated
        (By.css('div.col-quantity button[aria-label*="Lägg till"]')));
      let increaseButtons = await driver.findElements
        (By.css('div.col-quantity button[aria-label*="Lägg till"]'));
      await increaseButtons[0].click();
      await increaseButtons[1].click();
      await driver.sleep(1500)

    });

  this.When(/^the user clicks the minus icon next to the product in the cart$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('div.col-quantity button[aria-label*="Ta bort"]')));
      let decreaseButtons = await driver.findElements
        (By.css('div.col-quantity button[aria-label*="Ta bort"]'));
      await decreaseButtons[0].click();
      await driver.sleep(1500)

    });

  this.Then(/^the amount of the specific product should increase$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('span[class="total"]')));
      let quantityCheck = await driver.findElement
        (By.css('span[class="total"]')).getText();
      expect(quantityCheck).to.be.equal("Totalt (4)")
    });

  this.Then(/^the amount of the specific product should decrease$/,
    async function () {
      await driver.wait(until.elementsLocated
        (By.css('span[class="total"]')));
      let quantityCheck = await driver.findElement
        (By.css('span[class="total"]')).getText();
      expect(quantityCheck).to.be.equal("Totalt (1)")
    });
}