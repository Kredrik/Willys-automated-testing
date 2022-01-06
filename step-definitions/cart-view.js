module.exports = function () {

  this.When(/^the user has selected products in the cart$/, async function () {

    let fruitsAndGreensMenu = await driver.findElement
      (By.css('a[href="/sortiment/frukt-och-gront"'));
    await fruitsAndGreensMenu.click();

    await driver.wait(until.elementsLocated
      (by.css('a[href="/sortiment/frukt-och-gront/farska-bar"')), 10000);

    let freshBerriesMenu = await driver.findElement
      (by.css('a[href="/sortiment/frukt-och-gront/farska-bar"'));

    await driver.executeScript
      ('document.querySelector(\'a[href="/sortiment/frukt-och-gront/farska-bar"]\').scrollIntoView()');
    await freshBerriesMenu.click();

    await driver.sleep(3000);

    let h2Text;
    while (h2Text !== 'Färska bär') {
      h2Text = await (await driver.findElement(By.css('h2'))).getText();
      await driver.sleep(100);
    }


  })

}