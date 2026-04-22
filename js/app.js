// Theme toggle
document.addEventListener("DOMContentLoaded", function () {
  var logo = document.getElementById("logo");
  var headings = document.querySelectorAll("h2, h3, h4");
  var links = document.querySelectorAll(".footer a");

  function applyTheme(theme) {
    if (theme === "red") {
      document.body.style.background = "rgba(255, 0, 0, 0.1)";
      headings.forEach(function (el) { el.style.color = "#ff5757"; });
      logo.src = "assets/redlogo.png";
      links.forEach(function (el) { el.style.color = "#ff5757"; });
    } else {
      document.body.style.background = "white";
      headings.forEach(function (el) { el.style.color = "#226fb7"; });
      logo.src = "assets/logo.png";
      links.forEach(function (el) { el.style.color = "#226fb7"; });
    }
  }

  // Restore saved theme
  var saved = localStorage.getItem("theme");
  if (saved) applyTheme(saved);

  document.getElementById("redtheme").addEventListener("click", function () {
    applyTheme("red");
    localStorage.setItem("theme", "red");
  });

  document.getElementById("bluetheme").addEventListener("click", function () {
    applyTheme("blue");
    localStorage.setItem("theme", "blue");
  });
});
