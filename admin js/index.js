function add() {
  var product = document.getElementById("product").value;
  var desc = document.getElementById("desc").value;
  var qty = document.getElementById("qty").value;
  var price = document.getElementById("price").value;

  if (localStorage.getItem("admin") == null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem("admin"));
  }
  //   console.log(username, password);
  let code = 0;
  for (i = 0; i < array.length; i++) {
    if (
      product == array[i].product &&
      desc == array[i].desc &&
      qty == array[i].qty &&
      price == array[i].price
    ) {
      code = 1;
    }
  }
  if (code == 0) {
    array.push({
      product: product,
      desc: desc,
      qty: qty,
      price: price
    });
    localStorage.setItem("admin", JSON.stringify(array));
    alert("Success beta!!!");
    remove();
    hello();
  } else {
    alert("Product already exist");
  }
  array.product = "";
  array.desc = "";
  array.qty = "";
  array.price = "";
}
