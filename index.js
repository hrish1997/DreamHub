const links = document.getElementById("links");
const menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("active");
});
