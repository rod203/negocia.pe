$(document).ready(function() {
  // NAVBAR ON SCROLL BACKGORUND
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= 60) {
          //clearHeader, not clearheader - caps H
          $(".navbar").addClass("nav-bg-scroll");
      } else {
        $(".navbar").removeClass("nav-bg-scroll");
      }
  }); //missing );
// document ready  
});

// CAROUSEL OWL
(function($) {
	"use strict";
	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();
	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: false,
	    autoplayHoverPause: false,
      items: 1,
      autoHeight:true,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});
	};
	carousel();
})(jQuery);

// AOS ANIMATION

AOS.init();