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
  bu1.addEventListener("click", logout);
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
    if (product == a[i].product) {
      console.log("product", product);
      console.log("a[i]product", a[i].product);
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
  bu1.addEventListener("click", logout);
  bu2 = createElement("button", "bu2", "bu2");
  bu2.innerHTML = "Cart";
  bu3 = createElement("button", "bu3", "bu3");
  bu3.innerHTML = "Print";
  bu3.addEventListener("click", cart2);

  he = createElement("div", "he", "he");
  he.innerHTML = "PRODUCT LIST";
  blockk.appendChild(he);
  blockk2.appendChild(bu2);
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
            <h4><button onclick="del(${i})" class="de">Delete</button></h4>
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
    console.log("price", totprice);
  }
  tu.innerHTML = totprice;
  total.appendChild(tot);
  total.appendChild(tu);

  data.appendChild(tr);
  data.appendChild(total);
  btable.appendChild(data);
}
function CreatePDF() {
  // create BytescoutPDF object instance
  var pdf = new BytescoutPDF();

  // set document properties: Title, subject, keywords, author name and creator name
  pdf.propertiesSet(
    "Sample Invoice",
    "Invoice #1234",
    "invoice, company, customer",
    "Document Author",
    "Document Creator"
  );

  // set page size
  pdf.pageSetSize(BytescoutPDF.Letter);

  // set portrait page orientation
  pdf.pageSetOrientation(BytescoutPDF.PORTRAIT);

  // add new page
  pdf.pageAdd();

  // add logo
  pdf.imageLoadFromUrl("logo.png");
  pdf.imagePlace(20, 20);

  // set font name
  pdf.fontSetName("Times-Roman");

  // add requisites
  pdf.fontSetStyle(true, false, false);
  pdf.fontSetSize(24);
  pdf.textAdd(450, 55, "INVOICE", 0);

  pdf.fontSetSize(12);
  pdf.textAdd(50, 90, "COMPANY NAME", 0);

  pdf.fontSetSize(11);
  pdf.fontSetStyle(false, false, false);
  pdf.textAdd(50, 120, "Address", 0);
  pdf.textAdd(50, 140, "Phone, fax", 0);
  pdf.textAdd(50, 160, "E-mail", 0);

  pdf.textAdd(400, 120, "DATE", 0);
  pdf.textAdd(400, 140, "INVOICE #", 0);
  pdf.textAdd(400, 160, "FOR", 0);

  pdf.textSetBoxPadding(3, 2, 2, 3);

  // draw table header
  pdf.graphicsDrawRectangle(50, 200, 520, 220);
  pdf.graphicsDrawLine(50, 220, 570, 220);
  pdf.textSetAlign(BytescoutPDF.CENTER);
  // add 'Description' column
  pdf.textSetBox(50, 200, 220, 20);
  pdf.textAddToBox("Description");
  pdf.graphicsDrawLine(270, 200, 270, 420);
  // add 'Quantity' column
  pdf.textSetBox(270, 200, 80, 20);
  pdf.textAddToBox("Quantity");
  pdf.graphicsDrawLine(350, 200, 350, 420);
  // add 'Price' column
  pdf.textSetBox(350, 200, 100, 20);
  pdf.textAddToBox("Price");
  pdf.graphicsDrawLine(450, 200, 450, 420);
  // add 'Amount' column
  pdf.textSetBox(450, 200, 120, 20);
  pdf.textAddToBox("Amount");

  pdf.textSetAlign(BytescoutPDF.LEFT);

  // fill table content
  for (var row = 0; row < array.length; row++) {
    pdf.textSetBox(50, 220 + row * 20, 220, 20);
    pdf.textAddToBox("ITEM " + row);
    pdf.graphicsDrawLine(50, 240 + row * 20, 570, 240 + row * 20);
  }

  // add signature
  pdf.textAdd(390, 470, "Signature", 0);
  pdf.graphicsDrawLine(450, 470, 570, 470);

  // return BytescoutPDF object instance
  return pdf;
}

function cart2() {
  var doc = new jsPDF();

  if (localStorage.getItem("cart") == null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem("cart"));
  }

  var doc = new jsPDF("p", "pt", "a4", true);
  doc.cellInitialize();
  btable = document.getElementById("btable");

  data = createElement("div", "data", "data");
  tr = createElement("div", "tr", "tr");
  blockk = createElement("div", "blockk", "blockk");
  blockk2 = createElement("div", "blockk2", "blockk2");
  bu1 = createElement("button", "bu1", "bu1");
  bu1.innerHTML = "Logout";
  bu1.addEventListener("click", logout);
  bu2 = createElement("button", "bu2", "bu2");
  bu2.innerHTML = "Cart";
  bu3 = createElement("button", "bu3", "bu3");
  bu3.innerHTML = "Print";
  bu3.addEventListener("click", cart2);

  he = createElement("div", "he", "he");
  he.innerHTML = "PRODUCT LIST";
  blockk.appendChild(he);
  blockk2.appendChild(bu2);
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
            <h4><button onclick="del(${i})" class="de">Delete</button></h4>
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
    console.log("price", totprice);
  }
  tu.innerHTML = totprice;
  total.appendChild(tot);
  total.appendChild(tu);

  data.appendChild(tr);
  data.appendChild(total);
  btable.appendChild(data);
}
