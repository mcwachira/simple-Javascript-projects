const toggleBtn = document.querySelector(".toggle");
const page = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  page.classList.toggle("colorChange");
});
