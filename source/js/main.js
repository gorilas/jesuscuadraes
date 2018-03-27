/* ==========================================================================
   main.js
   ========================================================================== */



// Fade in

window.addEventListener("load", function(event)
{
  document.body.classList.add("loaded");
});


// Call Accordion widgets

new AccordionWidget(document.getElementsByClassName('accordion-interface')[0], null);
new AccordionWidget(document.getElementsByClassName('accordion-interface')[1], null);
