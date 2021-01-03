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




// REVIEW SLIDER
const customerImage = document.querySelector('#customer-img');
const customerName = document.querySelector('#customer-name');
const customerText = document.querySelector('#customer-text');
const reviewLocation = document.querySelector('#reviewLocation');
const reviewIcons = document.querySelector('#review-stars');
const starIcon = '<i class="fas fa-star"></i>'
let testimonialIndex = 0;
const customers = [];

// Create a new customer using a constructor
function Customer(img, name, text, revLoc, stars) {
    this.img = img
    this.name = name
    this.text = text
    this.revLoc = revLoc
    this.stars = stars
}

// Create new customer using the constructor function
function createCustomer(img, name, text, revLoc, stars) {

    let fullImg = `./afbeeldingen/customer-images/customer-${img}.jpg`
    let customer = new Customer(fullImg, name, text, revLoc, stars)

    customers.push(customer)
}

createCustomer(0, 'Ronald S', 'Bezochten het LAM. Wat een prachtig museum. Het gebouw, heel mooi van architectuur, is fraai gelegen in het park. De collectie is heel divers en gelinkt aan het thema voedsel. Mooi gepresenteerd en goed gedocumenteerd.', 'Review komt van: Trip Advisor', starIcon.repeat(5))
createCustomer(1, 'Joemate', 'Geweldig evenement en voor al onze mensen een ervaring die een blijvende positieve indruk over dit park achterlaat. Ook alle voorzieningen zoals horeca en rustpunten zijn goed. het enige wat jammer is dat dit park maar zo kort geopend is.', 'Review komt van: Trip Advisor', starIcon.repeat(5))
createCustomer(2, 'Willem J', 'Sommige kunstwerken blijven lang bij je, vanwege hun extreme emotionaliteit of hun onconventionele perspectief. Het enthousiasme van het personeel is besmettelijk.', 'Review komt van: Trip Advisor', starIcon.repeat(5))

// Slide through all the available customers currently in the list starting at index 1 instead of 0.
function testimonialSlides() {
    testimonialIndex++   
    if (testimonialIndex === customers.length) {testimonialIndex = 0} 
    
    customerImage.src = customers[testimonialIndex].img
    customerName.textContent = customers[testimonialIndex].name
    customerText.textContent = customers[testimonialIndex].text
    reviewLocation.textContent = customers[testimonialIndex].revLoc
    reviewIcons.innerHTML = customers[testimonialIndex].stars

    setTimeout(testimonialSlides, 15000);
  }

testimonialSlides();




// Light & Dark Mode Switch
const chk = document.getElementById('chk');
const article = document.querySelector('.textlight')

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