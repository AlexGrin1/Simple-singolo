// Активные ссылки навигации при нажатии
const menu = document.getElementById('menu');

 menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
    event.target.classList.add('a_active');
 });
// Активные ссылки навигации при нажатии Бургер меню
const leftMenu = document.querySelector('.burger_nav');

leftMenu.addEventListener('click', (event) => {
   leftMenu.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
    event.target.classList.add('a_active');
 });

// Активные кнопки фильтра

const filter = document.querySelector('.filter');

filter.addEventListener('click', (event) => {
   if (event.target.tagName == "LI") {
   filter.querySelectorAll('li').forEach(el => el.classList.remove('filter_button_active'));
   event.target.classList.add('filter_button_active');
   }
});

// Выезжающее меню
const link = document.querySelector('.burger_nav');
const burgMenu =  document.querySelector(".burger");
const nav = document.querySelector('.burger_menu_none');

burgMenu.addEventListener('click', () => {
     nav.classList.toggle("burger_menu_show");
     burgMenu.classList.toggle("burger_active");
  });
link.addEventListener('click', () => {
   nav.classList.remove("burger_menu_show");
   burgMenu.classList.remove("burger_active");
});

// переключение слайдов

const right = document.querySelector(".arrow-right");
const left = document.querySelector(".arrow-left");
const slide1 = document.querySelector(".slide_image");
const slide2 = document.querySelector(".slide_image2");
const block = document.querySelector(".slider_block_red ");
right.addEventListener('click', () => {
   slide1.classList.toggle("show");
   slide1.classList.toggle("hide")
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

//высота блока

const sli = document.querySelector('.slider_block_red');
const header = document.querySelector('.header_block');
const services = document.querySelector('.services_block');
const portfolio = document.querySelector('.portfolio_block');
const footer = document.getElementById('contact');

const home = menu.querySelector('.home');
const serv = menu.querySelector('.serv');
const portfol = menu.querySelector('.portfol');
const footerCont = menu.querySelector('.cont');

window.addEventListener('scroll', () => {
   let scrollTop = window.scrollY;
   let hedCenter = header.offsetHeight;
   let servCenter = services.offsetHeight;
   let portfolCenter = portfolio.offsetHeight;
   let conCenter = footer.offsetHeight;
   console.log(conCenter);
   
   if (scrollTop <= hedCenter) {
      menu.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
      home.classList.add('a_active');
   }
   if (scrollTop >= servCenter) {
      menu.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
      serv.classList.add('a_active');
   }
   if (scrollTop >= portfolCenter) {
      menu.querySelectorAll('a').forEach(el => el.classList.remove('a_active'));
      portfol.classList.add('a_active');
   } 
})
