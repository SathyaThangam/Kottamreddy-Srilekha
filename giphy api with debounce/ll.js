function main(inl) {
  var url = `http://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${inl}`;

  const x = [];
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(content => {
      content.data.forEach(gif => {
        console.log(content.data);
        console.log("Meta", content.meta);

        usernamee = document.createElement("div");
        usernamee = gif.title;
        console.log(usernamee);

        x.push(usernamee);
      });

      console.log(x);

      autocomplete(document.getElementById("myInput"), x);
    });
}

var input1 = document.getElementById("myInput");
const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

input1.addEventListener(
  "keydown",
  debounce(function() {
    word = document.getElementById("myInput").value;
    main(word);
    submit();
  }, 500)
);
input1.addEventListener(
  "keypress",
  debounce(function() {
    word = document.getElementById("myInput").value;
    main(word);
    submit();
  }, 500)
);

function autocomplete(inp, arr) {
  var currentFocus;

  inp.addEventListener("input", function(e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;

    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");

        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        b.addEventListener("click", function(e) {
          inp.value = this.getElementsByTagName("input")[0].value;
        });
        a.appendChild(b);
      }
    }
  });

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}

var offset = 0;
var bull = document.getElementById("bull");
function submit(w) {
  while (bull.hasChildNodes()) {
    bull.removeChild(bull.firstChild);
  }

  var keyword = document.getElementById("myInput").value;
  var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${keyword}&limit=24&offset=${offset}`;

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

  fetch(url)
    .then(response => response.json())
    .then(content => {
      content.data.forEach(gif => {
        console.log(content.data);
        console.log("Meta", content.meta);

        inner = createElement("div", "inner", "inner");
        wrapper = createElement("div", "img-wrapper", "img-wrapper");
        bull1 = createElement("div", "bull", "bull");
        let img = document.createElement("img");
        img.src = gif.images.downsized_large.url;

        inner.appendChild(img);
        wrapper.appendChild(inner);
        bull1.appendChild(wrapper);
        bull.appendChild(bull1);
      });
    });
  offset += 25;
}

inner.appendChild(img);
wrapper.appendChild(inner);
bull1.appendChild(wrapper);
bull.appendChild(bull1);
