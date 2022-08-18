//menu
let menu__burger = document.querySelector(".menu__burger");
let menu = document.querySelector(".menu");
menu__burger.addEventListener("click", (e) => {
  if (window.innerWidth > 768) {
    menu.classList.toggle("active");
  }
});

//menu__mobile
let menu__mobile = document.querySelector('.menu__mobile')
let body = document.querySelector("body");
menu__burger.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    menu__mobile.classList.toggle("active");
    body.classList.toggle("lock")
  }

});

//slider
let offset = 0;
let sliderTrainer = document.querySelector('.trainer');
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');

next.addEventListener("click", (e) => {
  offset += 300;
  if (offset > 900) {
    offset = 0;
  }
  sliderTrainer.style.left = -offset + 'px';

});
previous.addEventListener("click", (e) => {
  offset -= 300;
  if (offset < 0) {
    offset = 900;
  }
  sliderTrainer.style.left = -offset + 'px';

});
