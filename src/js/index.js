
function loginbarSwitch(show) { document.getElementById('popupbox').style.visibility = show ? "visible" : "hidden"; }

function onClick(selector, fn) { document.querySelector(selector).onclick = fn; }

onClick("#show-popup-form", () => loginbarSwitch(1))
onClick("#close-button", () => loginbarSwitch(0))