/* ==========================================================================
   main.js
   ========================================================================== */



// Fade in

window.addEventListener("load", function(event)
{
    console.log("Web page fully Loaded. HTML, Javascript, CSS, Images, Iframes and objects are fully loaded.");
    document.body.classList.add("loaded");
});


// Call Accordion widgets

new AccordionWidget(document.getElementsByClassName('accordion-interface')[0], null);
new AccordionWidget(document.getElementsByClassName('accordion-interface')[1], null);
