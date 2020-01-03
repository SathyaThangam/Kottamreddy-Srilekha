function signup() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (localStorage.getItem("newyear") == null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem("newyear"));
  }
  //   console.log(username, password);
  let code = 0;
  for (i = 0; i < array.length; i++) {
    if (email == array[i].email) {
      code = 1;
    }
  }
  if (code == 0) {
    array.push({ email: email, password: password });
    localStorage.setItem("newyear", JSON.stringify(array));
    alert("Signup Successful!");
  } else {
    alert("Signup unsuccessful****");
  }
}
function signin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let list = JSON.parse(localStorage.getItem("newyear"));
  let flag = 0;
  for (i = 0; i < list.length; i++) {
    var x = list[i].email;
    var y = list[i].password;
    if (email == x && password == y) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    alert("unscuccessful");
  } else {
    alert("successful");
  }
}
