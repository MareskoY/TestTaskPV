const Xpath = {
    LoginPage: {
        loginXpath: '//*[@qa-id="control.email"]',
        passwordXpath: '//*[@qa-id="control.plainPassword"]',
        submitBtnXpath: '//*[@type="submit"]',
    },
    ProfilePage: {
        profileXpath: '//div[2]/div/div[1]/h2[text()="AA"]',
    },
    HomeMenuPage:{
        menuAppsXpath: '//span[text()="Apps"]',
        menuAppsShopXpath: '//*[@data-pe-app="shop"]',
    },
    NavBar:{
        close: '//button[@data-pe-navbar-link="close"]',
        theme: '//button[@data-pe-navbar-link="themes"]',
    },
    ThemePage:{
        addThemeXpath: '//mat-card-content',
    },
    AqaPage:{
        editToolTextButtonXpath: '//button[@pe-qa-builder="text"]',
        shadowDom: '//*[@id="content"]/div[2]/pe-editor-canvas',
        activeTextEl: '//*[@id="content"]/div[2]/pe-editor-text-decorator/pe-text-editor/div',
    }

};

const Css ={
    AqaEditor:{
        textWidget: "div > pe-editor-element-anchors > svg",
        emptyArea: "div > div ",
    }
}

const Url ={
    startPage: 'https://commerceos.staging.devpayever.com/',
    loginPage: 'https://commerceos.staging.devpayever.com/entry/login',
    profilePage: 'https://commerceos.staging.devpayever.com/switcher/profile',
    homePage: 'https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/info/overview',
    shopEditPage: 'https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/builder/shop/6c082a7a-5446-4f25-a3bd-9d080cf54921/builder/editor/home?themeType=application&theme=6c082a7a-5446-4f25-a3bd-9d080cf54921&channelSet=a644f50e-b992-433a-950e-c66dc247c80e&backUrl=&getBusinessThemeByAppTheme=true'
};

module.exports = {
    Xpath,
    Url,
    Css,
};