function signin() {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;
  let list = JSON.parse(localStorage.getItem("data"));
  flag = 0;
  count = 0;
  for (i = 0; i < list.length; i++) {
    var x = list[i].username;
    var y = list[i].password;
    if (username == x && password == y) {
      flag = 1;
      if (list[i].usertype == "admin") {
        count = 1;
      }
    }
  }
  if (flag == 0) {
    alert("Invalid Credentials");
  } else {
    alert("successful");
    if (count == 1) {
      window.location.replace("index.html");
    } else {
      window.location.replace("usertable.html");
    }
  }
}
