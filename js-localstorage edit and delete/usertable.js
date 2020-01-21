function usertab() {
  if (localStorage.getItem("admin") == null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem("admin"));
  }

  console.log(array);
  btable = document.getElementById("btable");

  data = createElement("div", "data", "data");
  tr = createElement("div", "tr", "tr");
  blockk = createElement("div", "blockk", "blockk");
  blockk2 = createElement("div", "blockk2", "blockk2");
  bu1 = createElement("button", "bu1", "bu1");
  bu1.innerHTML = "Logout";
  bu1.addEventListener("click", logoutt);
  bu2 = createElement("button", "bu2", "bu2");
  bu2.innerHTML = "Cart";
  bu2.addEventListener("click", cart);

  he = createElement("div", "he", "he");
  he.innerHTML = "PRODUCT LIST";
  blockk.appendChild(he);
  blockk2.appendChild(bu2);
  blockk2.appendChild(bu1);

  blockk.appendChild(blockk2);
  data.appendChild(blockk);
  head = createElement("div", "head", "head");
  t = `
  <h3>Product</h3>
  <h3>Desc</h3>
  <h3>Qty</h3>
  <h3>Price</h3>
  <h3>Image</h3>
  `;
  head.innerHTML = t;
  data.appendChild(head);

  var tableData = array
    .map(
      (book, i) =>
        `
        <div class="trclass">
          <h4>${book.product}</h4>
          <h4>${book.desc}</h4>
          <h4>${book.qty}</h4>
          <h4>${book.price}</h4>
          <h4><img src=${book.path} class="pulki"></h4>
          <h4><button onclick="add(${i})" class="de">Add</button></h4>
         
         
          </div>
      `
    )
    .join("<br>");

  tr.innerHTML = tableData;

  data.appendChild(tr);

  btable.appendChild(data);
}
var openFile = function(event) {
  console.log("hell");
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function() {
    var dataURL = reader.result;
    var output = document.getElementById("output");
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};
function prin() {
  window.print();
}

function add(i) {
  code = 0;
  console.log(i);
  if (localStorage.getItem("cart") == null) {
    a = [];
  } else {
    a = JSON.parse(localStorage.getItem("cart"));
  }
  if (localStorage.getItem("admin") == null) {
    b = [];
  } else {
    b = JSON.parse(localStorage.getItem("admin"));
  }

  product = b[i].product;
  desc = b[i].desc;
  qty = b[i].qty;
  price = b[i].price;
  path = b[i].path;
  for (i = 0; i < a.length; i++) {
    if (
      product == a[i].product &&
      desc == a[i].desc &&
      qty == a[i].qty &&
      price == a[i].price &&
      path == a[i].path
    ) {
      code = 1;
    }
  }

  if (code == 0) {
    a.push({
      product: product,
      desc: desc,
      qty: qty,
      price: price,
      path: path
    });
    localStorage.setItem("cart", JSON.stringify(a));
    alert("Added to cart!");
  } else {
    alert("already exist");
  }
}
function cart() {
  window.location.replace("cart.html");
}
function cart1() {
  if (localStorage.getItem("cart") == null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem("cart"));
  }

  btable = document.getElementById("btable");

  data = createElement("div", "data", "data");
  tr = createElement("div", "tr", "tr");
  blockk = createElement("div", "blockk", "blockk");
  blockk2 = createElement("div", "blockk2", "blockk2");
  bu1 = createElement("button", "bu1", "bu1");
  bu1.innerHTML = "Logout";
  bu1.addEventListener("click", logouttt);

  bu3 = createElement("button", "bu3", "bu3");
  bu3.innerHTML = "Print";
  bu3.addEventListener("click", cart2);

  he = createElement("div", "he", "he");
  he.innerHTML = "PRODUCT LIST";
  blockk.appendChild(he);

  blockk2.appendChild(bu1);
  blockk2.appendChild(bu3);
  blockk.appendChild(blockk2);
  data.appendChild(blockk);
  head = createElement("div", "head", "head");
  t = `
  <h3>Product</h3>
  <h3>Desc</h3>
  <h3>Qty</h3>
  <h3>Price</h3>
  <h3>Image</h3>
  `;
  head.innerHTML = t;
  data.appendChild(head);

  var tableData = array
    .map(
      (book, i) =>
        `
        <div class="trclass">
          <h4>${book.product}</h4>
          <h4>${book.desc}</h4>
          <h4>${book.qty}</h4>
          <h4>${book.price}</h4>
          <h4><img src=${book.path} class="pulki"></h4>
          <h4><button onclick="dell(${i})" class="de">Delet</button></h4>
          </div>
      `
    )
    .join("<br>");

  tr.innerHTML = tableData;

  total = createElement("div", "total", "total");
  tu = createElement("div", "tu", "tu");
  tot = createElement("h3", "tot", "tot");
  tot.innerHTML = "Total:";
  totprice = 0.0;
  for (i = 0; i < array.length; i++) {
    totprice = totprice + parseInt(array[i].price);
    console.log("priceof cart1", totprice);
  }
  tu.innerHTML = totprice;
  total.appendChild(tot);
  total.appendChild(tu);

  data.appendChild(tr);
  data.appendChild(total);
  btable.appendChild(data);
}
if (localStorage.getItem("cart") == null) {
  array = [];
} else {
  array = JSON.parse(localStorage.getItem("cart"));
}
resultt = [];
for (i = 0; i < array.length; i++) {
  var data = {
    product: array[i].product,
    desc: array[i].desc,
    qty: array[i].qty,
    price: array[i].price
  };

  resultt.push(Object.assign({}, data));
}
console.log("result1", resultt);
var header = createHeaders(["product", "desc", "qty", "price"]);

function createHeaders(keys) {
  console.log("result2", resultt);
  console.log("keys", keys);
  var result = [];
  for (var i = 0; i < keys.length; i += 1) {
    result.push({
      id: keys[i],
      name: keys[i],
      prompt: keys[i],
      width: 65,
      align: "center",
      padding: 0
    });
  }
  console.log("header", result);
  return result;
}

function save() {
  var p = f();
  console.log("p", p);
  var doc = new jsPDF();

  doc.text(5, 5, "CartBill");
  doc.table(10, 10, resultt, header);

  doc.text(160, 160, "total:" + p);

  doc.save();
}
function cart2() {
  save();
}
function f() {
  if (localStorage.getItem("cart") == null) {
    array = [];
  } else {
    console.log("hifi");
    array = JSON.parse(localStorage.getItem("cart"));
  }
  totprice = 0.0;
  for (i = 0; i < array.length; i++) {
    totprice = totprice + parseInt(array[i].price);
  }
  console.log("price", totprice);
  return totprice;
}
function dell(i) {
  console.log("delete");

  array1 = JSON.parse(localStorage.getItem("cart"));

  array1.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(array1));
  remove();
  cart1();
}
function logoutt() {
  var r = confirm("Logout???");
  if (r == true) {
    window.location.replace("main.html");
  } else {
    window.location.replace("usertable.html");
  }
}
function logouttt() {
  var r = confirm("Logout???");
  if (r == true) {
    window.location.replace("main.html");
  } else {
    window.location.replace("cart.html");
  }
}
