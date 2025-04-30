document.addEventListener("DOMContentLoaded", () => {
  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("bar");
      var width = 1;
      var id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          window.location.href = "results.html";
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = `<span class="percent-text poppins-semibold">${width}%</span>`;
        }
      }
    }
  }

  move();
});
