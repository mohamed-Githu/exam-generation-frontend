window.addEventListener("load", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const icon = this.children[0];
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        icon.style.transform = "rotate(90deg)";
      }
    });
  });
});
