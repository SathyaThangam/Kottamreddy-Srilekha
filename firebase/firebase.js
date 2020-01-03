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
var body = document.getElementById("main-div");
//header
header = createElement("header", "header", "header");

body.appendChild(header);

headerleft = createElement("div", "headerleft", "headerleft");
tempele = `<img src="img/logo.png" alt="" width="130px" height="40px" >`;
headerleft.innerHTML = tempele;
header.appendChild(headerleft);

headercenter = createElement("ul", "headercenter", "headercenter");
header.appendChild(headercenter);

mynav = document.getElementById("headercenter");
menubaritems = ["Products", "Usecases", "Pricing", "Docs", "Support"];
menubaritems.forEach(element => {
  created = document.createElement("li");
  created.innerHTML = element;
  mynav.appendChild(created);
});

headerright = createElement("div", "headerright", "headerright");
header.appendChild(headerright);

headerright1 = createElement("div", "headerright1", "headerright1");
input = createElement("input", "input", "input");
input.type = "text";
input.value = "search";
//...
headerright1.appendChild(input);
headerright.appendChild(headerright1);

headerright2 = createElement("div", "headerright2", "headerright2");
headerright.appendChild(headerright2);

headerright3 = createElement("div", "headerright3", "headerright3");
button1 = createElement("button", "button1", "button1");
button1.innerHTML = " Go to Console";
headerright3.appendChild(button1);
headerright.appendChild(headerright3);

headerright4 = createElement("div", "headerright4", "headerright4");
button2 = createElement("button", "button2", "button2");
button2.innerHTML = " Sign-in";
headerright4.appendChild(button2);
headerright.appendChild(headerright4);

/*body*/

section1 = createElement("div", "section1", "section1");
hello = createElement("div", "hello", "hello");
heading1 = createElement("div", "heading1", "heading1");
heading1.innerHTML = "Firebase helps<br> mobile and web<br> app teams succeed";
hello.appendChild(heading1);

but1 = createElement("button", "but1", "but1");
but1.innerHTML = "Get Started";
hello.appendChild(but1);

butt2 = createElement("button", "butt2", "butt2");
tempele = `<div class="but2">
<img src="img/icon.svg" alt="" class="icon">
<span class="watch">Watch the video</span></div>`;
butt2.innerHTML = tempele;
hello.appendChild(butt2);

section1.appendChild(hello);

img11 = createElement("img", "img11", "img11");
img11.src = "img/first1.png";
section1.appendChild(img11);

body.appendChild(section1);

/*section2*/
section2 = createElement("div", "section2", "section2");
ul2 = createElement("ul", "ul2", "ul2");
section2.appendChild(ul2);

tempu = [
  [
    "Build apps fast, without managing infrastructure",

    "Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users."
  ],
  [
    "Backed by Google, trusted by top apps",

    "Firebase is built on Google infrastructure and scales automatically, for even the largest apps."
  ]
];

tempu.forEach(element => {
  tempele =
    `<div class="block">
            <h5 class="h1" >` +
    element[0] +
    `</h5>
            <h6 class="h2" >` +
    element[1] +
    `</h6>
           </div>`;
  ul2.innerHTML += tempele;
});

body.appendChild(section2);

/*section3*/
section3 = createElement("div", "section3", "section3");

s3block = createElement("div", "s3block", "s3block");
sh1 = createElement("div", "sh1", "sh1");
sh1.innerHTML = "A comprehensive app<br>development platform";
s3block.appendChild(sh1);
section3.appendChild(s3block);

/*images*/

iblock = createElement("div", "iblock", "iblock");

temp = `<div class="ib1">
<div class="im">
<img src="img/i1.png" alt="">
</div>
<h4 class="head">Build Better apps</h4>
<div class="b">
<div class="b1">
<img src="img/1.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Cloud Firestone</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/2.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">ML Kit</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/3.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Cloud Functions</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/4.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Cloud Authentication</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/5.png" class="1">
</div>
<div class="b2">
<h3 class="bhead">Hosting</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/6.png" class="1">
</div>
<div class="b2">
<h3 class="bhead">Cloud Storage</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
</div>

<div class="ib1">
<div class="im">
<img src="img/i2.png" alt="">
</div>
<h4 class="head">Improve app quality</h4>
<div class="b">
<div class="b1">
<img src="img/21.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Crashlytics</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/22.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Performance Monitoring</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/23.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Test lab</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/24.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">App Distribution</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
</div>

<div class="ib1">
<div class="im">
<img src="img/i3.png" alt="">
</div>
<h4 class="head">Grow your business</h4>
<div class="b">
<div class="b1">
<img src="img/31.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">In-App Messaging</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/32.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Google Analytics</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/33.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">Predictions</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/34.png" class="k">
</div>
<div class="b2">
<h3 class="bhead">A/B Testing</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/35.png" class="1">
</div>
<div class="b2">
<h3 class="bhead">Cloud Messaging</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
<div class="b">
<div class="b1">
<img src="img/36.png" class="1">
</div>
<div class="b2">
<h3 class="bhead">REmote Config</h3>
<p class="shead"> Store and sync app data at global scale</p>
</div>
</div>
</div>`;
iblock.innerHTML = temp;
iblock2 = createElement("div", "iblock2", "iblock2");
temp2 = `<div class="bu">
<input type="button" value="learn More" class="m">
<input type="button" value="learn More" class="m">
<input type="button" value="learn More" class="m">
</div>
<hr>`;
iblock2.innerHTML = temp2;
s3block.appendChild(iblock);
s3block.appendChild(iblock2);

