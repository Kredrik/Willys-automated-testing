module.exports = function () {

  this.When(/^the user clicks on a product$/, async function () {

    let veckansVarorImg = await driver.findElement(By.css('img.resized-image'));
    await veckansVarorImg.click();
  })

  this.Then(/^the user should be shown an overview of the product and different tabs$/, async function () {

    await driver.sleep(5000);

    let h1Text;
    while (h1Text !== 'Majskyckling Hel Sverige') {
      h1Text = await (await driver.findElement(By.css('.product-detail-title'))).getText();
      await driver.sleep(100);
    }

  })

  this.Then(/^the user clicks the övrigt-tab to view information about the product$/, async function () {

    let allTabs = await driver.findElement(By.css('div[ax-analytics2-action="ProductPage_ProductInfo_OtherInfo"]'));
    await allTabs.click();
    await driver.sleep(3000);

  })
}