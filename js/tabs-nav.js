$(document).ready(function () {
  $("input[name='tab-nav']").attr("autocomplete", "off");
  
  $("input[name='tab-nav']").change(function () {
    const id = $(this).attr("id");
    const tabView = $("." + id);
    const tabsContainer = document.querySelector(".tabs-container");

    tabsContainer.scroll({
      left: tabView.position().left,
      behavior: "smooth"
    })
  });
});
