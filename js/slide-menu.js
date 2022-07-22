window.addEventListener("load", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const icon = $(this).find("i.arrow")[0];
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        icon.style.transform = "rotate(90deg)";
      }
    });
  });

  $(".toggle i.delete").click(function(e) {
    e.stopPropagation();
    const id = $(this).parents(".dropdown-menu").prop("id");
    const titolo = $(this).parents(".dropdown-menu").children().find(".unita-titolo").text();
    const modal = $("#rimvuovi-unita");

    modal.children().find(".unita-titolo").text(titolo);
    modal.children().find("input[name='unita-id']").val(id);
    
    location.hash = "#rimvuovi-unita";
  });

  $(".toggle i.add").click(function(e) {
    e.stopPropagation();
    const id = $(this).parents(".dropdown-menu").prop("id");
    const titolo = $(this).parents(".dropdown-menu").children().find(".unita-titolo").text();
    const modal = $("#argument-modal");

    modal.children().find(".unita-titolo").text(titolo);
    modal.children().find("input[name='unita-id']").val(id);
    
    location.hash = "#argument-modal";
  });
});
