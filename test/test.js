const base_page = require('../pages/base_page');
const login_page = require('../pages/login_page');
const data = require('../data/data');
const {Builder, By, until} = require('selenium-webdriver');
const waitTime = 150000;

describe('Test task', function() {
    let driver;
    let Page;
    let LoginPage;
    this.timeout(200000);

    before(() => {
        driver = new Builder().forBrowser('chrome').build();
        Page = new base_page(driver);
        LoginPage = new login_page(driver);
    });

    after(() =>{
        driver.quit();
    })

    it('login', async () => {
        LoginPage.loginProcess('aqa@payever.org','Aqacool123!');
        await Page.openPageWaiter(data.Url.profilePage);
    });

    it('choose profile', async () => {
        await Page.click(data.Xpath.ProfilePage.profileXpath);
        await Page.openPageWaiter(data.Url.homePage);
    });

    it('open Shop panel', async ()=> {
        await Page.click(data.Xpath.HomeMenuPage.menuAppsXpath);
        await Page.click(data.Xpath.HomeMenuPage.menuAppsShopXpath);
        await Page.openPageWaiter(data.Url.shopEditPage);
    });

    it('create new theme', async () => {
        await Page.click(data.Xpath.NavBar.theme);
        await Page.click(data.Xpath.ThemePage.addThemeXpath);
        await driver.wait(until.elementLocated(By.xpath(data.Xpath.AqaPage.editToolTextButtonXpath)), waitTime);
    });

    it('create new text Widget', async () => {
        await Page.click(data.Xpath.AqaPage.editToolTextButtonXpath);
    });

    it('fill in text Widget', async () => {
        const textWidget = await Page.findShadowDomElement(data.Css.AqaEditor.textWidget);
        await textWidget.click();
        await Page.write(data.Xpath.AqaPage.activeTextEl,'This test is completed!');
        const emptyArea = await Page.findShadowDomElement(data.Css.AqaEditor.emptyArea);
        await emptyArea.click();
    });

    it('close shop App', async () => {
        await Page.click(data.Xpath.NavBar.close);
        await Page.openPageWaiter(data.Url.homePage);
    });
});