body.appendChild(section3);

/*section4*/
section4 = createElement("div", "section4", "section4");
big = createElement("div", "big", "big");
big1 = createElement("div", "big1", "big1");
big2 = createElement("div", "big2", "big2");
big1.innerHTML = "Firebase Extensions";
big2.innerHTML =
  "Deploy functionality to your app quickly using pre-packaged solutions. Firebase Extensions are configurable, and work with Firebase and other Google Cloud Platform products";
big.appendChild(big1);
big.appendChild(big2);
section4.appendChild(big);

ufo = createElement("ul", "ufo", "ufo");
king = [
  ["img/b1.png", "Resize Images"],
  ["img/b2.png", "Translate Text"],
  ["img/b3.png", "Sync with Mailchimp"],
  ["img/b4.png", "Trigger Email"]
];
king.forEach(element => {
  tempele =
    `<div class="pull">
<div class="push">
<img src="` +
    element[0] +
    `" alt="" class="i">
<p class="j">` +
    element[1] +
    `</p>
</div>

</div>
`;
  ufo.innerHTML += tempele;
});
section4.appendChild(ufo);

butto = createElement("button", "butto", "butto");
butto.innerHTML = "View all extensions";
section4.appendChild(butto);
hhr = document.createElement("hr");
section4.appendChild(hhr);
iblock2.appendChild(section4);

/*section5*/
/*section4*/
section5 = createElement("div", "section5", "section5");
bigg = createElement("div", "bigg", "bigg");

bigg.innerHTML = "Firebase Extensions";

section4.appendChild(bigg);

ufoo = createElement("ul", "ufoo", "ufoo");
king = [
  ["img/h1.svg", "Google ads"],
  ["img/h2.svg", "AdMob"],
  ["img/h3.svg", "Google Marketing Platform"],
  ["img/h4.svg", "Playstore"],
  ["img/h5.svg", "Data Studio"],
  ["img/h6.svg", "Big Query"],
  ["img/h7.svg", "Slack"],
  ["img/h8.svg", "Jira"],
  ["img/h9.png", "PagerDuty"]
];
king.forEach(element => {
  tempele =
    `<div class="gifcontainer">
<div class="ele">
<img src="` +
    element[0] +
    `" alt="" class="i">
<p class="j">` +
    element[1] +
    `</p>
</div>

</div>
`;
  ufoo.innerHTML += tempele;
});
section5.appendChild(ufoo);

buttoo = createElement("button", "buttoo", "buttoo");
buttoo.innerHTML = "Learn More";
section5.appendChild(buttoo);
hhr = document.createElement("hr");
section5.appendChild(hhr);

iblock2.appendChild(section5);

/*section6*/
section6 = createElement("div", "section6", "section6");
bullock = createElement("div", "bullock", "bullock");
bigu = createElement("div", "bigu", "bigu");
bigu1 = createElement("div", "bigu1", "bigu1");
bigu2 = createElement("div", "bigu2", "bigu2");
bigu1.innerHTML = "Overcome complex <br>Challenges";
bigu2.innerHTML =
  "Firebase can help you tackle demanding challenges, whether you’re a developer, marketer, or product manager. Our tools work together so that mobile teams can improve app performance while gaining valuable user insights.";
bigu.appendChild(bigu1);
bigu.appendChild(bigu2);
bullock.appendChild(bigu);

img = createElement("img", "buddaimg", "buddaimg");
img.src = "img/buddaimg.png";

ulo = createElement("ul", "ulo", "ulo");
arr = [
  [
    "Progressively roll out new features",
    "Before releasing a new feature, test it on a subset of your user base to see how it works and how they respond."
  ],
  [
    "Create a great onboarding flow",
    "Give users a simple, secure way to sign into your app, then monitor the onboarding process and find ways to improve it."
  ],
  [
    "Add chat to your app",
    "Implement a user-friendly chat feature, so that your users can chat with each other in realtime without leaving your app."
  ]
];
arr.forEach(element => {
  t =
    `<div class="block">
  <h5 class="h1" >` +
    element[0] +
    `</h5>
  <h6 class="h2" >` +
    element[1] +
    `</h6>
 </div>`;
  ulo.innerHTML += t;
});
bull = createElement("div", "bull", "bull");
buttoo1 = createElement("button", "buttoo1", "buttoo1");
buttoo1.innerHTML = "See Use cases";
bull.appendChild(buttoo1);
section6.appendChild(bullock);
section6.appendChild(img);
section6.appendChild(ulo);
section6.appendChild(bull);
body.appendChild(section6);

