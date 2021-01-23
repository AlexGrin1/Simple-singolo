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
   if (event.target.tagName === "LI") {
   filter.querySelectorAll('li').forEach(el => el.classList.remove('filter_button_active'));
   event.target.classList.add('filter_button_active');
   }
});

// Выезжающее меню
const link = document.querySelector('.burger_nav');
const burgMenu =  document.querySelector(".burger");
const nav = document.querySelector('.burger_menu_none');
const aside = document.querySelector('aside');
const body = document.querySelector('body');

burgMenu.addEventListener('click', () => {
     nav.classList.toggle("burger_menu_show");
     nav.classList.toggle("burger_menu_none");
     burgMenu.classList.toggle("burger_active");
     aside.classList.toggle('aside-overlay');
     body.classList.toggle('no_scroll');
     
   });
aside.addEventListener('click', (event) => {
   if (event.target === aside) {
       aside.classList.remove('aside-overlay');
       burgMenu.classList.remove("burger_active");
       nav.classList.remove("burger_menu_show");
       nav.classList.add("burger_menu_none");
       body.classList.remove('no_scroll');
      }
  });
link.addEventListener('click', () => {
   nav.classList.remove("burger_menu_show");
   burgMenu.classList.remove("burger_active");
   aside.classList.remove('aside-overlay')
   nav.classList.add("burger_menu_none");
   body.classList.remove('no_scroll');
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

// Сортировка изображений портфолио
const port = document.querySelector(".portfolio");
const imagesColumns = document.querySelector(".images_columns");
const allImages = imagesColumns.querySelectorAll('img');

   port.addEventListener('click', (event) => {
      let i=event.target.id;
      if (event.target.tagName === "LI") {
         allImages.forEach(el => el.classList.remove('order_up'));
         imagesColumns.querySelectorAll('.'+ i).forEach(el => el.classList.add('order_up'));
      }
   });

/*
const artImages = imagesColumns.querySelectorAll(".art");
const webImages = imagesColumns.querySelectorAll(".web");
const graphImages = imagesColumns.querySelectorAll(".graphic");


const allBut = filter.querySelector('.all')
const artBut = filter.querySelector('.art');
const webBut = filter.querySelector('.web');
const graphBut = filter.querySelector('.graphic');


filter.addEventListener('click', (event) => {
  
   if (event.target === allBut) {
      for(let i = 0; i <  allImages.length; i += 1) {
         allImages.item(i).classList.remove("order_up");
       }
   }
   if (event.target === artBut) {
      for(let i = 0; i <  artImages.length; i += 1) {
         artImages.item(i).classList.toggle("order_up");
       }
   }
   if (event.target === webBut) {
      for(let i = 0; i < webImages.length; i += 1) {
         webImages.item(i).classList.toggle("order_up");
       }
   }
   if (event.target ===  graphBut) {
      for(let i = 0; i <  graphImages.length; i += 1) {
         graphImages.item(i).classList.toggle("order_up");
       }
   }
})
*/