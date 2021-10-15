$(document).ready(function() {
	// BOTONES RECORRIDO APP

		// Declaro id de los botones
	const primerasFunciones = ["comprar","ventas","inventario","produccion","registro"];
	const segundasFunciones = ["reportes","pos","eshop","settings","oscuro"];

		// Funcion para desactivar classe active
	$(".funciones-btn-first").click(function(){
		for (let funcion of segundasFunciones){
			$("." + funcion).removeClass("active");
		}});

		// Funcion para desactivar classe active
	$(".funciones-btn-second").click(function(){
		for (let funcion of primerasFunciones){
			$("." + funcion).removeClass("active");
		}});

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

	// BTN FAQ
	$("#btn-collapseUno").click(function(){
		if ($("#headingUno").hasClass("activo")){
			$("#headingUno").removeClass("activo");
			$("#btn-collapseUno > .btn-mas").css("display","flex");
			$("#btn-collapseUno > .btn-menos").css("display","none");
		} else {
			$("#headingUno").addClass("activo");
			$("#btn-collapseUno > .btn-mas").css("display","none");
			$("#btn-collapseUno > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseDos").click(function(){
		if ($("#headingDos").hasClass("activo")){
			$("#headingDos").removeClass("activo");
			$("#btn-collapseDos > .btn-mas").css("display","flex");
			$("#btn-collapseDos > .btn-menos").css("display","none");
		} else {
			$("#headingDos").addClass("activo");
			$("#btn-collapseDos > .btn-mas").css("display","none");
			$("#btn-collapseDos > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseTres").click(function(){
		if ($("#headingTres").hasClass("activo")){
			$("#headingTres").removeClass("activo");
			$("#btn-collapseTres > .btn-mas").css("display","flex");
			$("#btn-collapseTres > .btn-menos").css("display","none");
		} else {
			$("#headingTres").addClass("activo");
			$("#btn-collapseTres > .btn-mas").css("display","none");
			$("#btn-collapseTres > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseCuatro").click(function(){
		if ($("#headingCuatro").hasClass("activo")){
			$("#headingCuatro").removeClass("activo");
			$("#btn-collapseCuatro > .btn-mas").css("display","flex");
			$("#btn-collapseCuatro > .btn-menos").css("display","none");
		} else {
			$("#headingCuatro").addClass("activo");
			$("#btn-collapseCuatro > .btn-mas").css("display","none");
			$("#btn-collapseCuatro > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseCinco").click(function(){
		if ($("#headingCinco").hasClass("activo")){
			$("#headingCinco").removeClass("activo");
			$("#btn-collapseCinco > .btn-mas").css("display","flex");
			$("#btn-collapseCinco > .btn-menos").css("display","none");
		} else {
			$("#headingCinco").addClass("activo");
			$("#btn-collapseCinco > .btn-mas").css("display","none");
			$("#btn-collapseCinco > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseSeis").click(function(){
		if ($("#headingSeis").hasClass("activo")){
			$("#headingSeis").removeClass("activo");
			$("#btn-collapseSeis > .btn-mas").css("display","flex");
			$("#btn-collapseSeis > .btn-menos").css("display","none");
		} else {
			$("#headingSeis").addClass("activo");
			$("#btn-collapseSeis > .btn-mas").css("display","none");
			$("#btn-collapseSeis > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseSiete").click(function(){
		if ($("#headingSiete").hasClass("activo")){
			$("#headingSiete").removeClass("activo");
			$("#btn-collapseSiete > .btn-mas").css("display","flex");
			$("#btn-collapseSiete > .btn-menos").css("display","none");
		} else {
			$("#headingSiete").addClass("activo");
			$("#btn-collapseSiete > .btn-mas").css("display","none");
			$("#btn-collapseSiete > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseOcho").click(function(){
		if ($("#headingOcho").hasClass("activo")){
			$("#headingOcho").removeClass("activo");
			$("#btn-collapseOcho > .btn-mas").css("display","flex");
			$("#btn-collapseOcho > .btn-menos").css("display","none");
		} else {
			$("#headingOcho").addClass("activo");
			$("#btn-collapseOcho > .btn-mas").css("display","none");
			$("#btn-collapseOcho > .btn-menos").css("display","flex");
		}
	});
	$("#btn-collapseNueve").click(function(){
		if ($("#headingNueve").hasClass("activo")){
			$("#headingNueve").removeClass("activo");
			$("#btn-collapseNueve > .btn-mas").css("display","flex");
			$("#btn-collapseNueve > .btn-menos").css("display","none");
		} else {
			$("#headingNueve").addClass("activo");
			$("#btn-collapseNueve > .btn-mas").css("display","none");
			$("#btn-collapseNueve > .btn-menos").css("display","flex");
		}
	});

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
			autoplayTimeout:2000,
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
    nav: true,
		dots:true,
		dotsContainer:$(".dots-nav-planes"),
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
		margin:150,
    nav:false,
		center:true,
		autoWidth:true,
		autoplay:true,
		autoplayTimeout:3500,
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
	$('.clientes2-carousel').owlCarousel({
    loop:true,
		margin:150,
    nav:false,
		center:true,
		autoWidth:true,
		autoplay:true,
		autoplayTimeout:3000,
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
});

// AOS ANIMATION INICIALIZATION

AOS.init();


// PLANES MODAL ONCLICK

$("#plan-mype").click(function(){
	$("#txt-plan").val("hola, quisiera adquirir el plan MYPE.")
});
$("#plan-crece").click(function(){
	$("#txt-plan").val("hola, quisiera adquirir el plan CRECE.")
});
$("#plan-vuela").click(function(){
	$("#txt-plan").val("hola, quisiera adquirir el plan VUELA.")
});
$("#plan-pro").click(function(){
	$("#txt-plan").val("hola, quisiera adquirir el plan VUELA PRO.")
});
$("#plan-incuba").click(function(){
	$("#txt-plan").val("hola, quisiera adquirir el plan INCUBA.")
});