// Terminal-style typing animation for the hero section
(function () {
  function typeInto(el, text, speed, delay, onDone) {
    if (!el) return;
    let i = 0;
    setTimeout(function tick() {
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(tick, speed);
      } else if (onDone) {
        onDone();
      }
    }, delay);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var first = document.querySelector(".typed");
    var second = document.querySelector(".typed2");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (first) first.textContent = first.dataset.text || "";
      if (second) second.textContent = second.dataset.text || "";
      return;
    }

    typeInto(first, first ? first.dataset.text : "", 90, 300, function () {
      typeInto(second, second ? second.dataset.text : "", 70, 400);
    });
  });
})();
