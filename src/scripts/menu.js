document.getElementById("closeButton").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.remove("expanded");
});

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});
