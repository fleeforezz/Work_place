// Exquisite
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Customer Says
let clickIndex = 1;
clickSlides(clickIndex);

function nextSlides(m) {
  clickSlides(clickIndex += m);
}

function currentClick(m) {
  clickSlides(clickIndex = m);
}

function clickSlides(m) {
  let j;
  let click = document.getElementsByClassName("customer-says-message");
  if (m > click.length) {
    clickIndex = 1;
  }
  if (m < 1) {
    clickIndex = click.length;
  }
  for (j=0; j<click.length; j++) {
    click[j].style.display = "none";
  }
  click[clickIndex - 1].style.display = "block";
}
