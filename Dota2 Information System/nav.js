function handleScroll() {
  const nav = document.querySelector(".nav-scroll");
  const scrollY = window.scrollY;

  if (scrollY > 500) {
    nav.classList.add("nav-solid");
  } else {
    nav.classList.remove("nav-solid");
  }
}

window.addEventListener("scroll", handleScroll);
