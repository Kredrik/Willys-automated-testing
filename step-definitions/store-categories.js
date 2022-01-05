
module.exports = function () {

  this.When(/^The user click on the category Bröd & Kakor$/, async function () {

    let breadAndCookies = await driver.findElement(by.css('a[href="/sortiment/brod-och-kakor"]'));
    await breadAndCookies.click();
    await driver.wait(until.elementsLocated(by.css('a[href="/sortiment/brod-och-kakor/brod"]')), 10000);
  });

  this.When(/^click on the sub\-category Bröd$/, async function () {
    let breadLink = await driver.findElement(by.css('a[href="/sortiment/brod-och-kakor/brod"]'));
    await driver.sleep(3000);

    await driver.executeScript('document.querySelector(\'a[href="/sortiment/brod-och-kakor/brod"]\').scrollIntoView()');
    await breadLink.click();

  });

  this.Then(/^I should be directed to the Bröd category page$/, async function () {

    let h2Text;
    while (h2Text !== 'Bröd') {
      h2Text = await (await driver.findElement(By.css('h2'))).getText();
      await driver.sleep(100);
    }
    await driver.sleep(3000);
  });
  //let baguette;
}