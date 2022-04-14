$(document).ready(function() {
  $(".code-container .copy").click(function() {
    const text = $(this).parent().find(".code").text();
    navigator.clipboard.writeText(text);
  });

  $(".code-container .code").click(function() {
    const text = $(this).text();
    navigator.clipboard.writeText(text);
  });

  $(".code-container .link").click(function() {
    const url = $(this).attr("data-url");
    location.href = url;
  });

  $(".code-container .delete").click(function() {
    const code = $(this).parent().find(".code").text();
    const form = `
      <form action="" method="post" style="visibility: hidden" id="delete-code">
        <input type="text" name="code" value="${code}">
      </form>
    `;
    $("body").append(form);
    $("form#delete-code").trigger("submit");
  });

  $(".code-container .print").click(function() {
    const code = $(this).parent().find(".code").text();
    const form = `
      <form action="" method="post" style="visibility: hidden" id="print-code">
        <input type="text" name="code" value="${code}">
      </form>
    `;
    $("body").append(form);
    $("form#delete-code").trigger("submit");
  });
});