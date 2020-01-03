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
j = 24;

var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=rainbow&limit=24&offset=0`;

console.log(url);
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
      thumbs.appendChild(bull1);
      body.appendChild(thumbs);
    });
  });
offset = 25;
window.onscroll = function(ev) {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    console.log(offset);

    var keyword = document.getElementById("searchInput");
    if (keyword == undefined) {
      var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=rainbow&limit=24&offset=${offset}`;
    } else {
      var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${keyword}&limit=24&offset=${offset}`;
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
          thumbs.appendChild(bull1);
          body.appendChild(thumbs);
        });
      });
    offset += 25;
  }
};
document.addEventListener("click", onclick);
function onclick() {
  while (thumbs.hasChildNodes()) {
    thumbs.removeChild(thumbs.firstChild);
  }

  offset = 50;
  var keyword = document.getElementById("searchInput").value;
  var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${keyword}&limit=24&offset=${offset}`;

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
        thumbs.appendChild(bull1);
        body.appendChild(thumbs);
      });
    });
}
