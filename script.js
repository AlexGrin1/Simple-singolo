// Активные ссылки навигации при нажатии Бургер меню
const leftMenu = document.querySelector(".burger_nav");

leftMenu.addEventListener("click", (event) => {
  leftMenu
    .querySelectorAll("a")
    .forEach((el) => el.classList.remove("a_active"));
  event.target.classList.add("a_active");
});

// Активные кнопки фильтра
const filter = document.querySelector(".filter");

filter.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    filter
      .querySelectorAll("li")
      .forEach((el) => el.classList.remove("filter_button_active"));
    event.target.classList.add("filter_button_active");
  }
});

// Выезжающее меню
const link = document.querySelector(".burger_nav");
const burgMenu = document.querySelector(".burger");
const nav = document.querySelector(".burger_menu_none");
const aside = document.querySelector("aside");
const body = document.querySelector("body");

burgMenu.addEventListener("click", () => {
  nav.classList.toggle("burger_menu_show");
  nav.classList.toggle("burger_menu_none");
  burgMenu.classList.toggle("burger_active");
  aside.classList.toggle("aside-overlay");
  body.classList.toggle("no_scroll");
});

aside.addEventListener("click", (event) => {
  if (event.target === aside) {
    aside.classList.remove("aside-overlay");
    burgMenu.classList.remove("burger_active");
    nav.classList.remove("burger_menu_show");
    nav.classList.add("burger_menu_none");
    body.classList.remove("no_scroll");
  }
});

link.addEventListener("click", () => {
  nav.classList.remove("burger_menu_show");
  burgMenu.classList.remove("burger_active");
  aside.classList.remove("aside-overlay");
  nav.classList.add("burger_menu_none");
  body.classList.remove("no_scroll");
});

// переключение слайдов
const right = document.querySelector(".arrow-right");
const left = document.querySelector(".arrow-left");
const slide1 = document.querySelector(".slide_image");
const slide2 = document.querySelector(".slide_image2");
const block = document.querySelector(".slider_block_red ");
right.addEventListener("click", () => {
  slide1.classList.toggle("show");
  slide1.classList.toggle("hide");
  slide2.classList.toggle("hide");
  slide2.classList.toggle("show");
  block.classList.toggle("slider_block_red");
  block.classList.toggle("slider_block_blue");
});

left.addEventListener("click", () => {
  slide1.classList.toggle("show");
  slide1.classList.toggle("hide");
  slide2.classList.toggle("hide");
  slide2.classList.toggle("show");
  block.classList.toggle("slider_block_red");
  block.classList.toggle("slider_block_blue");
});

//скролл

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
const showLinks = () => {
  const blocksWithAtributePoints = document.querySelectorAll("[data-name]");
  const navigationMenu = menu.querySelectorAll("a");
  for (let i = 0; i < blocksWithAtributePoints.length; i++) {
    const scrollPosition = window.scrollY;
    const currentBlockWithPoints = blocksWithAtributePoints.item(i);
    const coordinateElement = currentBlockWithPoints.getBoundingClientRect()
      .top;

    if (scrollPosition >= coordinateElement) {
      menu
        .querySelectorAll("a")
        .forEach((el) => el.classList.remove("a_active"));
      navigationMenu.item(i).classList.add("a_active");
    }
  }
};

window.addEventListener("scroll", debounce(showLinks, 50));

// Сортировка изображений портфолио
const port = document.querySelector(".portfolio");
const imagesColumns = document.querySelector(".images_columns");
const allImages = imagesColumns.querySelectorAll("img");

port.addEventListener("click", (event) => {
  let i = event.target.id;
  if (event.target.tagName === "LI") {
    allImages.forEach((el) => el.classList.remove("order_up"));
    imagesColumns
      .querySelectorAll("." + i)
      .forEach((el) => el.classList.add("order_up"));
  }
});
