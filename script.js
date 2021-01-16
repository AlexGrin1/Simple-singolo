// Активные ссылки навигации при нажатии
const MENU = document.getElementById('menu');

 MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
    event.target.classList.add('a_active');
 });
// Активные ссылки навигации при нажатии Бургер меню
const left_menu = document.querySelector('.burger_nav');

left_menu.addEventListener('click', (event) => {
   left_menu.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
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
const burg_menu =  document.querySelector(".burger");
const nav = document.querySelector('.burger_menu_none');

burg_menu.addEventListener('click', () => {
     nav.classList.toggle("burger_menu_show");
     burg_menu.classList.toggle("burger_active");
  });
link.addEventListener('click', () => {
   nav.classList.remove("burger_menu_show");
   burg_menu.classList.remove("burger_active");
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

