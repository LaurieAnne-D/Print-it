"use strict";

// ******************* CONSTANTS *******************

const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const banner = document.querySelector('.banner-img');
const tagLine = document.querySelector('.banner-tagline');
const imgDisplay = './assets/images/slideshow/';

const dots = document.querySelector(".dots");
const selectDot = document.getElementsByClassName("dot");



// ******************* VARIABLES *******************

let currentSlide = 0;
// Slide.length = 4;

for (const object of slides) {
  const addDot = document.createElement("span");
  addDot.classList = "dot";
  dots.appendChild(addDot);
}


// ******************* FUNCTIONS *******************

// Carousel update : img and tag
function slideRight() {
  currentSlide = (currentSlide + 1 ) % slides.length;
  banner.setAttribute('src', imgDisplay + slides[currentSlide].image);
  tagLine.innerHTML = slides[currentSlide].tagLine;
  updateDots();
}

function slideLeft() {
  currentSlide = (currentSlide + slides.length - 1) % slides.length;
  banner.setAttribute('src', imgDisplay + slides[currentSlide].image);
  tagLine.innerHTML = slides[currentSlide].tagLine;
  updateDots();
}

// Carousel update : dots
function updateDots() {
  for (let i = 0; i < selectDot.length; i++) {
    selectDot[i].classList.remove("dot_selected");
  }
    selectDot[currentSlide].classList.add("dot_selected");
}


// ******************* MAIN *******************

arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);