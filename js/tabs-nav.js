$(document).ready(function () {
  $("input[name='tab-nav']").attr("autocomplete", "off");
  
  $("input[name='tab-nav']").change(function () {
    const id = $(this).attr("id");
    const tabView = document.querySelector(`.${id}`);
    tabView.scrollIntoView({ behavior: "smooth" });
  });
});
