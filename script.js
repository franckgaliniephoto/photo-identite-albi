/* Franck G Photographie — JS minimal (< 5 Ko), aucune dépendance */
(function () {
  "use strict";

  /* Menu mobile */
  var toggle = document.getElementById("navToggle");
  var nav = toggle ? toggle.closest(".main-nav") : null;
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Carte Google Maps chargée uniquement au clic (performance) */
  var mapBtn = document.getElementById("mapLoad");
  var mapShell = document.getElementById("mapShell");
  if (mapBtn && mapShell) {
    mapBtn.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src =
        "https://www.google.com/maps?q=23+avenue+Germain+T%C3%A9qui,+81160+Saint-Ju%C3%A9ry&output=embed";
      iframe.title = "Plan d'accès au studio Franck G Photographie, 23 avenue Germain Téqui, Saint-Juéry";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.allowFullscreen = true;
      mapShell.replaceChildren(iframe);
    });
  }

  /* Année courante dans le footer */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
