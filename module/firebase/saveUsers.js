var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL:
    "https://joi-studio-default-rtdb.europe-west1.firebasedatabase.app",
});

// var db = firebase.database();
// const dbRef = firebase.database().ref();

module.exports = async function saveUsers(props, userName) {
  //   var usersRef = dbRef.child("users_All");
  //   usersRef.set({
  //     greg: {
  //       date_of_birth: "June 23, 1912",
  //       full_name: "Alan Turing",
  //     },
  //     gracehop: {
  //       date_of_birth: "December 9, 1906",
  //       full_name: "Grace Hopper",
  //     },
  //   });
  //   for (const iterator of props) {
  //     const usersRef = dbRef.child("users_All");
  //     usersRef.child(iterator).set({
  //       date_of_birth: "June 23, 1912",
  //       full_name: "Alan Turing",
  //     });
  //   }

  //   const usersRef = dbRef.child(`users_All/${userName}`);
  //   usersRef.set({
  //     username: userName,
  //     badge: badge,
  //     modelHref: modelHref,
  //     addDate: currentDate,
  //   });
  // const saveData = [
  //   {
  //     username: userName,
  //     badge: badge,
  //     modelHref: modelHref,
  //     addDate: currentDate,
  //   },
  // ];
  // console.log(saveData);

  firebase.database().ref(`users_All/${userName}`).set(props);

  console.log("Save users ", userName);
};
