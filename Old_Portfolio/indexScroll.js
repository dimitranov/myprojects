$(function () {
	jQuery(document).ready(function($) {
		setTimeout(function () {
			$(".title").addClass('in_place');
		},100);
		setTimeout(function () {
			$(".under-title").addClass('in_place');
		},300);
		setTimeout(function () {
			$(".introduction").addClass('in_place');
		},600);
		setTimeout(function () {
			$(".discover-me-btn").addClass('in_fade');
		},1200);
		
		setTimeout(function () {
			$(".social-media-wraper ul li").each(function(i) {
				setTimeout(function  () {
				
					
						$(".social-media-wraper ul li").eq(i).addClass('in_place');
					}  , 150 * (i+1) );
				});
			},1500);
		});

		setTimeout(function () {
			$(".under-social-media , .C_R_p").addClass('in_fade');
		},1800);
	
});











/*

$(".watch-pics figure").each(function  (i) {
		
		setTimeout(function  () {
			
		
		$(".watch-pics figure").eq(i).addClass('is-showing');
	}  , 150 * (i+1) );
	
	});
*/