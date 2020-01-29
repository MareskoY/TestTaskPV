const base_page = require('../pages/base_page');
const data = require('../data/data');

const LoginPage = function (driver) {
    let Page = new base_page(driver);

    this.loginProcess = async (login, password) => {
        await driver.get(data.Url.startPage);
        await Page.openPageWaiter(data.Url.loginPage);
        await driver.sleep(1500);
        await Page.write(data.Xpath.LoginPage.loginXpath,login );
        await Page.write(data.Xpath.LoginPage.passwordXpath,password );
        await Page.click(data.Xpath.LoginPage.submitBtnXpath);
    }
};

module.exports = LoginPage;
