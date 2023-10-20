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

const IMG_URL = './assets/images/slideshow/';

const arrowLeft   = document.querySelector(".arrow_left");
const arrowRight  = document.querySelector(".arrow_right");
const image       = document.querySelector('.banner-img');
const tagLine     = document.querySelector('.banner-tagline');
const dots        = document.querySelector(".dots");


// ******************* VARIABLES *******************

let currentSlide = 0;
let allDots;

// ******************* FUNCTIONS *******************

/**
 * Slides the current image to the right.
 */
function slideRight() {
  currentSlide      = (currentSlide + 1 ) % slides.length;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', IMG_URL + slides[currentSlide].image);
  updateDots();
}

/**
 * Slides the banner to the left, updating the current slide, image, tagline, and dots.
 */
function slideLeft() {
  currentSlide      = (currentSlide + slides.length - 1) % slides.length;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', IMG_URL + slides[currentSlide].image);
  updateDots();
}

/**
 * Updates the dots on the page to indicate the current slide.
 */
function updateDots() {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected");
  }

    allDots[currentSlide].classList.add("dot_selected");
}

/**
 * Launches the carousel by adding event listeners to the arrow buttons,
 * creating dots for each slide, and selecting the first dot.
 */
function launchCarousel() {
  arrowRight.addEventListener("click", slideRight);
  arrowLeft.addEventListener("click", slideLeft);

  for (const slide of slides) {
    const addDot = document.createElement("span");
    addDot.classList = "dot";
    dots.appendChild(addDot);
  }

  allDots = document.getElementsByClassName("dot");
  document.querySelector(".dot").classList.add("dot_selected");
}

// ******************* MAIN *******************

launchCarousel();
