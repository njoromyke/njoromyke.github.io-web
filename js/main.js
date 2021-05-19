window.onscroll = function(e){

	e.preventDefault();

	let scroll = window.scrollY;

	var Scroll = document.querySelector("#efec-scroll");
	var ulone = document.querySelector("#ulone");
	var ultwu = document.querySelector("#ultwu");
	var logo = document.getElementById("logo");

	if (scroll > 300) {
		Scroll.classList.add("bg-menu");
		ulone.classList.add("nav-scroll");
		ultwu.classList.add("nav-scroll");
		logo.classList.add("logo");
	}else{
		Scroll.classList.remove("bg-menu");
		ulone.classList.remove("nav-scroll");
		ultwu.classList.remove("nav-scroll");
		logo.classList.remove("logo");
	}
};


jQuery(document).ready(function(){
    'use strict'
    $('.slider').ripples({
        dropRadius:20,
        perturbance:0.03 
        
      });
     
      
      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
          },
        // other options
      });


     new WOW().init();

     $("a.smooth-scroll").click(function (event) {

      event.preventDefault();
      
      var section = $(this).attr("href");

      $('html, body').animate({
          scrollTop: $(section).offset().top - -2
      }, 1250, "easeInOutExpo");
  });
    
 
});