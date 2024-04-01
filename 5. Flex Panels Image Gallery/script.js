const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  const h2 = panel.querySelector("h2");
  const h3 = panel.querySelector("h3");
  panel.addEventListener("mouseover", function () {
    this.classList.add("open");
    h2.classList.add("active");
    h3.classList.add("active");
  });
  panel.addEventListener("mouseleave", function () {
    this.classList.remove("open");
    h2.classList.remove("active");
    h3.classList.remove("active");
  });
});
