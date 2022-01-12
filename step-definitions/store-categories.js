const slowDown = require('./sleep.js');
//let baguette; wtf
module.exports = function () {

  this.When(/^The user click on the category Bröd & Kakor$/, async function () {

    await driver.executeScript
      ('document.querySelector(\'a[href="/sortiment/brod-och-kakor"]\').scrollIntoView()');
    let breadAndCookies = await driver.findElement
      (by.css('a[href="/sortiment/brod-och-kakor"]'));
    await breadAndCookies.click();
  });

  this.When(/^click on the sub\-category Bröd$/, async function () {
    await driver.wait(until.elementsLocated
      (by.css('a[href="/sortiment/brod-och-kakor/brod"]'), 10000))
    let breadLink = await driver.findElement
      (by.css('a[href="/sortiment/brod-och-kakor/brod"]'));
    await driver.executeScript
      ('document.querySelector(\'a[href="/sortiment/brod-och-kakor/brod"]\').scrollIntoView()');
    await slowDown();
    await breadLink.click();

  });

  this.Then(/^I should be directed to the Bröd category page$/, async function () {

    let h2Text;
    while (h2Text !== 'Bröd') {
      h2Text = await (await driver.findElement
        (By.css('h2'))).getText();
      await driver.sleep(500);
    }
  });
}