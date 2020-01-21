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
function mouseover(id) {
  id = id.slice(2, id.length);
  console.log(id);
  $(".card-likes" + id + "").css("display", "flex");
  $(".card-share" + id + "").css("display", "block");
  $(".card" + id + "").css("transform", "scale(1.05)");
  $(".card" + id + "").css("opacity", ".5");
}

function mouseout(id) {
  id = id.slice(2, id.length);
  console.log(id);
  $(".card-likes" + id + "").css("display", "none");
  $(".card-share" + id + "").css("display", "none");
  $(".card" + id + "").css("transform", "none");
  $(".card" + id + "").css("opacity", "1");
}
maindiv.appendChild(ullist);
count++;

contentele = [
  ["im1.jpg", "CANALS", "From Netherlands", "October 23.2019", "MARCUS BROWN"],
  [
    "im2.jpg",
    "Ilya Kulbanchy",
    "From Ukraine",
    "December 23.2019",
    "COSMO STUDIO"
  ],
  ["im3.gif", "Pavithran", "From Netherlands", "March 23.2019", "SRUTHI STUDIO"]
];
contentele.forEach(element => {
  tempele =
    `
<li class='litem` +
    count1 +
    ` litem'>
<div class='card-main'>
<div class='card-top'>
   <a class='card-a' href='#'>
       <img class='card` +
    count1 +
    ` cardsimg' id='id` +
    count1 +
    `' onmouseover='mouseover(this.id)' onmouseout='mouseout(this.id)'   src='` +
    element[0] +
    ` height="298" width="417" alt="pic">
   </a>
   <div class='card-likes` +
    count1 +
    ` card-likes' id='dd` +
    count1 +
    `' onmouseover='mouseover(this.id)' >
       <div class='card-like` +
    count1 +
    ` card-like'>
               <img class='likeimg` +
    count1 +
    ` likeimg' src='likeimg.svg'>
               <p class='likenos` +
    count1 +
    ` likenos'>0</p>
       </div>
       <div class='card-collect` +
    count1 +
    ` card-collect'>
           <p>Collect</p>
       </div>
   </div>
   <div class='card-share` +
    count1 +
    ` card-share'>
       <img class='shareimg` +
    count1 +
    ` shareimg' src='shareimg.svg'>
   </div>
</div>
<div class="card-content` +
    count1 +
    ` card-content">
   <div class="content-top` +
    count1 +
    ` content-top">
       <div class='contentrow1 bold'><p>` +
    element[1] +
    `</p></div>
       <div class='contentrow2'>
           <div class="content-right"><p>` +
    element[2] +
    `</p></div>
           <div class="content-left"><p>` +
    element[3] +
    `</p></div>
       </div>
   </div>
</div>
<div class="card-footer">
   <div class='card-footer-left'>
       <span><img class="footerimg" src='footerimg.jpg' alt="">
           <span class='super'>BY
               <span class='bold'>` +
    element[4] +
    `</span>
           </span>
       </span>
   </div>
   <div class="card-footer-right">
       <ul id="tags">
           <li>HM</li>
           <li>DEV</li>
           <li>SOLD</li>
       </ul>
   </div>
</div>
</div>
</li>`;
  ullist.innerHTML += tempele;
  count1++;
});
