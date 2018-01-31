$(function () {
	jQuery(document).ready(function($) {
		



setTimeout(function () {
			$(".title").addClass('in_place');
		


		},100);



/*
setTimeout(function () {
$('.skills_conteiner .out_of_place').each(function(i) {
		setTimeout(function  () {
			$('.skills_conteiner .out_of_place').eq(i).addClass('in_place');
			$('.skills_holder ul li').each(function(i) {
				setTimeout(function  () {
					$('.skills_holder ul li').eq(i).addClass('in_place');
				},250 * (i+1));
			});



			},250 * (i+1) );
		});

},300);
*/
setTimeout(function () {
	$(".skills_holder").addClass('in_place');
	$('.skills_holder ul li').each(function(i) {
				setTimeout(function  () {
					$('.skills_holder ul li').eq(i).addClass('in_place');
				},110 * (i+1));
	});
},400);



	});//doc rdy
});//jq




/*if($(window).width() > 480){
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
	$("*").removeClass('out_of_place');
	setTimeout(function () {
		$(".title").addClass('out_of_place');
		$(".connect_me_img").addClass('out_of_place');
		$(".connect_me_p").addClass('out_of_place');
	},1);

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

		let wScroll = $(this).scrollTop();
		let windHeight = $(window).height();

		let holder1 = $("#holder1").offset().top - wScroll;
		let holder2 = $("#holder2").offset().top - wScroll;
		let holder3 = $("#holder3").offset().top - wScroll;
		
		
			


	if (holder1 < windHeight-(windHeight*0.1)) {
		$("#holder1").addClass('in_fade');
		}
	if (holder2 < windHeight-(windHeight*0.1)) {
		$("#holder2").addClass('in_fade');
		}
		
	if (holder3 < windHeight-(windHeight*0.1)) {
		$("#holder3").addClass('in_fade');
	}

			



		});
*/