//get landing
let landing = document.querySelector(".landing");

let landingImgs= ["01.jpg","02.jpg","03.jpg","04.jpg"];

setInterval(()=>{
let landingImg=Math.floor(Math.random() * landingImgs.length);

landing.style.backgroundImage=`url(imgs/${landingImgs[landingImg]})`;

},4000);

// services
let services = document.querySelector(".services");
//get services cards
let servicesCards= Array.from(document.querySelectorAll(".services .card")) ;

