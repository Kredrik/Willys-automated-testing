module.exports = function () {

  this.When(/^the user clicks on a product$/, async function () {
    await driver.wait(until.elementsLocated
      (by.css('img.resized-image')));
    let frontPageProduct = await driver.findElement
      (By.css('img.resized-image'));
    await frontPageProduct.click();
  })

  this.Then(/^the user should be shown an overview of the product and different tabs$/, async function () {

    await driver.wait(until.elementsLocated
      (by.css('.product-detail-title')), 10000);

    let h1Text;
    h1Text = await (await driver.findElement
      (by.css('.product-detail-title'))).getText();
    expect(h1Text).to.not.equal(null);

  });

  this.Then(/^the user clicks the other info-tab to view other information about the product$/, async function () {

    await driver.wait(until.elementsLocated
      (by.css('div[ax-analytics2-action="ProductPage_ProductInfo_OtherInfo"]')), 10000);
    let otherInfoTab = await driver.findElement
      (by.css('div[ax-analytics2-action="ProductPage_ProductInfo_OtherInfo"]'));

    await otherInfoTab.click();
    await driver.wait(until.elementsLocated
      (by.css('div[class*="info-block storage"]')));
    let otherInfoText = await driver.findElement
      (by.css('div[class*="info-block storage"]')).getText();
    expect(otherInfoText).to.not.equal(null);
    await driver.sleep(5000);
  })
}