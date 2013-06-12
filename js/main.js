jQuery(document).ready(function($) {

// Slides

	$(".btn-thetile").click(function(){
		$(".understand").hide();
		$(".visualize").fadeIn();
		$(".btn-thetile").addClass("atv");
		$("li.btn-thetile").siblings().removeClass("atv");
	});

	$(".btn-understand").click(function(){
		$(".visualize").hide();
		$(".understand").fadeIn();
		$(".btn-understand").addClass("atv");
		$("li.btn-understand").siblings().removeClass("atv");
	});

	$(".btn-mosaic").click(function(){
		$(".peer, .recommendations").hide();
		$(".mosaic").fadeIn();
		$(".btn-mosaic").addClass("atv");
		$("li.btn-mosaic").siblings().removeClass("atv");
	});

	$(".btn-peer").click(function(){
		$(".mosaic, .recommendations").hide();
		$(".peer").fadeIn();
		$(".btn-peer").addClass("atv");
		$("li.btn-peer").siblings().removeClass("atv");
	});

	$(".btn-recommendations").click(function(){
		$(".mosaic, .peer").hide();
		$(".recommendations").fadeIn();
		$(".btn-recommendations").addClass("atv");
		$("li.btn-recommendations").siblings().removeClass("atv");
	});


	// Mobile Menu
	$(function(){
		$(".trigger-mobile").click(function(){
			$(".mobile-menu").slideToggle(500);
		});
	});

	// Play Video

	$(".load-video").click(function(){
		$(".smooth-video").animate({ backgroundColor: "#000000"}, 1000);
		$(".bg-banner, .load-video, .form-request, #banner h2, #banner h3").delay(800).fadeOut("slow");
		$("#banner").delay(1500).css("padding-top", "0px");
		$(".video").delay(1200).fadeIn("slow");
	});
	
});