const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__body")) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    }
  });

  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

let swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});