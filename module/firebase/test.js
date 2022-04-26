var firebase = require("firebase-admin");
const saveUsers = require("./saveUsers");

var serviceAccount = require("./serviceAccountKey.json");

// firebase.initializeApp({
//   credential: firebase.credential.cert(serviceAccount),
//   databaseURL:
//     "https://joi-studio-default-rtdb.europe-west1.firebasedatabase.app",
// });

// var db = firebase.database();
// const dbRef = firebase.database().ref("users_All");

async function getHolidayingDinosaurs(day) {
  const snapshot = await firebase
    .database()
    .ref("users_All")
    .orderByChild("addDate")
    .startAt("1650572814631")
    .once("value");
  let holidaying = [];
  console.log(snapshot);
  snapshot.forEach((child) => {
    let val = child.val();
    if (val.vacationStart <= day) {
      holidaying.push(val);
    }
  });
  return holidaying;
}

// getHolidayingDinosaurs("2016-12-20").then((holidaying) =>
//   console.log(holidaying)
// );
const data = [
  {
    username: "TomRiddle-12",
    badge: "member_free",
    modelHref: "Chark_21",
    addDate: "2022-04-24T07:45:56.392Z",
  },
];
// Сохранение пользователей в базу firebase
saveUsers({
  Pedegre: {
    username: "Pedegre",
    badge: "member_free",
    modelHref: "Chark_21",
    addDate: "2022-04-24T07:45:56.392Z",
  },
});
