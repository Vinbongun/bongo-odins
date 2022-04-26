const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

module.exports = async function getHtml(
  url,
  cookies,
  isSkipPopup,
  isSelectAllUsers,
  isSelectTopModels,
  isFollowUser,
  sendText,
  username
) {
  const browser = await puppeteer.launch({
    /**
     * Применим стандартный режим без пользовательского интерфейса (окно браузера не видно).
     */
    // devtools: true,
    // headless: false,
  });

  const page = await browser.newPage();

  //Отложенный запуск скрипта: задержка от 1 до 8 секунд
  function generateRandom(minLimit = 1000, maxLimit = 8000) {
    let rand = Math.random() * (maxLimit - minLimit) + minLimit;
    console.log(rand);

    rand = Math.floor(rand);

    return rand;
  }

  // await page.waitForTimeout(generateRandom());

  //Содержимое страницы на всю ширину браузера
  await page.setViewport({ width: 0, height: 0 });

  await page.setCookie(...cookies);
  const cookiesSet = await page.cookies(url);

  await page.goto(url);

  if (isSkipPopup == true) {
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
  }

  if (isSelectAllUsers == true) {
    //Открывает вкладку со списком пользователей
    await Promise.all([await page.click("#bTabUsers")]);
    await page.waitForTimeout(1000);

    //Раскрываем весь список пользователей
    await Promise.all([await page.click(".more_users")]);

    await page.waitForTimeout(1000);
  }

  if (isSelectTopModels) {
    //Выбирает из выпадающего списка пункт "Самые популярные модели"
    await page.waitForSelector(".bcf_input_wrp");
    await page.waitForTimeout(3000);
    const [dropdown] = await page.$x(
      "//input[contains(., 'Наиболее популярные чаты')]"
    );
    if (dropdown) {
      await dropdown.click();
    }

    await page.waitForSelector(".bcsb_dropdown");
  }

  if (isFollowUser) {
    //Нажимает на кнопку "Подписаться"
    await Promise.all([await page.click(".frw_btn")]);
    console.log(`Подписались на пользователя`);
  }

  if (sendText) {
    await page.click(".bmb_inner"); //Кликает на кнопку "Новая беседа"
    await page.waitForSelector(".popup_overlay"); //Ждет загрузки popup
    await page.waitForTimeout(1000);

    await page.type("input[class=bmsb_input]", username, {
      delay: 20,
    }); // Вводит username пользователя

    //Выбираем пользователя из выпадающего списка
    await page.waitForSelector(".bmsb_list"); //Ожидает появления выпадающего списка пользователей
    const example = await page.$$("li[class=bmsb_item]");
    await example[0].click();

    await page.type("textarea[name=message]", sendText, {
      delay: 20,
    }); // Вводит сообщение для пользователя
    await page.waitForTimeout(1000);

    //Отправляем сообщение
    const [button] = await page.$x("//span[contains(., 'Подтвердить')]"); //Кликает на кнопку "Подтвердить"
    if (button) {
      await button.click();
    }
    console.log(`Сообщение отправленно пользователю ${username}`);
  }
  const content = await page.content();
  const $ = cheerio.load(content); //Инициализация cheerio

  browser.close();
  return content;
};
