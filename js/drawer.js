// window.addEventListener('load', () => {
//   const drawer = document.querySelector(".drawer");
//   const drawerBg = document.querySelector(".drawer-background");
//   const drawerCheckbox = document.querySelector("input.drawer-checkbox");

//   drawerCheckbox.checked = false;

//   drawerCheckbox.addEventListener("change", function () {
//     if (this.checked) {
//       drawer.classList.add("visible");
//       drawerBg.classList.add("visible");
//     } else {
//       drawer.classList.remove("visible");
//       drawerBg.classList.remove("visible");
//     }
//   });
  
//   drawerBg.addEventListener("click", () => {
//     drawerCheckbox.checked = false;
//     drawer.classList.remove("visible");
//     drawerBg.classList.remove("visible");
//   });
// });

$(document).ready(function() {
  const drawer = $(".drawer");
  const drawerBg = $(".drawer-background");
  const drawerCheckbox = $("input.drawer-checkbox");

  drawerCheckbox.prop("checked", false);

  drawerCheckbox.change(function () {
    drawer.toggleClass("visible");
    drawerBg.toggleClass("visible");
  });

  drawerBg.click(function () {
    drawerCheckbox.prop("checked", false);
    drawer.toggleClass("visible");
    drawerBg.toggleClass("visible");
  });
});