/*section7*/
section7 = createElement("div", "section7", "section7");
bullock1 = createElement("div", "bullock1", "bullock1");
biguu = createElement("div", "biguu", "biguu");
biguu1 = createElement("div", "biguu1", "biguu1");
biguu2 = createElement("div", "biguu2", "biguu2");
biguu1.innerHTML = "Trusted by the largest apps";
biguu2.innerHTML =
  "Development teams around the world—including NPR, Halfbrick, Duolingo, and Venmo—use Firebase to ship their apps.";
biguu.appendChild(biguu1);
biguu.appendChild(biguu2);
bullock1.appendChild(biguu);
section7.appendChild(bullock1);

abu = createElement("div", "abu", "abu");
pove = [
  ["img/l.png", "img/e.png", "img/k.png", "img/h.png"],
  ["img/a.png", "img/r.png", "img/ee.png", "img/d.png"],
  ["img/dd.png", "img/y.png", "img/l1.png", "img/l2.png"]
];
pove.forEach(element => {
  avatar =
    `<div class="bullu">
    <div class="muguru">
  <div class="ammaylu">
  <img src="` +
    element[0] +
    ` "alt="" class="a1">
  <img src="` +
    element[1] +
    ` "alt="" class="a1">
  <img src="` +
    element[2] +
    ` "alt="" class="a1">
    <img src="` +
    element[3] +
    ` "alt="" class="a1">
  </div>
  </div>
  </div>`;
  abu.innerHTML += avatar;
});
section7.appendChild(abu);
body.appendChild(section7);

/*section8*/
section8 = createElement("div", "section8", "section8");
imgu = document.createElement("img", "imgu", "imgu");
imgu.src = "img/who.png";
already = createElement("div", "already", "already");

iamdone = createElement("div", "iamdone", "iamdone");
heading11 = createElement("div", "heading11", "heading11");
heading11.innerHTML = "Try Firebase <br>for free today";
iamdone.appendChild(heading11);

paraa = createElement("p", "paraa", "paraa");
paraa.innerHTML = "Integrating it into your app is easy.";
iamdone.appendChild(paraa);

but11 = createElement("button", "but11", "but11");
but11.innerHTML = "Get Started";
iamdone.appendChild(but11);

already.appendChild(iamdone);
section8.appendChild(imgu);
section8.appendChild(already);
section8.appendChild(hhr);
body.appendChild(section8);

/*section9*/
footer = createElement("div", "footer", "footer");
ful = createElement("ul", "ful", "ful");
lp = [
  ["learn", "Guides", "Reference", "Samples", "Libraries", "Github"],
  [
    "Stay Connected",
    "Blog",
    "Firebase Summit",
    "Facebook",
    "Twitter",
    "You Tube"
  ],
  [
    "Contact Support",
    "Stack Overflow",
    "Stack Community",
    "Google Group",
    "Release Notes",
    "FAQ"
  ]
];
lp.forEach(element => {
  tut =
    `<div class="lii">
  <p class="how">` +
    element[0] +
    `</p>
    <p class="how">` +
    element[1] +
    `</p>
    <p class="how">` +
    element[2] +
    `</p>
    <p class="how">` +
    element[3] +
    `</p>
    <p class="how">` +
    element[4] +
    `</p>
    <p class="how">` +
    element[5] +
    `</p>
 
  </div>`;
  ful.innerHTML += tut;
});
hr1 = document.createElement("hr");

footer.appendChild(ful);
footer.appendChild(hr1);

last = createElement("div", "last", "last");
hell = `<div class="yummy">
<div class="yummychild1">
<img src="img/g.svg" class="hee">
</div>
<div class="yummychild2">
<p class="jj">Android</p>
<p class="jj">Chrome</p>
<p class="jj">Firebase</p>
<p class="jj">Google Cloud Platform</p>
<p class="jj">All Products</p>
</div>
</div>`;
last.innerHTML = hell;
footer.appendChild(hr1);
footer.appendChild(last);
footer.appendChild(hr1);

last1 = createElement("div", "last1", "last1");
hell1 = `<div class="blocku">
<div class="block1">
<p class="av1">Terms</p>
<p class="av2">Privacy</p>
</div>
`;
last1.innerHTML = hell1;
footer.appendChild(last1);
body.appendChild(footer);
