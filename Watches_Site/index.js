$(document).ready(function () {

$(window).scroll(function  () {
	
	var  wScroll = $(this).scrollTop();
	
		console.log(wScroll);

	$(".logo").css({

'transform':'translate(0px, '+ wScroll/2+'%)'

	});

$(".back-watch").css({

'transform':'translate(0px, '+ wScroll/4+'%)'

	});
$(".fore-watch").css({

'transform':'translate(0px, -'+ wScroll/40+'%)'

	});





//navigation scroll lock on  top
// the class .main-navigation-parrent
if (wScroll > 400 ) {

$(".main-navigation-parrent").addClass("main-navigation-parrent-passClass");
$(".main-navigation").addClass("main-navigation_on_scroll");
$("article").css({'margin-top':'35px'});

}//end of main if
 
 if (wScroll < 400) {
$(".main-navigation-parrent").removeClass("main-navigation-parrent-passClass");
$(".main-navigation").removeClass("main-navigation_on_scroll");

$("article").css({'margin-top':'0'});
}//end of main if


if (wScroll > $(".back-watch").offset().top - ($(window).height() / 1.1)) {
	$(".watch-pics figure").each(function  (i) {
		
		setTimeout(function  () {
			
		
		$(".watch-pics figure").eq(i).addClass('is-showing');
	}  , 150 * (i+1) );
	
	});

}//end of main if


if ( wScroll > 1300) {
$(".watch-details span").each(function  (i) {
		setTimeout(function  () {
		$(".watch-details span").eq(i).addClass('is-showing-span'); 
	}  , 200 * (i+1) );
	
	
	});


}//end of main if














//krai na $(window).scroll
});















function PriceHovers (main , mainFigcap) {
		
	$(main).hover(function  () {
		$(mainFigcap).css({'left':'0',
			'transition':'all 0.3s ease-in-out'
			});
		/* $(img4scale).css({'transform':'scale(1.2)'}); */
			 



	} , function  () {
		$(mainFigcap).css({'left':'-103%'});
	});
	
}

PriceHovers(".fig1" , ".fig1 .price-figure");
PriceHovers(".fig2" , ".fig2 .price-figure");
PriceHovers(".fig3" , ".fig3 .price-figure");
PriceHovers(".fig4" , ".fig4 .price-figure");
PriceHovers(".fig5" , ".fig5 .price-figure");
PriceHovers(".fig6" , ".fig6 .price-figure");



//krai na $(decument).ready()
});