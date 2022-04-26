$(document).ready(function () {
  $("input[name='tab-nav']").attr("autocomplete", "off");
  
  $("input[name='tab-nav']").change(function () {
    const id = $(this).attr("id");
    const index = parseInt(id[id.length - 1]) - 1;
    const containerWidth = $(".tabs-container").width();
    const tabsContainer = document.querySelector(".tabs-container")

    tabsContainer.scroll({
      left: index * containerWidth,
      behavior: "smooth"
    })
  });
});
