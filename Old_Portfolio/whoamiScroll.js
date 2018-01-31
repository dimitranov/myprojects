$(function () {
	jQuery(document).ready(function($) {

if($(window).width() > 480){

		$("*").removeClass('out_of_fade');
		setTimeout(function () {
			$(".title").addClass('in_place');
		},100);
			setTimeout(function () {
		$(".who_am_i_text").addClass('in_place');
		},300);

		setTimeout(function () {
			$(".photo_wraper").addClass('in_place');
		},350);


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


		setTimeout(function () {
			$(".title").addClass('in_place');
		},100);
			setTimeout(function () {
		$(".who_am_i_text").addClass('in_place');
		},300);
		$(window).scroll(function(event) {

			var wScroll = $(this).scrollTop();
			var windHeight = $(window).height();

			var the_vision = $(".the_vision").offset().top - wScroll;
			var the_vision_text = $(".the_vision_text").offset().top - wScroll;
			var the_quest = $(".the_quest").offset().top - wScroll;
			var the_quest_text = $(".the_quest_text").offset().top - wScroll;
			var who_am_i_main_btn = $(".who_am_i_main_btn").offset().top - wScroll;




	if (the_vision < windHeight-(windHeight*0.1)) {
		$(".the_vision").addClass('in_place');
		}
	if (the_vision_text < windHeight-(windHeight*0.1)) {
		$(".the_vision_text").addClass('in_place');
		}

	if (the_quest < windHeight-(windHeight*0.1)) {
		$(".the_quest").addClass('in_place');
		}
	if (the_quest_text < windHeight-(windHeight*0.1)) {
		$(".the_quest_text").addClass('in_place');
		}






		});


	}













	});//doc rdy
});//jq







/*
setTimeout(function () {

		setTimeout(function () {
			$(".under-title").addClass('in_place');
		},200);
		setTimeout(function () {
			$(".introduction").addClass('in_place');
		},400);
		setTimeout(function () {
			$(".discover-me-btn").addClass('in_fade');
		},800);

		setTimeout(function () {
			$(".social-media-wraper ul li").each(function(i) {
				setTimeout(function  () {


						$(".social-media-wraper ul li").eq(i).addClass('in_place');
					}  , 150 * (i+1) );
				});
			},1200);
		});

		setTimeout(function () {
			$(".under-social-media , .C_R_p").addClass('in_fade');
		},1500);

		*/
