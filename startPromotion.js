const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const getCookies = require("./module/cookies/getCookies");
const getUsers = require("./module/firebase/getUsers");

/* TODO
  Получить логин и пароль модели из базы
  Написать автоматическую авторизацию модели на сайте
*/

const url = "https://rt.bongacams26.com";
const loginUrl = "https://rt.bongacams25.com/login";

const start = async function (modelName) {
  //Авторизация модели на сайте
  await getCookies(loginUrl, "mistresangel", "jvBhW!jcRn6RXhf", loginAsModel);

  //Взять из базы users_All до 1 000 пользователей и сохранить в userAll всех тех, у кого isFollowed = false
  const userAll = [
    {
      FADE55661: {
        badge: "member_platinum",
        modelHref: "XKimoraX",
      },
      vinbongun: {
        badge: "member_gold",
        modelHref: "-ANN-",
      },
    },
  ];

  const member = [];
};

const modelName = "sanny"; //Получить значение от пользователя

//Запуск асинхронной функции
start(modelName);
