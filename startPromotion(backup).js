const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

/* TODO
  Получить логин и пароль модели из базы
  Написать автоматическую авторизацию модели на сайте
*/

const url = "https://rt.bongacams26.com";

const start = async function (modelName) {
  const browser = await puppeteer.launch({
    // devtools: true,
    // headless: false,
  });

  const page = await browser.newPage();
  //Содержимое страницы на всю ширину браузера
  await page.setViewport({ width: 0, height: 0 });

  //Авторизация модели на сайте
  const browserAuth = async function () {
    await page.goto(url);

    //Модуль авторизации
    //Получить логин и пароль по параметру name в базе model_accounts
    const model_accounts = {
      name: "sanny",
      login: "sanny_login",
      password: "sanny_pswd"
    };

    //Вставка логина и пароль
    const modelLogin = model_accounts.login;
    const modelPassword = model_accounts.password;

    //Сохранить куки
    const cookiesSet = await page.cookies(url);
    await page.close();
  };
  browserAuth();

  //Проверка куки
  //Если на странице есть окно "Вам точно есть 18+"
  await page.goto(url);
  await page.waitForTimeout(700);
  const [isWarning_18] = await page.$x("//a[contains(., 'Продолжить')]");

  //Заново авторизоваться и получить куки
  if (isWarning_18) {
    browserAuth();
  }

  //Взять из базы users_All до 1 000 пользователей и сохранить в userAll всех тех, у кого isFollowed = false
  const userAll = [];

  follo;
};

const modelName = "sanny"; //Получить значение от пользователя

//Запуск асинхронной функции
start(modelName);
