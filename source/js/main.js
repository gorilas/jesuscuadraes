/* ==========================================================================
   main.js
   ========================================================================== */



// Fade in

window.addEventListener("load", function(event)
{
  document.body.classList.add("loaded");
  document.getElementById("footer-bg").style.backgroundImage = "url('img/bg.jpg')";
});


// Call Accordion widgets

new AccordionWidget(document.getElementsByClassName('accordion-interface')[0], null);
new AccordionWidget(document.getElementsByClassName('accordion-interface')[1], null);
