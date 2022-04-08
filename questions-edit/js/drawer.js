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
