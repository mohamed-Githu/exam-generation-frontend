const itiBox = document.querySelector(".iti-checkbox");
const ipiBox = document.querySelector(".ipi-checkbox");


const itiGroup = document.querySelectorAll(".classes-iti .checkbox-group");
const ipiGroup = document.querySelectorAll(".classes-ipi .checkbox-group");

const itiInput = document.querySelectorAll(".classes-iti input[type='checkbox']");
const ipiInput = document.querySelectorAll(".classes-ipi input[type='checkbox']");

itiBox.addEventListener('change', function() {
  if (!this.checked) {

    itiInput.forEach((input) => {
      input.disabled = true;
      input.checked = false;
    });

    itiGroup.forEach((group) => group.classList.add("disabled"));
  } else {

    itiInput.forEach((input) => {
      input.disabled = false;
      input.checked = false;
    });

    itiGroup.forEach((group) => group.classList.remove("disabled"));
  }
});

ipiBox.addEventListener('change', function() {
  if (!this.checked) {

    ipiInput.forEach((input) => {
      input.disabled = true;
      input.checked = false;
    });

    ipiGroup.forEach((group) => group.classList.add("disabled"));
  } else {

    ipiInput.forEach((input) => {
      input.disabled = false;
      input.checked = false;
    });
      
    ipiGroup.forEach((group) => group.classList.remove("disabled"));
  }
});
