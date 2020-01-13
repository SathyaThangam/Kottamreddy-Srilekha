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
  var tableData = array
    .map(
      (book, i) =>
        `
        <tr>
          <td>${book.product}</td>
          <td>${book.desc}</td>
          <td>${book.qty}</td>
          <td>${book.price}</td>
          <td><button onclick="del(${i})">Delete</button></td>
          <td><button onclick="edi(${i})" id=${i}>Edit</button></td>
          </tr>
      `
    )
    .join("<br>");

  tr.innerHTML = tableData;
  data.appendChild(tr);
  btable.appendChild(data);
}
function del(i) {
  console.log("delete");
  array = JSON.parse(localStorage.getItem("admin"));
  array.splice(i, 1);
  localStorage.setItem("admin", JSON.stringify(array));
  remove();
  hello();
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
