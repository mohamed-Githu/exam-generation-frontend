const itiBox = document.querySelector("#iti");
const ipiBox = document.querySelector("#ipi");

const itiGroup = document.querySelectorAll(".classes-iti .checkbox-group");
const ipiGroup = document.querySelectorAll(".classes-ipi .checkbox-group");

const itiInput = document.querySelectorAll(".classes-iti input");
const ipiInput = document.querySelectorAll(".classes-ipi input");

window.addEventListener("load", () => {
  ipiInput.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  ipiGroup.forEach((group) => group.classList.add("disabled"));

  itiInput.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  itiGroup.forEach((group) => group.classList.add("disabled"));
});

itiBox.addEventListener("change", function () {
  ipiInput.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  ipiGroup.forEach((group) => group.classList.add("disabled"));

  itiInput.forEach((input) => {
    input.disabled = false;
    input.checked = false;
  });

  itiGroup.forEach((group) => group.classList.remove("disabled"));
});

ipiBox.addEventListener("change", function () {
  itiInput.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  itiGroup.forEach((group) => group.classList.add("disabled"));

  ipiInput.forEach((input) => {
    input.disabled = false;
    input.checked = false;
  });

  ipiGroup.forEach((group) => group.classList.remove("disabled"));
});
