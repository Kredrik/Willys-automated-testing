module.exports = function () {

  this.When(/^the user has selected products in the cart$/, async function () {

    let veckansVarorLink = await driver.findElement(By.css('button[class="ax-product-puff-image selenium--product-puff-img layout-align-center"]'));
    await veckansVarorLink.click();



  })

}