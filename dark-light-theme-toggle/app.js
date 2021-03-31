const checkBox = document.getElementById("checkbox");

const page = document.querySelector("body");
checkBox.addEventListener("click", () => {
  page.classList.toggle("changeBackground");
});
