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
	// SWITCH DE PRECIOS DE PLANES.
	$("#anual-switch").attr("style","color:black;");
	$('#switch-label').change(function() {
		if ($(this).prop('checked') == false){
			$(".precio-plan").attr("style","display:flex!important");
			$(".precio-plan-descuento").attr("style","display:none!important");
			$("#mensual-switch").attr("style",";color: #FF5900;");
			$("#anual-switch").attr("style","color:black;");
			console.log("visible");
		} else {
			console.log("no-visible");
			$("#anual-switch").attr("style",";color: #FF5900;");
			$("#mensual-switch").attr("style","color:black;");
			$(".precio-plan").attr("style","display:none!important");
			$(".precio-plan-descuento").attr("style","display:flex!important");
			}
		}
	)
// document ready  
});

// PLANES CAROUSEL

$(document).ready(function(){
		$('.featured-carousel').owlCarousel({
			loop:true,
			autoplay: true,
			margin:30,
			nav:false,
			dots: false,
			autoplayHoverPause: false,
			items: 1,
			autoHeight:true,
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
	$('.owl-carousel').owlCarousel({
    loop:true,
		margin:150,
    nav:false,
		center:true,
		autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:3
        },
        1000:{
            items:5
        }
    }
	})
	$('.clientes-carousel').owlCarousel({
    loop:true,
    nav:false,
		center:true,
		autoplay: true,
		autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:10
        }
    }
	})
});