const puppeteer = require("puppeteer");

module.exports = async function getCookies(
  url,
  username,
  password,
  loginAsModel
) {
  try {
    const browser = await puppeteer.launch({
      /**
       * Применим стандартный режим без пользовательского интерфейса (окно браузера не видно).
       */
      // devtools: true,
      // headless: false,
    });

    const page = await browser.newPage();
    //Содержимое страницы на всю ширину браузера
    await page.setViewport({ width: 0, height: 0 });
    await page.goto(url);

    //Закрытие окна "Вам точно есть 18+?"
    //Ожидаем загрузку окна "Вам точно есть 18+?"
    await page.waitForSelector(
      "#warning_popup > div > div > div.inner > div.button_block > a.mls_btn.bt30_green.agree.wl_green_btn.js-close_warning"
    );

    //Нажимаем на кнопку "Продолжить"
    const [button] = await page.$x("//a[contains(., 'Продолжить')]");
    if (button) {
      await button.click();
    }

    // Вставляем логин и пароль
    await page.type(`input[id=log_in_username]`, username, {
      delay: 20,
    });
    await page.type(`input[id=log_in_password]`, password, {
      delay: 20,
    });

    //Входит в аккаунт
    const [login] = await page.$x("//button[contains(., 'Логин')]"); //Кликает на кнопку "Логин"
    if (login) {
      await login.click();
    }

    if (loginAsModel) {
      //Ждем когда произойдет редирект
      await page.waitForSelector(".__ratings");
      var cookies = await page.cookies();
    } else {
      await page.waitForSelector(".member_avatar");
      var cookies = await page.cookies();
    }

    browser.close();
    console.log("Вошли в аккаунт " + username);

    return cookies;
  } catch (error) {}
};
