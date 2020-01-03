// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbN6_rfgl8LNZb6-NKTL34c0pQektm6WA",
  authDomain: "form-5c9cc.firebaseapp.com",
  databaseURL: "https://form-5c9cc.firebaseio.com",
  projectId: "form-5c9cc",
  storageBucket: "form-5c9cc.appspot.com",
  messagingSenderId: "4925530870",
  appId: "1:4925530870:web:7f4f5d574ee2fe7da202d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signup() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch(e => alert(e.message));
  alert("signed up");
}
function signin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var flag = 0;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/user-not-found") {
        alert("User not found");
        flag = 1;
      } else if (errorCode === "auth/wrong-password") {
        alert("Wrong password. Please try again");

        flag = 1;
      } else {
        alert(errorMessage);
        flag = 1;
      }

      console.log(flag);
      if (flag != 1) {
        alert("signedin");
      }
    });
  if (flag == 0) {
    alert("signedin");
  }
}
