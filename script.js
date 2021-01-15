// Активные ссылки при нажатии
const header_link = document.querySelector('.menu');
const link_home = header_link.querySelector('.home');
const link_servces = header_link.querySelector('.serv');
const link_portfolio = header_link.querySelector('.portfol');
const link_contact = header_link.querySelector('.cont');

link_home.addEventListener('click', () => {
   link_home.classList.toggle("a_active");
   link_servces.classList.remove("a_active");
   link_portfolio.classList.remove("a_active");
   link_contact .classList.remove("a_active");
});
link_servces.addEventListener('click', () => {
   link_servces.classList.toggle("a_active");
   link_home.classList.remove("a_active");
   link_portfolio.classList.remove("a_active");
   link_contact .classList.remove("a_active");
});
link_portfolio.addEventListener('click', () => {
   link_portfolio.classList.toggle("a_active");
   link_home.classList.remove("a_active");
   link_servces.classList.remove("a_active");
   link_contact .classList.remove("a_active");
});
link_contact.addEventListener('click', () => {
   link_contact.classList.toggle("a_active");
   link_home.classList.remove("a_active");
   link_portfolio.classList.remove("a_active");
   link_servces.classList.remove("a_active");
});

// Активные кнопки фильтра
const portfolio = document.querySelector('.portfolio');
const images = portfolio.querySelector('.images_columns');
const all = portfolio.querySelector('.all');
const art = portfolio.querySelector('.art');
const graphic = portfolio.querySelector('.graphic');
const web = portfolio.querySelector('.web');
const artimages = images.querySelectorAll(".art");
const webimages = images.getAttributeNames("web");
const graphic_images = images.querySelectorAll(".graphic");
const allimages = images.querySelectorAll(".all");


art.addEventListener('click', () => {
   
   art.classList.toggle("filter_button_active");
   all.classList.remove("filter_button_active");
   web.classList.remove("filter_button_active");
   graphic.classList.remove("filter_button_active");
   webimages.classList.toggle("images_hide")
   
});
web.addEventListener('click', () => {
   
   web.classList.toggle("filter_button_active");
   art.classList.remove("filter_button_active");
   all.classList.remove("filter_button_active");
   graphic.classList.remove("filter_button_active");
});
all.addEventListener('click', () => {
   all.classList.toggle("filter_button_active");
   art.classList.remove("filter_button_active");
   web.classList.remove("filter_button_active");
   graphic.classList.remove("filter_button_active");
});
graphic.addEventListener('click', () => {
   graphic.classList.toggle("filter_button_active");
   art.classList.remove("filter_button_active");
   all.classList.remove("filter_button_active");
   web.classList.remove("filter_button_active");
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