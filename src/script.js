// scripts for uxd-product-biography

// basic query functions
function q(s)      { return document.querySelector(s) }
function qAll(s)   { return document.querySelectorAll(s) }
function qId(s)    { return document.getElementById(s) }

/**
 * toggle menu visibility
 * @param {boolean} [override] - Optional boolean, set visibility based on override
 */
function toggleMenu(override = undefined) {
    [q('#menu-button'), q('nav')].forEach(function(e){ 
        e.classList.toggle('open', override) 
    });
}

/** 
* hide all sections and make section visible
* @param {HTMLElement} section - Section to be made visible
*/
function makeSectionVisible(section) {
    if (typeof section == undefined || section == null) return;
    console.log(section);
    qAll('section').forEach(function(e){ e.style.display = 'none' });
    section.style.display = 'block';
    loadPageImages(section);
}

/**
 * Load images on page
 * @param {HTMLElement} section - Section within which to load content
 */
function loadPageImages(section) {
    const elems = section.querySelectorAll('*[data-src]');
    if (elems.length === 0) return;

    elems.forEach(function(e) {
        e.setAttribute('src', e.getAttribute('data-src'));
        e.removeAttribute('data-src');
    });
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