const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-left-show");
      entry.target.classList.add("fade-down-show");
      entry.target.classList.add("fade-in-show");
      entry.target.classList.add("flip-right-show");
    } else {
      entry.target.classList.remove("fade-left-show");
      entry.target.classList.remove("fade-down-show");
      entry.target.classList.remove("fade-in-show");
      entry.target.classList.remove("flip-right-show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".fade-left, .fade-down, .fade-in, .flip-right"
);
hiddenElements.forEach((el) => observer.observe(el));

const observerHeader = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-logo-show");
      entry.target.classList.add("fade-nav-show");
      entry.target.classList.add("flip-up-show");
    } else {
      entry.target.classList.remove("flip-up-show");
    }
  });
});

const headerElements = document.querySelectorAll(
  ".fade-logo, .fade-down-nav, .flip-up"
);
headerElements.forEach((el) => observerHeader.observe(el));

//!
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-right-show");
    } else {
      entry.target.classList.remove("fade-right-show");
    }
  });
});

const fadeElements = document.querySelectorAll(".fade-right");
fadeElements.forEach((el) => observerFade.observe(el));
