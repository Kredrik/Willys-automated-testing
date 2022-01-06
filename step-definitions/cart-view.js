module.exports = function () {

  this.When(/^the user has selected products and added them to the cart$/, async function () {

    let fruitsAndGreensMenu = await driver.findElement
      (By.css('a[href="/sortiment/frukt-och-gront"'));
    await fruitsAndGreensMenu.click();

    await driver.wait(until.elementsLocated
      (by.css('a[href="/sortiment/frukt-och-gront/farska-bar"')), 10000);

    let freshBerriesMenu = await driver.findElement
      (by.css('a[href="/sortiment/frukt-och-gront/farska-bar"'));
    await driver.sleep(2000);

    await driver.executeScript
      ('document.querySelector(\'a[href="/sortiment/frukt-och-gront/farska-bar"]\').scrollIntoView()');
    await freshBerriesMenu.click();
    await driver.sleep(3000);

    let h2Text;
    while (h2Text !== 'Färska bär') {
      h2Text = await (await driver.findElement(By.css('h2'))).getText();
      await driver.sleep(100);
    }

    let products = await driver.findElements
      (By.css('[itemtype="https://schema.org/Product"]'));

    for (let product of products) {

      let productStrawberry = (await product.getText()).includes('Jordgubbar Klass 1');
      let productBlueberry = (await product.getText()).includes('Blåbär Klass 1');
      let productRaspberry = (await product.getText()).includes('Hallon Klass 1');
      if (!productStrawberry && !productBlueberry && !productRaspberry) { continue }

      let buyProduct = await (await product.findElement
        (By.css('button[title="Öka antal"]')));
      await buyProduct.click();
      await driver.sleep(2000);

    }

  })

  this.When(/^the user clicks on the cart icon$/, async function () {

    let goToCart = (await driver.findElement
      (By.css('a[href="https://www.willys.se/varukorg"]')));
    await goToCart.click();
    await driver.sleep(2000);

  });

  this.Then(/^the user should see the selected products$/, async function () {
    let checkCartView = (await driver.findElement
      (By.css('p[class="Text_text__1DvUt Text_body__FrvAc Text_black__yB42g Text_small__3m75u"')).getText());
    expect(checkCartView).to.be.equal('Totalt (3)');
    await driver.sleep(2000);
  });

  this.Then(/^the user will have the option to buy them$/, async function () {

    let goToCheckOut = (await driver.findElement
      (By.css('button[class="Buttonstyles__StyledButton-sc-1g4oxwr-0 gqUoiG"]')));
    await goToCheckOut.click();
    await driver.sleep(2000);

    let checkOut = (await driver.findElement(
      By.css('span[class="checkout-button-text"]')));
    await checkOut.click();
    await driver.sleep(2000);

  });

};