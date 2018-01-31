$(function() {





$(window).scroll(function  () {
	
	var  wScroll = $(this).scrollTop();
	
		console.log(wScroll);


if (wScroll > 150 ) {

$(".main-navigation-parrent").addClass("main-navigation-parrent-passClass");
$(".main-navigation").addClass("main-navigation_on_scroll");
$("article").css({'margin-top':'35px'});

}//end of main if
 
 if (wScroll < 150) {
$(".main-navigation-parrent").removeClass("main-navigation-parrent-passClass");
$(".main-navigation").removeClass("main-navigation_on_scroll");
$("article").css({'margin-top':'0'});
}//end of main if





//end of scroll
});









$(document).ready(function () {
	$("#brands-1").addClass("brand-leater-active");
	BrandClickerSwitchOnDocRdy("ACCURIST","ACCESSORIZE","ADIDAS","ALPINA","ANIMAL","ANNE KLEIN","ARMANI","AVIATOR");

});


function BrandSwitcher (objectLI , name , linktoo) {
	$(objectLI).attr("href",linktoo);
	$(objectLI).text(" ");
	$(objectLI).text(name);
}

function BrandClickerSwitch (objectBtn, name1, name2 , name3 , name4 , name5, name6, name7, name8, name9, name10,name11,name12) {

	$(objectBtn).click(function  () {
		BrandSwitcher("#brand-1",name1);
		BrandSwitcher("#brand-2",name2);
		BrandSwitcher("#brand-3",name3);
		BrandSwitcher("#brand-4",name4);
		BrandSwitcher("#brand-5",name5);
		BrandSwitcher("#brand-6",name6);
		BrandSwitcher("#brand-7",name7);
		BrandSwitcher("#brand-8",name8);
		BrandSwitcher("#brand-9",name9);
		BrandSwitcher("#brand-10",name10);
		BrandSwitcher("#brand-11",name11);
		BrandSwitcher("#brand-12",name12);

	});

}
function BrandClickerSwitchOnDocRdy (name1, name2 , name3 , name4 , name5, name6, name7, name8, name9, name10,name11,name12) {
		BrandSwitcher("#brand-1",name1);
		BrandSwitcher("#brand-2",name2);
		BrandSwitcher("#brand-3",name3);
		BrandSwitcher("#brand-4",name4);
		BrandSwitcher("#brand-5",name5);
		BrandSwitcher("#brand-6",name6);
		BrandSwitcher("#brand-7",name7);
		BrandSwitcher("#brand-8",name8);
		BrandSwitcher("#brand-9",name9);
		BrandSwitcher("#brand-10",name10);
		BrandSwitcher("#brand-11",name11);
		BrandSwitcher("#brand-12",name12);

}

BrandClickerSwitch("#brands-1","ACCURIST","ACCESSORIZE","ADIDAS","ALPINA","ANIMAL","ANNE KLEIN","ARMANI","AVIATOR");
BrandClickerSwitch("#brands-2","BALL","BARBOUR","BIRLINE","BOCCIA","BRAUN","BREO","BRISTON","BULOVA","BURBERRY");
BrandClickerSwitch("#brands-3","CALVIN KLEIN","CANNIBAL","CASIO","CATH KIDSTON","CERTINA","CITIZEN","CLUSE");
BrandClickerSwitch("#brands-4","DAISY DIXON","DAISY KNIGHTS","DIESEL","DISNEY","DKNY","DOCTOR WHO","DETOMASO","DREYFUSS CO");
BrandClickerSwitch("#brands-5","EBEL","ELLE GIRL","ELLIOT BROWN","ELYSEE","EMPORIO ARMANI","EONE","EPSON","ESPRIT");
BrandClickerSwitch("#brands-6","FESTINA","FIORELLI","FITBIT","FIYTA","FLIK FLAK","FOLLI FOLLIE","FOSSIL");
BrandClickerSwitch("#brands-7","GARMIN","GC","GLYCINE","GUESS","","","","","","","","","","","","");
BrandClickerSwitch("#brands-8","HALCYON DAYS","HAMILTON","HARLEY DAVIDSON","HELLO KITTY","HENRY LONDON","","","","","","","","","","","");
BrandClickerSwitch("#brands-9","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-10","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-11","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-12","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-13","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-14","fasfaf","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-15","","","akjdshkajd","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-16","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-17","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-18","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-19","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-20","","fsafasf","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-21","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-22","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-23","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-24","","","","","","","","","","","","","","","","");
BrandClickerSwitch("#brands-25","","","","","","","asfasfaf","","","","","","","","","");
BrandClickerSwitch("#brands-26","","","","","","","","","","","","","","","","");



LeaterActiveState("#brands-1");
LeaterActiveState("#brands-2");
LeaterActiveState("#brands-3");
LeaterActiveState("#brands-4");
LeaterActiveState("#brands-5");
LeaterActiveState("#brands-6");
LeaterActiveState("#brands-7");
LeaterActiveState("#brands-8");
LeaterActiveState("#brands-9");
LeaterActiveState("#brands-10");
LeaterActiveState("#brands-11");
LeaterActiveState("#brands-12");
LeaterActiveState("#brands-13");
LeaterActiveState("#brands-14");
LeaterActiveState("#brands-15");
LeaterActiveState("#brands-16");
LeaterActiveState("#brands-17");
LeaterActiveState("#brands-18");
LeaterActiveState("#brands-19");
LeaterActiveState("#brands-20");
LeaterActiveState("#brands-21");
LeaterActiveState("#brands-22");
LeaterActiveState("#brands-23");
LeaterActiveState("#brands-24");
LeaterActiveState("#brands-25");
LeaterActiveState("#brands-26");




function LeaterActiveState(ActiveOne) {
	
	$(ActiveOne).click(function  () {
		$(".brand-leater-a").removeClass("brand-leater-active");
		$(this).addClass("brand-leater-active");

	});
}



$("#filter-launch-btn").click(function () {
	$("#your-gender").addClass("brand-filter-p-is-visible");
	$("#filter-btn-male").addClass("filter-btn-is-visible");
	$("#filter-btn-female").addClass("filter-btn-is-visible");
	
	var filter_scroll_top = $("#filter-brand-title").offset().top;
	$("html, body").animate({ scrollTop: filter_scroll_top-45 }, 600);
	
});



$("#filter-btn-male").click(function  () {
	$("#brand-type").addClass("brand-filter-p-is-visible");
	$("#filter-btn-casual").addClass("filter-btn-is-visible");
	$("#filter-btn-spacial").addClass("filter-btn-is-visible");
	$(this).addClass("filter-btn-active");
	$("#filter-btn-female").removeClass("filter-btn-active");
	
});



$("#filter-btn-female").click(function  () {
	$("#brand-type").addClass("brand-filter-p-is-visible");
	$("#filter-btn-casual").addClass("filter-btn-is-visible");
	$("#filter-btn-spacial").addClass("filter-btn-is-visible");
	$(this).addClass("filter-btn-active");
	$("#filter-btn-male").removeClass("filter-btn-active");

});



$("#filter-btn-casual , #filter-btn-spacial").click(function  () {
	
	$("#brand-style").addClass("brand-filter-p-is-visible");
	$(this).toggleClass("filter-btn-active");
	$(".brand-filter-sty-wraper button").each(function  (i) {
			setTimeout(function  () {
			$(".brand-filter-sty-wraper button").eq(i).addClass("brand-filter-sty-mat-is-visible"); 
		}  , 100 * (i+1) );
		
		
		});

//end of $.click
});


$("#filter-btn-casual").click(function  () {
	$(this).addClass("filter-btn-active");
	$("#filter-btn-spacial").removeClass("filter-btn-active");
	var gender_scroll_top = $("#your-gender").offset().top;
	$("html, body").animate({ scrollTop: gender_scroll_top-45 }, 600);
	
});


$("#filter-btn-spacial").click(function  () {
	$(this).addClass("filter-btn-active");
	$("#filter-btn-casual").removeClass("filter-btn-active");
	var gender_scroll_top = $("#your-gender").offset().top;
	$("html, body").animate({ scrollTop: gender_scroll_top-45 }, 600);
	

});




ActiveStyleBtn("#brand-auto");
ActiveStyleBtn("#brand-digital");
ActiveStyleBtn("#brand-dress");
ActiveStyleBtn("#brand-urban");
ActiveStyleBtn("#brand-lux");
ActiveStyleBtn("#brand-ftion");
ActiveStyleBtn("#brand-sport");
ActiveStyleBtn("#brand-chg");
ActiveStyleBtn("#brand-dive");


function ActiveStyleBtn(actie) {
	$(actie).click(function(){
		$(".brand-filter-sty").removeClass("brand-filter-sty-active");
		$(actie).addClass("brand-filter-sty-active");
		$("#brand-material").addClass("brand-filter-p-is-visible");
		var type_scroll_top = $("#brand-type").offset().top;
		$("html, body").animate({ scrollTop: type_scroll_top-45 }, 600);
	$().toggleClass
	

		$(".brand-filter-mat-wraper button").each(function  (i) {
			setTimeout(function  () {
			$(".brand-filter-mat-wraper button").eq(i).addClass("brand-filter-sty-mat-is-visible"); 
		}  , 80 * (i+1) );
		
		
		});
	});
}


ActiveMaterialBtn("#brand-wood");
ActiveMaterialBtn("#brand-leather");
ActiveMaterialBtn("#brand-rubber");
ActiveMaterialBtn("#brand-steal");



function ActiveMaterialBtn(actie) {
	$(actie).click(function(){
		$(".brand-filter-mat").removeClass("brand-filter-mat-active");
		$(actie).addClass("brand-filter-mat-active");

		$("#brand-color").addClass("brand-filter-p-is-visible");
		$(".brand-filter-colors").addClass("brand-filter-colors-is-visible");
		var style_scroll_top = $("#brand-style").offset().top;
		$("html, body").animate({ scrollTop: style_scroll_top }, 600);
	

		
	});
}

ActiveColorBtn(".first-to-first");
ActiveColorBtn(".first-to-second");
ActiveColorBtn(".first-to-third");
ActiveColorBtn(".first-to-fourth");
ActiveColorBtn(".first-to-fift");
ActiveColorBtn(".first-to-sixt");
ActiveColorBtn(".second-to-first");
ActiveColorBtn(".second-to-second");
ActiveColorBtn(".second-to-third");
ActiveColorBtn(".second-to-fourth");
ActiveColorBtn(".second-to-fift");
ActiveColorBtn(".second-to-sixt");
ActiveColorBtn(".third-to-first");
ActiveColorBtn(".third-to-second");
ActiveColorBtn(".third-to-third");
ActiveColorBtn(".third-to-fourth");
ActiveColorBtn(".third-to-fift");
ActiveColorBtn(".third-to-sixt");


function ActiveColorBtn(actie) {
	$(actie).click(function(){
		$(".brand-filter-first-colors").removeClass("brand-filter-first-colors-active");

		$(".serch_brands_btn").addClass("serch_brands_btn_is_visible");

		$(actie).addClass("brand-filter-first-colors-active");

		

		
	});
}















//krai na main $(doc).ready
});