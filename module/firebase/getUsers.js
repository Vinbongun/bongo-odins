var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL:
    "https://joi-studio-default-rtdb.europe-west1.firebasedatabase.app",
});

var db = firebase.database();
const dbRef = firebase.database().ref("users_All");

module.exports = async function getUsers(howManyUsers) {
  //   firebase
  //     .database()
  //     .ref("users_All/-LIGHT-")
  //     .on("value", (snapshot) => {
  //       console.log(snapshot.val());
  //     });
  //   dbRef
  //     .orderByChild("modelHref")
  //     .startAt("SweetPupsa")
  //     .on("child_added", (snap) => {
  //       console.log(snap.val())
  //     });

  // Выбрать всех пользователей добавленных не позднее чем 30 минут
  // 30 минут в формате UTC = 84600000
  const currentDate = new Date();
  const thirtyMinutesAgo = new Date(currentDate - 84600000);
  const stringDate = thirtyMinutesAgo.toString();
  //   const resultUsers = firebase
  //     .database()
  //     .ref()
  //     .child("users_All")
  //     .orderByChild("addDate")
  //     .startAt("1650572814681")
  //     .endAt("1650744293000");

  //   const resultUsers = dbRef
  //     .orderByChild("addDate")
  //     .startAt("1650572814681")
  //     .endAt("1650744293000")
  //     .on("child_added", function (snapshot) {
  //       console.log("got the data!", snapshot);
  //     });

  const resultUsers = dbRef.collection("users_All", (ref) =>
    ref.where("addDate", ">", stringDate).where("addDate", "<", currentDate)
  );

  console.log(resultUsers);

  return stringDate;
};
