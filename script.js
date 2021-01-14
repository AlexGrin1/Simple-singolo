
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
