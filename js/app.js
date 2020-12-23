// Slide Show
let slideIndex = 1;
let myTimer;
let timeout = 5000;
showSlides(slideIndex);

window.addEventListener("load",function() {
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, timeout);
});
// Next/previous controls
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, timeout);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, timeout);
  }
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// Light & Dark Mode Switch
const chk = document.getElementById('chk');
const article = document.querySelector('#textlight')

chk.addEventListener('change', () => {
    document.body.classList.toggle('bodylight');
    article.classList.toggle('light')
});


// SMOOTH SCROLLING
// About Section
const readmore = document.getElementById('readmore');
const menuabout = document.getElementById('About')
const aboutsection = document.querySelector("#about-section");

menuabout.addEventListener('click', () => {
  aboutsection.scrollIntoView({behavior: 'smooth', block: 'end'})
});

readmore.addEventListener('click', () => {
  aboutsection.scrollIntoView({behavior: 'smooth', block: 'end'});
});



// Home
const Home = document.getElementById('Home');
const startsection = document.querySelector("#content-section");

Home.addEventListener('click', () => {
  startsection.scrollIntoView({behavior:'smooth', block: 'start'})
});