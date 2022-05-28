$(document).ready(function() {
  $("#symbol-input").keyup(function() {
    const previewText = "\\( " + $(this).val() + " \\)";

    $("#symbol-preview").text(previewText);
    MathJax.typeset();
  });
});