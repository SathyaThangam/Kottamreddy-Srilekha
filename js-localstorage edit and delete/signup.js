function onl() {
  if (localStorage.getItem("data") == null) {
    m = [];
  } else {
    m = JSON.parse(localStorage.getItem("data"));
  }
  for (i = 0; i < m.length; i++) {
    if (m[i].usertype == "admin") {
      document.getElementById("auser").style.display = "none";
    }
  }
}
function signup() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var usertype = document.getElementById("dropvalue").value;
  var uid = "hello";

  if (localStorage.getItem("data") == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
  }

  code1 = 0;

  for (i = 0; i < arr.length; i++) {
    if (
      username == arr[i].username &&
      email == arr[i].email &&
      password == arr[i].password &&
      usertype == arr[i].usertype
    ) {
      code1 = 1;
    }
  }

  if (code1 == 0) {
    arr.push({
      username: username,
      email: email,
      password: password,
      usertype: usertype
    });
    localStorage.setItem("data", JSON.stringify(arr));
    alert("Signed Up");
  } else {
    alert("Product already exist");
  }

  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
