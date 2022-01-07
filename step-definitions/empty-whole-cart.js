module.exports = function () {

  this.Given(/that there is at least 1 product in the cart$/, async function () {

    let allButtons = await driver.findElements(By.css('button'));
    let plusButton1 = allButtons[15];
    await plusButton1.click();
    await driver.sleep(3000);

    let plusButton2 = allButtons[18];
    await plusButton2.click();
    await driver.sleep(3000);

  });

  this.When(/^the user clicks the cart button$/, async function () {

    let cartButton = await driver.findElement(By.css('button[class*="ax-btn-fab"]'));
    await cartButton.click();
    await driver.wait(until.elementsLocated(By.css('button[class*="ax-btn-fab"]')));
    await driver.sleep(3000);
  });

  this.When(/the user click the empty button$/, async function () {

    let emptyButton = await driver.findElement(By.css('button[ax-analytics2-action="MiniCart_CleanCart"]'));
    await emptyButton.click();
    await driver.wait(until.elementsLocated(By.css('button[ax-analytics2-action="MiniCart_CleanCart"]')));
    await driver.sleep(3000);
  });

  this.When(/the user agree to the popup that assures that the user want to empty the cart$/, async function () {
    let button = await (await driver.findElements(By.css('div[md-ripple-container]')[1]));
    await driver.wait(until.elementsLocated(By.css('div[md-ripple-container]')));
    await button.click();
  })

};