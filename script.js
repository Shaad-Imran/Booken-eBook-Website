//add event on elements...
const addEventOnElem = (elem, type, callback) => {
  if (elem.length > 1) {
    for (const iterator of elem) {
      iterator.addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

//navbar toogle ...
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

// active header  when window scroll down to 100px
const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);
