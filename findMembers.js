const getCookies = require("./module/cookies/getCookies");
const deleteDublicateJson = require("./module/json/deleteDublicateJson");
const getHtml = require("./module/getHtml");
const getTopModels = require("./module/getTopModels");
const getUsername = require("./module/users/getUsername");
const saveJson = require("./module/json/saveJson");
const saveUsers = require("./module/firebase/saveUsers");

const url = "https://rt.bongacams25.com";

// Список мембров на стриме
// getHtml("https://rt.bongacams26.com/-Ange1ok-/", true, true).then(content => {
//     return getUsername(content)
//     }).then(result => {
//         console.log(result)
// })

// Ссылки на стримы с первой страницы
// getHtml(url, true, false, false).then(content => {
//             return getTopModels(content, url)
//         }).then(result => {
//             console.log(result)
// })

const start = async function () {
  //Авторизация как пользователь
  const cookies = await getCookies(
    "https://rt.bongacams25.com/login",
    "vinbongun",
    "pvzXbFJ8lNIB"
  );
  console.log("Авторизованы и получены cookies");

  const allMembers = [];
  // await new Promise((r) => setTimeout(r, 1000)); //Ожидание в 1 секунду
  const mainPageHtml = await getHtml(url, cookies, false, false, false); //Получить html главной страницы сайта

  const streamUrls = await getTopModels(mainPageHtml, url); //Список ссылок на топ трансляций
  console.log("Получены ссылки на топ стримы");
  const streamUrlsBULK = [{ href: "https://rt.bongacams25.com/eror-202" }];

  for (const [i, value] of streamUrlsBULK.entries()) {
    const streamPageHtml = await getHtml(
      value.href,
      cookies,
      false,
      true,
      false
    ); //Получить html страницы трансляции
    const members = await getUsername(streamPageHtml); // Список пользователей на трянсляции
    allMembers.push(members);
    saveUsers(members);
    console.log(
      "Обработана страница № " + (i + 1) + " из " + streamUrlsBULK.length
    );
  }

  // //Объединить всех пользователей в один массив
  // const allMembersConcat = [].concat(...allMembers);

  // //Удалить дубли пользователей в массиве
  // const result = await deleteDublicateJson(allMembersConcat);

  // //Сохранить список пользователей в username.json
  // saveJson(result, "username");
};

// Вызвать асинхронную функцию
start();
