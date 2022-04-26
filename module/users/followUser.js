// TODO
// Проверить текущую подписку.
// Если модель подписанна на пользователя, то ничего не делать

const getCookies = require("../cookies/getCookies");
const getHtml = require("../getHtml");

async function followUser(username, url) {
  const cookies = await getCookies(
    "https://rt.bongacams25.com/login",
    "BernicePeters",
    "sWhnnj6n!3DQKRZ"
  );
  const html = getHtml(
    `${url}profile/${username}`,
    cookies,
    false,
    false,
    false,
    true
  );
  return;
}

const start = async function () {
  const members = [
    {
      username: "Opel0707",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Hshshjajjxh",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Marel3232",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Fhvfgggfg456",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Hhstyhhfed",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Sss115555",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Trewor8",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Jugcd5yuba16",
      badge: "member_free",
      modelHref: "-ANN-",
    },
  ];

  for (const [i, value] of members.entries()) {
    await followUser(value.username, "https://ru.bongamodels.com/");
  }

  return;
};

start();
