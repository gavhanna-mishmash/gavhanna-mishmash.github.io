;( function($){

	$('.swipebox').swipebox({
		useCSS : true,
		useSVG : true,
		initialIndexOnArray : 0,
		hideCloseButtonOnMobile : false,
		removeBarsOnMobile : true,
		hideBarsDelay : 3000,
		videoMaxWidth : 1140,
		beforeOpen: function() {},
		afterOpen: null,
		afterClose: function() {},
		loopAtEnd: false
	});

	$("#dropdown-button").on("click", function(){
		$(this).toggleClass("become-x");
		$(".left-bar").toggleClass("open");
	});

	$(".nav-item").on("click", function(){
		$(".left-bar").toggleClass("open");
		$("#dropdown-button").toggleClass("become-x");
	});

})(jQuery);
