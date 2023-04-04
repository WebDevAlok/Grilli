'use strict';

/**
 * Preload
 * 
 * loading will end after document is loaded 
 */

const preloder = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
    preloder.classList.add("loaded");
    document.body.classList.add("loaded");
});