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

function deleteItem(event) {
  console.log(event);
  let elementId = event.target.id;
  console.log("The id is ", elementId);
}

function hello() {
  array = JSON.parse(localStorage.getItem("admin"));
  console.log(array);
  btable = document.getElementById("btable");

  tr = createElement("div", "tr", "tr");

  ul = createElement("div", "ull", "ull");
  p = `<div class="ullist>
    <li>Products</li>
    <li>DESC</li>
    <li>QTY</li>
  
    <li>Action</li>
    </div>  `;
  ul.innerHTML = p;
  btable.appendChild(ul);

  data = createElement("div", "data", "data");
  del = createElement("button", "del");
  edit = createElement("button", "edit");
  for (i = 0; i < array.length; i++) {
    t =
      ` <div class="bull">
    <li>` +
      array[i].product +
      `</li>
    <li>` +
      array[i].desc +
      `</li>
    <li>` +
      array[i].qty +
      `</li>
  
       
  
        </div>
    
    `;
    tr.innerHTML += t;

    del.innerHTML = "DELETE";
    edit.innerHTML = "EDIT";
    del.id = i;
    tr.id = i;
    edit.setAttribute("class", i);

    tr.appendChild(del);
    tr.appendChild(edit);

    data.appendChild(tr);
    btable.appendChild(data);
  }
}
function hell() {
  console.log("i=", i);
}

function remove() {
  while (btable.hasChildNodes()) {
    btable.removeChild(btable.firstChild);
  }
}

function myFunction(event) {
  num = event.target.id;
  num1 = event.target.classList.value;

  if (num == "") {
    array.splice(num1, 1);
    console.log("num1", num1);

    console.log(array[num1].product);
    document.getElementById("product").value = array[num1].product;
    document.getElementById("desc").value = array[num1].desc;
    document.getElementById("qty").value = array[num1].qty;
    document.getElementById("price").value = array[num1].price;
    localStorage.setItem("admin", JSON.stringify(array));

    remove();
    hello();
  } else {
    array = JSON.parse(localStorage.getItem("admin"));
    array.splice(num, 1);
    localStorage.setItem("admin", JSON.stringify(array));
    remove();
    hello();
  }
}
