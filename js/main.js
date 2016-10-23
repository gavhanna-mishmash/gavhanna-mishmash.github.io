;( function( $ ) {


  // $('.nav-item a').click(function(e) {
  //   var goTo = $(this).attr('href');
  //   $(".works-content").animate({scrollTop:$(goTo).offset().top}, 1000);
  //   e.preventDefault();
  // });

	$( '.swipebox' ).swipebox( {
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
	} );

	$("#dropdown-button").on("click", function(){
		$(this).toggleClass("become-x");
		$(".left-bar").toggleClass("open");
	});

	$(".nav-item").on("click", function(){
		$(".left-bar").toggleClass("open");
		$("#dropdown-button").toggleClass("become-x");
	});

} )( jQuery );
