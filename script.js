
const menu =  document.querySelector(".burger");
const nav = document.querySelector('.burger_menu_none');
menu.addEventListener('click', () => {
     nav.classList.toggle("burger_menu_show");
     menu.classList.toggle("burger_active");
     
  });
