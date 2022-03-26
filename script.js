const sectorsContainerP = document.querySelector(
  "#open-anno-ipi-modal div.flex.flex-wrapper"
);
const sectorsContainerT = document.querySelector(
  "#open-anno-iti-modal div.flex.flex-wrapper"
);

const formT = document.querySelector("#open-anno-iti-modal form");
const formP = document.querySelector("#open-anno-ipi-modal form");

formP.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formP.elements[0].value) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("removable-block");
  child.innerHTML = `<span>${formP.elements[0].value}</span>
                      <button class="btn-close">
                        <i class="material-icons">close</i>
                    </button>`;
  sectorsContainerP.appendChild(child);
  formP.elements[0].value = "";
});

formT.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formT.elements[0].value) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("removable-block");
  child.innerHTML = `<span>${formT.elements[0].value}</span>
                      <button class="btn-close">
                        <i class="material-icons">close</i>
                    </button>`;
  sectorsContainerT.appendChild(child);
  formT.elements[0].value = "";
});
