// scripts for uxd-product-biography

// basic query functions
function q(s)      { return document.querySelector(s) }
function qAll(s)   { return document.querySelectorAll(s) }
function qId(s)    { return document.getElementById(s) }

// make menu (in)visible
function toggleMenu(cond = undefined) {
    [q('#menu-button'), q('nav')].forEach(function(e){ e.classList.toggle('open', cond) });
}

// hide all sections and make section visible
function makeSectionVisible(section) {
    if (typeof section == undefined || section == null) return;
    console.log(section);
    qAll('section').forEach(function(e){ e.style.display = 'none' });
    section.style.display = 'block';
}

// listen for page change
function hashHandler() {
    const hash = window.location.hash;
    console.log('hash: ', hash);

    if (hash === "") return;
    const section = qId(hash.substring(1));
    makeSectionVisible(section);
    toggleMenu(false);
}
window.addEventListener('hashchange', hashHandler);
document.addEventListener('DOMContentLoaded', hashHandler);