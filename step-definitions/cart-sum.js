module.exports = function () {

  let price;

  this.Given(/^that we are on the Bröd category$/, async function () {

    let breadAndCookies = await driver.findElement
      (by.css('a[href="/sortiment/brod-och-kakor"]'));
    await breadAndCookies.click();

    await driver.wait(until.elementsLocated
      (by.css('a[href="/sortiment/brod-och-kakor/brod"]')), 10000);
    let breadLink = await driver.findElement
      (by.css('a[href="/sortiment/brod-och-kakor/brod"]'));


    await driver.executeScript
      ('document.querySelector(\'a[href="/sortiment/brod-och-kakor/brod"]\').scrollIntoView()');
    await breadLink.click();
  });

  this.Given(/^that there are products in the cart$/, async function () {

    products = await driver.findElements(by.css('[itemtype="https://schema.org/Product"]'));

    let baguette;
    let numberOfBaguettes = 5;
    for (let product of products) {
      baguette = (await product.getText()).includes('Baguette Hel');
      await driver.sleep(500);
      if (baguette) {
        for (i = 0; i < numberOfBaguettes; i++) {
          let plusIcon = await (await product.findElement(by.css('button[title="Öka antal"]')));
          await plusIcon.click();
          driver.sleep(500);
        }
        price =
          +((await (await product.findElement
            (by.css('div[class*="PriceLabel"]')))
            .getText()).split('\n').join('.').split('./st').join(''));
        console.log('Priset:', (price * numberOfBaguettes));
        break;
      }
    }

  });
  this.Given(/^the user press the cart button$/, async function () {
    let miniCart = (await driver.findElement(by.css('button[class*="MiniCartButton"]')));
    await miniCart.click();

  });


  this.Then(/^the user see that the cart shows the correct total price$/, async function () {

    await driver.wait(until.elementsLocated(by.css('p[class*="price"]')));
    let cartPrice =
      +((await (await driver.findElement
        (by.css('p[class*="price"]')))
        .getText()).split(',').join('.').split(' kr').join(''));

    let totalQuantity = (await (await driver.findElement
      (by.css('input[class*="CartQuantity"]')))
      .getAttribute("value"));

    totalQuantity = +totalQuantity.substring(0, totalQuantity.length - 3);

    let pricePerBaguette = (cartPrice / totalQuantity);
    expect(price).to.be.equal(pricePerBaguette)
  });

};