const {By, until} = require('selenium-webdriver');

waitTime = 150000;

 const Page = function (driver) {

     this.click = async (xpath) => {
         await driver.wait(until.elementLocated(By.xpath(xpath)), waitTime);
         await driver.findElement(By.xpath(xpath)).click();
     };

     this.openPageWaiter = async (url) => {
         await driver.wait(until.urlIs(url), waitTime);
     };

     this.write = async (xpath, text) => {
         await driver.wait(until.elementLocated(By.xpath(xpath)), waitTime);
         await driver.findElement(By.xpath(xpath)).sendKeys(text);
     };

     this.getExtShadowRoot = async (xpath) => {
         let shadowHost;
         await (shadowHost = driver.findElement(By.xpath(xpath)));
         return driver.executeScript("return arguments[0].shadowRoot", shadowHost);
     };

     this.findShadowDomElement = async (css) => {
         let shadowRoot;
         let element;
         await (shadowRoot = this.getExtShadowRoot('//*[@id="content"]/div[2]/pe-editor-canvas'));
         await shadowRoot.then(async (result) => {
             await (element = result.findElement(By.css(css)));

         });
         return element;
     }
};

module.exports = Page;
