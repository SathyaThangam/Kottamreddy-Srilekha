function complete() {
  if (localStorage.getItem("admin") == null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem("admin"));
  }

  for (i = 0; i < array.length; i++) {
    if (array[i].uid == "world") {
      document.getElementById("product").value = array[i].product;
      document.getElementById("desc").value = array[i].desc;
      document.getElementById("qty").value = array[i].qty;
      document.getElementById("price").value = array[i].price;

      document.getElementById("output").src = array[i].path;
    }
  }
}
var openFile = function(event) {
  var reader = new FileReader();

  reader.onload = function() {
    var dataURL = reader.result;

    var output = document.getElementById("output");
    output.src = dataURL;
  };

  reader.readAsDataURL(document.getElementById("full").files[0]);
};

function add1() {
  var product = document.getElementById("product").value;
  var desc = document.getElementById("desc").value;
  var qty = document.getElementById("qty").value;
  var price = document.getElementById("price").value;
  var path = document.getElementById("output").src;
  var uid = "hello";
  var input = document.getElementById("full");
  console.log(input);
  var reader = new FileReader();

  reader.onload = function() {
    var dataURL = reader.result;

    var output = document.getElementById("output");
    output.src = dataURL;
  };
  console.log("output", output.src);
  if (localStorage.getItem("admin") == null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem("admin"));
  }

  code1 = 0;
  code2 = 0;
  for (i = 0; i < array.length; i++) {
    if (
      product == array[i].product &&
      desc == array[i].desc &&
      qty == array[i].qty &&
      price == array[i].price &&
      path == array[i].path
    ) {
      code1 = 1;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i].uid == "world") {
      code2 = 1;
    }
  }
  if (code1 == 0 && code2 == 0) {
    array.push({
      product: product,
      desc: desc,
      qty: qty,
      price: price,
      uid: uid,
      path: output.src
    });
    localStorage.setItem("admin", JSON.stringify(array));
    alert("Success beta!!!");
  } else {
    if (code1 == 0 && code2 == 1) {
      for (i = 0; i < array.length; i++) {
        if (array[i].uid == "world") {
          array[i].product = document.getElementById("product").value;
          array[i].desc = document.getElementById("desc").value;
          array[i].qty = document.getElementById("qty").value;
          array[i].price = document.getElementById("price").value;
          array[i].path = document.getElementById("output").src;

          array[i].uid = "hello";
          localStorage.setItem("admin", JSON.stringify(array));
        }
      }
    } else {
      alert("Product already exist");
    }
  }
  document.getElementById("product").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
  document.getElementById("output").src = "";
}
function logout() {
  var r = confirm("Logout???");
  if (r == true) {
    window.location.replace("main.html");
  } else {
    window.location.replace("index.html");
  }
}
