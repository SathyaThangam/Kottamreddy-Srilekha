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
offset = 0;
document.addEventListener("DOMContentLoaded", main);
function main() {
  var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&limit=24&offset=${offset}`;

  //x.giphy.com/v1/stories/trending?api_key=3eFQvabDx69SMoOemSPiYfh9FY0nzO9x&sort=desc
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(content => {
      content.data.forEach(gif => {
        console.log("content data", content.data);
        // console.log("Meta", content.meta);

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
main();

var debounce_timer = null;
window.onscroll = function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (debounce_timer) {
      window.clearTimeout(debounce_timer);
    }

    debounce_timer = window.setTimeout(function() {
      main();
    }, 3000);
  }
};
