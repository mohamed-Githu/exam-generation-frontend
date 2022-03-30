window.addEventListener("load", () => {
  const slides = document.querySelectorAll(".slide");
  const style = document.createElement("style");
  let heights = "";

  slides.forEach((slide, i) => {
    const height = slide.offsetHeight;
    const className = `slide-${i + 1}`;
    heights += `.${className} { height: ${height}px }`;
    slide.classList.add(className);
  });

  style.innerHTML = heights;
  document.getElementsByTagName("head")[0].appendChild(style);
});
