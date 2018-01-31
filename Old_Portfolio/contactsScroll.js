$(function () {
	jQuery(document).ready(function($) {
		
if($(window).width() > 480){
	$("*").removeClass('out_of_fade');
	setTimeout(function () {
			$(".title").addClass('in_place');
		},100);

	setTimeout(function () {
		$(".connect_me_img").addClass('in_place');
		},300);

	setTimeout(function () {
		$(".connect_me_p").addClass('in_place');
		},400);



setTimeout(function () {
	$('.content_holder_block .info_holder').each(function(i) {
		setTimeout(function  () {
			$('.content_holder_block .info_holder').eq(i).addClass('in_place');
			}, 450 * (i+1) );
		});


},600);

}else
{
	
	
	

	setTimeout(function () {
				$(".title").addClass('in_place');
			},100);

		setTimeout(function () {
			$(".connect_me_img").addClass('in_place');
			},300);

		setTimeout(function () {
			$(".connect_me_p").addClass('in_place');
			},400);
		


	$(window).scroll(function(event) {

		var wScroll = $(this).scrollTop();
		var windHeight = $(window).height();

		var holder1 = $("#holder1").offset().top - wScroll;
		var holder2 = $("#holder2").offset().top - wScroll;
		var holder3 = $("#holder3").offset().top - wScroll;
		
		
			


	if (holder1 < windHeight-(windHeight*0.1)) {
		$("#holder1").addClass('in_place');
		}
	if (holder2 < windHeight-(windHeight*0.1)) {
		$("#holder2").addClass('in_place');
		}
		
	if (holder3 < windHeight-(windHeight*0.1)) {
		$("#holder3").addClass('in_place');
	}

			




		});












}//else






	});//doc rdy
});//jq







/*
if($(window).width() > 480){

		$("*").removeClass('out_of_fade');
		setTimeout(function () {
			$(".title").addClass('in_place');
		},100);
			setTimeout(function () {
		$(".who_am_i_text").addClass('in_place');
		},300);
			

			setTimeout(function () {
		$(".the_vision").addClass('in_place');
		},400);
			setTimeout(function () {
		$(".the_vision_text").addClass('in_place');
		},800);


			setTimeout(function () {
		$(".the_quest").addClass('in_place');
		},1000);
			setTimeout(function () {
		$(".the_quest_text").addClass('in_place');
		},1400);
		
		
		
	

	}else{
		$("*").removeClass('out_of_place');

		setTimeout(function () {
			$(".title").addClass('in_place');
		},100);
			setTimeout(function () {
		$(".who_am_i_text").addClass('in_place');
		},300);
		$(window).scroll(function(event) {

			let wScroll = $(this).scrollTop();
			let windHeight = $(window).height();

			let the_vision = $(".the_vision").offset().top - wScroll;
			let the_vision_text = $(".the_vision_text").offset().top - wScroll;
			let the_quest = $(".the_quest").offset().top - wScroll;
			let the_quest_text = $(".the_quest_text").offset().top - wScroll;
			let who_am_i_main_btn = $(".who_am_i_main_btn").offset().top - wScroll;
			
			


	if (the_vision < windHeight-(windHeight*0.1)) {
		$(".the_vision").addClass('in_fade');
		}
	if (the_vision_text < windHeight-(windHeight*0.1)) {
		$(".the_vision_text").addClass('in_fade');
		}
		
	if (the_quest < windHeight-(windHeight*0.1)) {
		$(".the_quest").addClass('in_fade');
		}
	if (the_quest_text < windHeight-(windHeight*0.1)) {
		$(".the_quest_text").addClass('in_fade');
		}


			



		});



		*/