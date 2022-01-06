module.exports = function () {

  this.When(/^the user clicks on a product$/, async function () {

    let frontPageProduct = await driver.findElement(By.css('img.resized-image'));
    await frontPageProduct.click();
  })

  this.Then(/^the user should be shown an overview of the product and different tabs$/, async function () {

    await driver.sleep(5000);
    let h1Text;

    h1Text = await (await driver.findElement(By.css('.product-detail-title'))).getText();
    expect(h1Text).to.not.equal(null);

  });

  this.Then(/^the user clicks the other info-tab to view information about the product$/, async function () {

    let otherInfoTab = await driver.findElement(By.css('div[ax-analytics2-action="ProductPage_ProductInfo_OtherInfo"]'));
    await otherInfoTab.click();
    await driver.sleep(3000);

  })
}