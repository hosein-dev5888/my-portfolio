const btn = document.getElementById("Btn-Skills");
const fills = document.querySelectorAll(".progress-fill");
btn.addEventListener("click", function () {
  fills.forEach(function (fill) {
    fill.classList.toggle("active");
  });
});
