// Preload

document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const preloader = document.querySelector('#preloader');
  var logo = document.querySelector(".logo");

  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.display = "none";
      window.scrollTo(0, 0);
    });
  }
});

// sticky navbar

document.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});


// Nav Highlight

let section = document.querySelectorAll('.body-item');
let lists = document.querySelectorAll('.navbar a');

function activeLink(li) {
  lists.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
}

document.addEventListener("scroll", function(){
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset - 100 && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`);
      activeLink(target);
    }
  });
});


// Nav Burger

var navLinks = document.querySelector(".nav-links");
var navBurg = document.querySelector(".nav-burger");

navBurg.addEventListener("click", function(){
  navBurg.classList.toggle("active");
  navLinks.classList.toggle("openned");
});


// About Nav

var aboutNav = document.querySelectorAll('.aboutNav-link');
var aboutItem = document.querySelectorAll('.about-item');

function activeAboutLink(li) {
  aboutNav.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
};

function activeAboutItem(li) {
  aboutItem.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
};

aboutNav.forEach((item) => item.addEventListener("click", function () {
  let id = item.getAttribute('href');
  const target = document.querySelector(id);

  activeAboutLink(item);
  activeAboutItem(target);
}));

// Timeline

var timeBtns = document.querySelectorAll('.timeline-btn');
var timeItem = document.querySelector(".timeline-items");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("timeline-item");
  let dots = document.getElementsByClassName("timeline-btn");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    dots[i].className = dots[i].className.replace(" prev", "");
    dots[i].className = dots[i].className.replace(" next", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";

  let prevIndex = slideIndex - 1;
  if (prevIndex > 0) {dots[prevIndex-1].className += " prev";}
  if (slideIndex < slides.length) {dots[slideIndex].className += " next";}
  // console.log(n)
}

timeItem.addEventListener("click", function () {
  plusSlides(+ 1);
});

timeBtns.forEach((item) => item.addEventListener("click", function () {
  const target = item.dataset.timeIndex;
  currentSlide(Number(target));
}));