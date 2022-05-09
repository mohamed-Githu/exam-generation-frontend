const triggerAlert = (alertData) => {
  $(".alert") && $(".alert").hide();

  const { type, title , messages } = alertData;

  // type can be : info, danger, success, warning

  const container = $(".container");

  const content = messages.reduce((acc, message) => acc + `<li>${message}</li>`, "");

  container.append(`
    <div class="alert alert-${type}">
      <span class="alert-closebtn">&times;</span>
      <span>${title || ""}</span>
      <div class="m-vertical"></div>

      <ul>
        ${content}
      </ul>
    </div>
  `);

  
  $(".alert-closebtn").click(function () {
    $(this).parent().hide();
  });
};
