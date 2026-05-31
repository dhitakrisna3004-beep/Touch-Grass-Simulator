const btn = document.getElementById("grassBtn");
const grass = document.getElementById("grassArea");

btn.addEventListener("click", () => {
  grass.classList.remove("hidden");

  setTimeout(() => {
    grass.classList.add("hidden");
  }, 1000);
});