const slowDown = require('./sleep.js');
module.exports = function () {

  this.When(/^the user has selected products and added them to the cart$/, async function () {

    let fruitsAndGreensMenu = await driver.findElement
      (By.css('a[href="/sortiment/frukt-och-gront"'));
    await fruitsAndGreensMenu.click();
    await slowDown();

    await driver.wait(until.elementsLocated
      (by.css('a[href="/sortiment/frukt-och-gront/farska-bar"')), 10000);
    let freshBerriesMenu = await driver.findElement
      (by.css('a[href="/sortiment/frukt-och-gront/farska-bar"'));

    await driver.executeScript
      ('document.querySelector(\'a[href="/sortiment/frukt-och-gront/farska-bar"]\').scrollIntoView()');
    await freshBerriesMenu.click();
    await slowDown();

    let h2Text;
    await driver.wait(until.elementsLocated
      (By.css('h2')), 10000);

    while (h2Text !== 'Färska bär') {
      h2Text = await (await driver.findElement
        (By.css('h2'))).getText();
      await driver.sleep(100);
    }

    await driver.wait(until.elementsLocated
      (By.css('[itemtype="https://schema.org/Product"]')), 10000);
    let products = await driver.findElements
      (By.css('[itemtype="https://schema.org/Product"]'));

    for (let product of products) {
      await driver.sleep(1000);

      let productStrawberry =
        (await product.getText()).includes('Jordgubbar Klass 1');
      let productBlueberry =
        (await product.getText()).includes('Blåbär Klass 1');
      let productRaspberry =
        (await product.getText()).includes('Hallon Klass 1');


      if (
        !productStrawberry &&
        !productBlueberry &&
        !productRaspberry) { continue }

      await driver.wait(until.elementsLocated
        (By.css('button[title="Öka antal"]')), 10000);
      let buyProduct = await (await product.findElement
        (By.css('button[title="Öka antal"]')));
      await buyProduct.click();


    }
    await slowDown();

  })

  this.When(/^the user clicks on the cart icon$/, async function () {

    let goToCart = (await driver.findElement
      (By.css('a[href="https://www.willys.se/varukorg"]')));
    await goToCart.click();
    await slowDown();

  });

  this.Then(/^the user should see the selected products$/, async function () {

    await driver.wait(until.elementsLocated
      (By.css('span[class^="MiniCartstyles"')), 10000);
    let checkCartView = (await driver.findElement
      (By.css('span[class^="MiniCartstyles"')).getText());
    expect(checkCartView).to.be.equal('3');
    await slowDown();
  });

  this.Then(/^the user will have the option to buy them$/, async function () {

    let goToCheckOut = await driver.findElement
      (By.css('a[class*="secondary"]'));
    await goToCheckOut.click();
    await slowDown();

    await driver.wait(until.elementsLocated
      (By.css('span[class="checkout-button-text"]')), 10000);
    let checkOut = (await driver.findElement(
      By.css('span[class="checkout-button-text"]')));
    await checkOut.click();
    await slowDown();
  });
};