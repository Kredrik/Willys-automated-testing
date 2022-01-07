module.exports = function () {

    this.Given(/that there is at least 1 product in the cart$/, async function (){

        let allButtons = await driver.findElements(By.css('button'));
    let plusButton1 = allButtons[15];
    await plusButton1.click();
    await driver.sleep(3000);

    let plusButton2 = allButtons[18];
    await plusButton2.click();
    await driver.sleep(3000);

  });

  this.When(/^the user click the cart button$/, async function () {

    let cartButton = await driver.findElement(By.css('button[class*="ax-btn-fab"]'));
    await cartButton.click();
    await driver.wait(until.elementsLocated(By.css('button[class*="ax-btn-fab"]')));
    await driver.sleep(3000);
  });

  this.And(/the user click the empty button$/, async function ( ) {

    let Cartbutton = await driver.findElements(By.css('document.querySelector("#selenium--miniCart-empty-cart-btn")'));
    await cartButton.click();
    await driver.wait(until.elementsLocated(By.css('document.querySelector("#selenium--miniCart-empty-cart-btn")')));
    await driver.sleep(3000);
  });
  
  this.And(/the user agree to the popup that assures that the user want to empty the cart$/, async function () {
    let button =await driver.findElements(By.css('document.querySelector("#dialogContent_55 > md-dialog-actions > button.ax-btn-primary.md-button.md-ink-ripple")'));
    await button.click();
    await driver.wait(untill.elementsLocated(By.css('document.querySelector("#dialogContent_55 > md-dialog-actions > button.ax-btn-primary.md-button.md-ink-ripple")')));
    await driver.sleep(3000);
  })



    
};