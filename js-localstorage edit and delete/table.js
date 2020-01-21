function createElement(element, classname, idname) {
  var created = document.createElement(element);
  if (classname != undefined) {
    created.className += classname;
  }
  if (idname != undefined) {
    created.id = idname;
  }
  return created;
}

function hello() {
  array = JSON.parse(localStorage.getItem("admin"));
  console.log(array);
  btable = document.getElementById("btable");

  data = createElement("div", "data", "data");
  tr = createElement("div", "tr", "tr");
  he = createElement("div", "he", "he");
  he.innerHTML = "PRODUCT LIST";
  data.appendChild(he);
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
          <h4><button onclick="del(${i})" class="de">Delete</button></h4>
          <h4><button onclick="edi(${i})" id=${i} class="ed">Edit</button></h4>
         
          </div>
      `
    )
    .join("<br>");

  tr.innerHTML = tableData;
  data.appendChild(tr);
  btable.appendChild(data);
}

function del(i) {
  c = 0;
  console.log("delete");
  index = 0;
  array = JSON.parse(localStorage.getItem("admin"));
  p = array[i].product;
  q = array[i].desc;
  r = array[i].qty;
  s = array[i].price;
  console.log("array[i]", p, q, r, s);

  array.splice(i, 1);
  localStorage.setItem("admin", JSON.stringify(array));
  remove();
  hello();

  cart = JSON.parse(localStorage.getItem("cart"));
  for (i = 0; i < cart.length; i++) {
    if (
      cart[i].product == p &&
      cart[i].desc == q &&
      cart[i].qty == r &&
      cart[i].price
    ) {
      c = 1;
      index = i;
    }
  }
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}
function edi(i) {
  array = JSON.parse(localStorage.getItem("admin"));
  array[i].uid = "world";
  localStorage.setItem("admin", JSON.stringify(array));
  window.location.replace("index.html");
}

function remove() {
  while (btable.hasChildNodes()) {
    btable.removeChild(btable.firstChild);
  }
}
