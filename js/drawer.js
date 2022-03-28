const drawer = document.querySelector(".drawer");
const drawerBg = document.querySelector(".drawer-background");

const drawerCheckbox = document.querySelector("input.drawer-checkbox");

window.addEventListener('load', () => {
  drawerCheckbox.checked = false;
});

drawerCheckbox.addEventListener("change", function () {
  if (this.checked) {
    drawer.classList.add("visible");
    drawerBg.classList.add("visible");
  } else {
    drawer.classList.remove("visible");
    drawerBg.classList.remove("visible");
  }
});

drawerBg.addEventListener("click", () => {
  drawerCheckbox.checked = false;
  drawer.classList.remove("visible");
  drawerBg.classList.remove("visible");
});
