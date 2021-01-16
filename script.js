// Активные ссылки при нажатии
const MENU = document.getElementById('menu');

 MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
    event.target.classList.add('a_active');
 });

// Активные кнопки фильтра

const FILTER = document.querySelector('.filter');

FILTER.addEventListener('click', (event) => {
   FILTER.querySelectorAll('li').forEach(el => el.classList.remove('filter_button_active'));
   event.target.classList.add('filter_button_active');
});


// Выезжающее меню
const link = document.querySelector('.burger_nav');
const menu =  document.querySelector(".burger");
const nav = document.querySelector('.burger_menu_none');

menu.addEventListener('click', () => {
     nav.classList.toggle("burger_menu_show");
     menu.classList.toggle("burger_active");
  });
link.addEventListener('click', () => {
   nav.classList.remove("burger_menu_show");
   menu.classList.remove("burger_active");
});

// переключение слайдов
const right = document.querySelector(".arrow-right");
const left = document.querySelector(".arrow-left");
const slide1 = document.querySelector(".slide_image");
const slide2 = document.querySelector(".slide_image2");
const block = document.querySelector(".slider_block_red ");
right.addEventListener('click', () => {
   slide1.classList.toggle("slide_image");
   slide1.classList.toggle("show");
   slide1.classList.toggle("hide");

   slide2.classList.toggle("hide");
   slide2.classList.toggle("show");
   block.classList.toggle("slider_block_red");
   block.classList.toggle("slider_block_blue");
});
left.addEventListener('click', () => {
   slide1.classList.toggle("slide_image");
   slide1.classList.toggle("hide");
   slide2.classList.toggle("hide");
   slide2.classList.toggle("show");
   block.classList.toggle("slider_block_red");
   block.classList.toggle("slider_block_blue");
});

