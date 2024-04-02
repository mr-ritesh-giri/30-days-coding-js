const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  const firstPara = panel.querySelector("p:first-child");
  const lastPara = panel.querySelector("p:last-child");
  panel.addEventListener("mouseover", function () {
    this.classList.add("open");
    firstPara.style.transform = "translateY(0)";
    lastPara.style.transform = "translateY(0)";
  });
  panel.addEventListener("mouseleave", function () {
    this.classList.remove("open");

    firstPara.style.transform = "translateY(-400%)";
    lastPara.style.transform = "translateY(400%)";
  });
});
