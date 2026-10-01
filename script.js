(function () {
    "use strict";

    var btn = document.getElementById("toggleMotion");
    if (!btn) return;

    var label = btn.querySelector(".btn-label");

    btn.addEventListener("click", function () {
        var paused = document.body.classList.toggle("paused");
        btn.setAttribute("aria-pressed", paused ? "true" : "false");
        if (label) label.textContent = paused ? "Play" : "Pause";
    });
})();