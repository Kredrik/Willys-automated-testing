module.exports = function () {

  this.When(/^the user clicks on a product$/, async function () {

    let veckansVarorImg = await driver.findElement(By.css('img.resized-image'));
    await veckansVarorImg.click();
  })

  this.Then(/^the user should be shown an overview of the product$/, async function () {

    /*
    await driver.sleep(3000);
    let clickTabOvrigt = await driver.findElement(By.css('#tab-item-326'));
    await clickTabOvrigt.click();

    await driver.sleep(3000);



    
    let h1Text;
    while (h1Text !== 'Majskyckling Hel Sverige') {
      h1Text = await (await driver.findElement(By.css('h1'))).getText();
      await driver.sleep(100);
    }

    await driver.sleep(3000);
    */

  })

}