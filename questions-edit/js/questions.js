location.hash = "";

window.addEventListener("popstate", () => {
  if (!location.hash) {
    setTimeout(
      () => {
        document.querySelector("#question-modal form").reset();
      },
      400
    );
  }
});

$(document).ready(function () {
  $("ul li a[href='#question-modal']").click(function () {
    const questionElement = $(this).parents(".question-wrapper");
    const form = $("#question-modal form");
    const subjects = questionElement.find("h4").text().split(" > ");

    const question = {
      id: questionElement.prop("id"),
      year: questionElement.attr("data-year"),
      unit: subjects[0],
      argument: subjects[1],
      subargument: subjects[2],
      level: questionElement.find(".level").siblings("span").text(),
      text: questionElement.find("p").html(),
      duration: questionElement
        .find("h5:contains('min')")
        .text()
        .replace(/[a-zA-z: ]/g, ""),
    };

    $("#question-modal form *")
      .filter(":input[type!='submit']")
      .each(function (i) {
        const tagName = $(this).prop("tagName").toLowerCase();
        const inputId = $(this).attr("id");

        if (tagName === "select") {
          const option = $(this).find(
            `option:contains('${question[inputId]}')`
          );
          const optionVal = option.attr("value");
          $(this).val(optionVal);
        } else {
          $(this).val(question[inputId]);
        }
      });

    form.prepend(
      `<input type='text' name='id' id='id' value='${question.id}' style='display: none;' >`
    );
  });

  $("ul li a[href='#question-modal-delete']").click(function() {
    const questionElement = $(this).parents(".question-wrapper");
    const questionId = questionElement.prop("id");
    const questionText = questionElement.find("p").html();
    const deleteForm = $("#question-modal-delete form");

    deleteForm.find(":input[type!='submit']").val(questionId);;
    deleteForm.find("p").text(questionText);
  });
});
