$(function () {
	jQuery(document).ready(function($) {
		setTimeout(function () {
			$(".title").addClass('in_place');
		},100);
	});//doc rdy
});//jq



/*
function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top - $(window).scrollTop();
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}

if(isOnScreen($('#myDivId'))){    sdfsadf } 
*/