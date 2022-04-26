const getCookies = require("../cookies/getCookies");
const getHtml = require("../getHtml");

const start = async function () {
  const cookies = await getCookies(
    "https://rt.bongacams25.com/login",
    "BernicePeters",
    "sWhnnj6n!3DQKRZ"
  );

  const members = [
    {
      username: "Opel0707",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    // {
    //   username: "Hshshjajjxh",
    //   badge: "member_free",
    //   modelHref: "-ANN-",
    // },
    // {
    //   username: "Marel3232",
    //   badge: "member_free",
    //   modelHref: "-ANN-",
    // },
    // {
    //   username: "Fhvfgggfg456",
    //   badge: "member_free",
    //   modelHref: "-ANN-",
    // },
    // {
    //   username: "Hhstyhhfed",
    //   badge: "member_free",
    //   modelHref: "-ANN-",
    // },
    // {
    //   username: "Sss115555",
    //   badge: "member_free",
    //   modelHref: "-ANN-",
    // },
    // {
    //   username: "Trewor8",
    //   badge: "member_free",
    //   modelHref: "-ANN-",
    // },
    // {
    //   username: "Jugcd5yuba16",
    //   badge: "member_free",
    //   modelHref: "-ANN-",
    // },
  ];

  const messages = [
    "I love the way you kiss me especially when you kiss me there!",
    "I want to get naked with you right now.",
    "Say my name when you do that!",
    "I love you so much. Can you feel it?",
    "Do you like the way that feels?",
    "I love feeling your strong arms when you're on top of me. I love your muscles!",
    "Use your mouth on me.",
    "I love the things you do with your tongue.",
    "You're so damn gorgeous.",
    " What's that thing you do with your hand? I adore that!",
    " Want to see what I really want? Come closer",
    " Strip for me, honey. Slow. I want to savor every inch of you",
    " Do you like the way that looks?",
    " I'm going to control you tonight.",
    " Use me as your toy.",
    " Tell me what you want.",
  ];

  for (const [i, value] of members.entries()) {
    const message = messages[Math.floor(Math.random() * messages.length)];

    getHtml(
      "https://ru.bongamodels.com/im/all",
      cookies,
      false,
      false,
      false,
      false,
      message,
      value.username
    ).then(console.log(`Сообщение отправлено пользователю ${value.username}`));
  }

  return;
};

start();
