// scripts for uxd-product-biography

// basic query function
function q(s)    { return document.querySelector(s) }
function qAll(s) { return document.querySelectorAll(s) }

function toggleMenu() {
    [q('#menu-button'), q('nav')].forEach(function(e){ e.classList.toggle('open') });
}