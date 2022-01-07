module.exports = function () {

  this.Given(/^that we are on the Bröd category$/, async function () {

    let breadAndCookies = await driver.findElement(by.css('a[href="/sortiment/brod-och-kakor"]'));
    await breadAndCookies.click();
    await driver.wait(until.elementsLocated(by.css('a[href="/sortiment/brod-och-kakor/brod"]')), 10000);

    let breadLink = await driver.findElement(by.css('a[href="/sortiment/brod-och-kakor/brod"]'));


    await driver.executeScript('document.querySelector(\'a[href="/sortiment/brod-och-kakor/brod"]\').scrollIntoView()');
    await breadLink.click();
  });

  this.Given(/^that there are products in the cart$/, async function () {

    products = await driver.findElements(by.css('[itemtype="https://schema.org/Product"]'));

    let baguette;
    let numberOfBaguettes = 5;
    for (let product of products) {
      baguette = (await product.getText()).includes('Baguette Hel');
      await driver.sleep(1000);
      if (baguette) {
        for (i = 0; i < numberOfBaguettes; i++) {
          let plusIcon = await (await product.findElement(by.css('button[title="Öka antal"]')));
          await plusIcon.click();
          driver.sleep(700);
        }
        let price =
          +((await (await product.findElement(by.css('div[class*="PriceLabel"]')))
            .getText()).split('\n').join('.').split('./st').join(''));
        console.log('Priset:', (price * numberOfBaguettes));
        break;
      }
    }
    await driver.sleep(6000);

  });
  this.Given(/^the user press the cart button$/, async function () {
    let miniCart = (await driver.findElement(by.css('button[class*="MiniCartButton"]')));
    await miniCart.click();

  });


  this.Then(/^the user see that the cart shows the correct total price$/, async function () {

    //Gör egen beräkning
    await driver.sleep(3000);
    //Hämta data från kundvagnen
  });

};