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

const arrowLeft = document.getElementsByClassName("arrow_left");
const arrowRight = document.getElementsByClassName("arrow_right");

arrowLeft.eventListener("click", function () {
	if (currentSlide === 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide--;
	}
	showSlide();
})