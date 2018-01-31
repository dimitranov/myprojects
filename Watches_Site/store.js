
/*var FirstName2 = React.createClass({ 

render : function() {
       return (
        	<div className="store-test-li">
	        	<p>fsdafasfaf</p>
	        </div>
        )
    }


});


var FigureAll = React.createClass({ 

render : function() {
       return (
	        	
        )
    }


});

*/

var ShopingCarWindow= React.createClass({
	render:function () {
		return(
			<div className='cart-window-wraper'>
				<div className="cart-window">
				<strong className="cart-close-btn" >&#10060;</strong>
				<p className="store-results-and-filter-title-p">Cart</p>
				<div className="cart-div-over-table">
					<table className="cart-table">
						<tbody id="cart-table-body">
							<tr className="cart-table-head">
							    <th>Image</th>
							    <th>Model</th>
							    <th>Price</th>
							    <th>Off</th>
							    <th>Quantity</th>
							    <th>All Price</th>
							    <th>Item ID</th>
							    <th>Remove</th>
						  	</tr>
						  	
					  </tbody>
					</table>
					</div>
					<div className="cart-total-and-btn"><button id="buy-now-btn-cart" className="modal-buy-btn-cart">BUY</button>
						<p className="cart-total-price">Total price: &nbsp;&nbsp;  $<span>0</span></p>
						
				</div>
				</div>
				</div>
			)
	}
});








var ShopingCar= React.createClass({
	render:function () {
		return(
			<div className="cart-main-div-father">
				<div className="cart-block-div">
					<img src="assets/shoping-cart.png" className="cart-img"/>
				</div>
				<div className="cart-block-div">
					<p className="cart-items-count" id="cart-item-count">0</p>
					<p className="cart-items-price" id="cart-items-price-sum">0$</p>
				</div>
			</div>
			)
	}
});

var Clicker = React.createClass({



render:function () {
	return <button className="store-filter-apply-button" onClick={this.props.clickTest}>Click4Test</button>
}

});

var Modal4Watch = React.createClass({

	render:function () {
	
		return(
			<div className='store-watch-modal-wraper'>


				<div className='store-watch-modal'>
					<strong className="modal-close-btn" >&#10060;</strong>
					<div className="modal-arrow-left"><img src="assets/left-arrow-before.png" id="left-arrow-modal"/></div>
					<div className="modal-img-wraper"><img className="modal-img" src={data2[0].img}/></div>
					<div className="modal-data-wraper">
						<p className="modal-watch-name"><strong id="span-name">{data2[0].name}</strong></p>
						<p className="modal-watch-model"><span id="span-model">{data2[0].model}</span></p>
						<p className="modal-watch-ar_num">Item #<span id="span-ar_num">{data2[0].articule_number}</span></p>
						<p className="modal-original-price">Order now: +359 887 234 562</p>
						<p className="modal-watch-price"><i id="span-price">{"$"+data2[0].price}</i>  <span  className="modal-watch-off" id="span-off">{data2[0].off+"% off"}</span></p>
						<p className="modal-original-price">Original price:  <span id="span-ori-price"></span></p>
						<p className="modal-original-price shiping-price">Shiping price:  <span id="span-shipping"></span></p>
						<p className="modal-original-price avaliblility-p">In stock:  <span id="span-avalible"></span></p>
						<button id="buy-now-btn" className="modal-buy-btn">BUY NOW</button>
						<button id="to-cart-btn" className="modal-buy-btn">TO CART</button>
						<p className="added-to-cart-popup">ADDED TO CART</p>
						<div className="modal-switchers-arrow">
							
							
						</div>
						
					</div>
					<div className="modal-arrow-right"><img src="assets/right-arrow-before.png"id="right-arrow-modal"/></div>
				</div>
			</div>
			)
	}


});


var List = React.createClass({
	clickEring:function () {
		console.log("hey");	
	},

	renderAll:function() {
		const data = this.props.data;

				const dataList = data.map(watch=>{

					return(
							<figure key={watch.key} onClick={this.clickEring} id={watch.id} className={"store-watch-object" + ' ' + watch.gender + ' ' + watch.color }><img src={watch.img} className="store-fiure-img "/>
								    <figcaption className="store-title-figure"><strong>{watch.name}</strong> {watch.model}</figcaption>
								    <figcaption className="store-price-figure">Price:<strong> {watch.price}</strong>$<span> {watch.off}% OFF</span></figcaption>
							</figure>
							
							)
					});
				return dataList;
	},

	render:function () {
		
		return (
			<div>{this.renderAll()}</div>
			)
		}

});

var Filters = React.createClass({
	render:function () {
		return(
			<div>
				<button onClick={this.SortMan} id="FilterButton" className="store-filter-apply-button">Apply</button>
				
					<div>
						<p className="store-filters-section-title">By Gender</p>
							<label className="store-filter-checkbox-label">
								<input type="checkbox" id="man-checkbox" value="man" className="store-filter-checkbox"/>Man</label>
							<label className="store-filter-checkbox-label">
								<input type="checkbox" id="woman-checkbox" value="woman" className="store-filter-checkbox"/>Woman</label>
						
					</div>
					<div>
						<p className="store-filters-section-title">By Price($)</p><span id="clear-inputs" className="store-clear-inputs-price">Clear</span>
						<label className="store-filter-checkbox-label">From:<input type="text" className="filters-price-input" id="filter_from_input"/></label>
						<label className="store-filter-checkbox-label">To:<input type="text" className="filters-price-input" id="filter_to_input"/></label>
					</div>

					<div>
						<p className="store-filters-section-title">By Color</p>
						
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="white-checkbox" value="white" className="store-filter-checkbox"/>White</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="brown-checkbox" value="brown" className="store-filter-checkbox"/>Brown</label>		
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="black-checkbox" value="black" className="store-filter-checkbox"/>Black</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="red-checkbox" value="red" className="store-filter-checkbox"/>Red</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="yellow-checkbox" value="yellow" className="store-filter-checkbox"/>Yellow</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="green-checkbox" value="green" className="store-filter-checkbox"/>Green</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="blue-checkbox" value="blue" className="store-filter-checkbox"/>Blue</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="purple-checkbox" value="purple" className="store-filter-checkbox"/>Purple</label>

					</div>
					

			</div>
			)
	}
});



var Store = React.createClass({ 

	




	render : function() {
		
				return (

		       		<div className="store-app-all-wraper">
		       		<ShopingCarWindow/>
		       		<ShopingCar/>
		       		
		       		<Modal4Watch modalData={this.props.data}/>
					<div className="store-filters-wraper">
						<p className="store-results-and-filter-title-p">Filters</p>
						<Filters/>
						
					</div>

		        	<div className="store-articules-wraper">
			        	<p className="store-results-and-filter-title-p">Results</p>
			        	<List data={this.props.data}/>
			        </div>
			        </div>
		        )
	}


});

$(document).ready(function () {
	

var counterClick ;

	var ClMa="",ClWo="",ClBr="", ClBl="", ClWh="",ClRd="",ClYl="",ClBlu="",ClPr="",ClGr="";

	$("#man-checkbox").click(function () {
		if($(this).prop('checked')){
			ClMa = ".class_man";
			
		}
		if(!$(this).prop('checked')){
			ClMa = "";
		}	
	});
	
	$("#woman-checkbox").click(function () {
		if($(this).prop('checked')){
			ClWo = ".class_woman";
		}
		if(!$(this).prop('checked')){
			ClWo = "";
		}	
	});

	$("#white-checkbox").click(function () {
		if($(this).prop('checked')){
			ClWh = ".class_white";
		}
		if(!$(this).prop('checked')){
			ClWh = "";
		}	
	});
	$("#brown-checkbox").click(function () {
		if($(this).prop('checked')){
			ClBr = ".class_brown";
		}
		if(!$(this).prop('checked')){
			ClBr = "";
		}	
	});
	$("#black-checkbox").click(function () {
		if($(this).prop('checked')){
			ClBl = ".class_black";
		}
		if(!$(this).prop('checked')){
			ClBl = "";
		}	
	});
	$("#red-checkbox").click(function () {
		if($(this).prop('checked')){
			ClRd = ".class_red";
		}
		if(!$(this).prop('checked')){
			ClRd = "";
		}	
	});
	$("#yellow-checkbox").click(function () {
		if($(this).prop('checked')){
			ClYl = ".class_yellow";
		}
		if(!$(this).prop('checked')){
			ClYl = "";
		}	
	});
	$("#green-checkbox").click(function () {
		if($(this).prop('checked')){
			ClGr = ".class_green";
		}
		if(!$(this).prop('checked')){
			ClGr = "";
		}	
	});
	$("#blue-checkbox").click(function () {
		if($(this).prop('checked')){
			ClBlu = ".class_blue";
		}
		if(!$(this).prop('checked')){
			ClBlu = "";
		}	
	});
	$("#purple-checkbox").click(function () {
		if($(this).prop('checked')){
			ClPr = ".class_purple";
		}
		if(!$(this).prop('checked')){
			ClPr = "";
		}	
	});

$("#filter_from_input").append('$');
$("#filter_to_input").append('$');
/*
<tr className="cart-articule-row">
							    <td><img src={data2[0].img} className="cart-articule-img"/></td>

							    <td>{data2[0].name +" "+ data2[0].model}</td>
							    <td>{data2[0].price}$</td>
							    <td>{data2[0].off}%</td>
							    <td>2</td>
							    <td>893$</td>
							    <td><button className="cart-remove-btn" id="">REMOVE</button></td>
						  </tr> 						    
						  <tr className="cart-articule-row">
							    <td><img src={data2[2].img} className="cart-articule-img"/></td>
							    <td>{data2[2].name +" "+ data2[2].model}</td>
							    <td>{data2[2].price}$</td>
							    <td>{data2[2].off}%</td>
							    <td>2</td>
							    <td>893$</td>
							    <td><button className="cart-remove-btn" id="">REMOVE</button></td>
						  </tr>
						  <tr className="cart-articule-row">
							    <td><img src={data2[2].img} className="cart-articule-img"/></td>
							    <td>{data2[2].name +" "+ data2[2].model}</td>
							    <td>{data2[2].price}$</td>
							    <td>{data2[2].off}%</td>
							    <td>2</td>
							    <td>893$</td>
							    <td><button className="cart-remove-btn" id="">REMOVE</button></td>
						  </tr>
*/



$("#clear-inputs").click(function () {
	$("#filter_from_input").val("");
	$("#filter_to_input").val("");
});
	var FROM, TO;
$("#FilterButton").bind("click",function () {
 


 FROM = "0";
 TO = "0";

 FROM = parseInt($("#filter_from_input").val());
 TO = parseInt($("#filter_to_input").val());

if($("#filter_from_input").val() == "" && $("#filter_to_input").val() == "" ){

		$(".store-watch-object").hide();
	
						

						if ($("#woman-checkbox").prop('checked') && $("#man-checkbox").prop('checked') ) {
							$(".store-watch-object").show();
						}
						if (!$("#woman-checkbox").prop('checked') && !$("#man-checkbox").prop('checked') ) {
								
								$(ClBr).show();
								$(ClBl).show();
								$(ClWh).show();
								$(ClRd).show();
								$(ClYl).show();
								$(ClGr).show();
								$(ClBlu).show();
								$(ClPr).show();

						}
						
						
						
						
						setTimeout(function () {
							
							
							if (!$("#woman-checkbox").prop('checked') && 
								!$("#man-checkbox").prop('checked') && 
								!$("#white-checkbox").prop('checked') && 
								!$("#black-checkbox").prop('checked')&& 
								!$("#brown-checkbox").prop('checked') && 
								!$("#red-checkbox").prop('checked')  && 
								!$("#yellow-checkbox").prop('checked')  && 
								!$("#green-checkbox").prop('checked')  && 
								!$("#blue-checkbox").prop('checked')  && 
								!$("#purple-checkbox").prop('checked') ) {
								
								$(".store-watch-object").show();
							}


							var RT = ClMa  + ClWo  + ClBr  + ClBl  + ClWh  + ClRd + ClYl+ ClGr+ ClBlu + ClPr;

							$(RT).show();

							console.log(RT);


						},200);
}else if ($("#filter_from_input").val() !== "" && $("#filter_to_input").val() !== "" ) {


$(".store-watch-object").show();
					$(".store-articules-wraper div .store-watch-object").each(function(i) {
								
								
								
								
								
								
								if($(".store-price-figure strong").eq(i).text() < FROM ){
									$(".store-price-figure strong").eq(i).parent().parent().hide();
								
								}
								if( $(".store-price-figure strong").eq(i).text()> TO   ){
									$(".store-price-figure strong").eq(i).parent().parent().hide();
								
								}
								

								//console.log(i+"-"+ price );

							//end of each()
							});

}





//end of filter click()
});


	


Modal_apearing(1);
Modal_apearing(2);
Modal_apearing(3);
Modal_apearing(4);
Modal_apearing(5);
Modal_apearing(6);
Modal_apearing(7);
Modal_apearing(8);
Modal_apearing(9);
Modal_apearing(10);
Modal_apearing(11);
Modal_apearing(12);
Modal_apearing(13);
Modal_apearing(14);
Modal_apearing(15);
Modal_apearing(16);



$(".store-watch-modal-wraper").hide();
$(".cart-window-wraper").hide();
function Modal_apearing(num) {
	
	$("#watch"+ num).click(function () {
		counterClick = num;
		console.log(counterClick);
		var  cenaPredi, cenaSega, promenenProcent, shipingIf;
		promenenProcent = 100 - data2[num-1].off;
		cenaSega=data2[num-1].price;
		cenaPredi = ((cenaSega*100)/promenenProcent).toFixed(0);
		shipingIf = (data2[num-1].shiping == "Free")? "Free" : "$"+data2[num-1].shiping;
		
		$("#span-name").text(data2[num-1].name);
	    $("#span-model").text(data2[num-1].model);
	    $("#span-price").text("$"+cenaSega);
	    $("#span-off").text(data2[num-1].off+"% off");
	    $("#span-ori-price").text("$"+cenaPredi);
	    $("#span-shipping").text(shipingIf);
	    $("#span-avalible").text(data2[num-1].availability);
	    $(".modal-img").attr("src", data2[num-1].img); 
	    $("#span-ar_num").text(data2[num-1].articule_number);
	    if(data2[num-1].availability=="YES"){
	    	$(".avaliblility-p span").css('color','green');
	    }else{
	    	$(".avaliblility-p span").css('color','red');
	    }

	});


}



$(".store-watch-object").click(function () {
	$(".store-watch-modal-wraper").show();
	$(".store-watch-modal-wraper").addClass("store-watch-modal-wraper-is-visible");
$(".store-watch-modal").addClass("store-watch-modal-is-visible");
});

$(".modal-close-btn").click(function () {
	counterClick = 0;	console.log(counterClick);
	$(".store-watch-modal-wraper").removeClass("store-watch-modal-wraper-is-visible");
$(".store-watch-modal").removeClass("store-watch-modal-is-visible");
});




$("#left-arrow-modal").hover(function() {
	
	$(this).attr('src', 'assets/left-arrow.png');
}, function() {
	
	$(this).attr('src', 'assets/left-arrow-before.png');
});


$("#right-arrow-modal").hover(function() {
	$(this).attr('src', 'assets/right-arrow.png');
}, function() {
	$(this).attr('src', 'assets/right-arrow-before.png');
});







function nextWatch(counter) {
	
		var  cenaPredi, cenaSega, promenenProcent, shipingIf;
		promenenProcent = 100 - data2[counter-1].off;
		cenaSega=data2[counter-1].price;
		cenaPredi = ((cenaSega*100)/promenenProcent).toFixed(0);
		shipingIf = (data2[counter-1].shiping == "Free")? "Free" : "$"+data2[counter-1].shiping;
		
		$("#span-name").text(data2[counter-1].name);
	    $("#span-model").text(data2[counter-1].model);
	    $("#span-price").text("$"+cenaSega);
	    $("#span-off").text(data2[counter-1].off+"% off");
	    $("#span-ori-price").text("$"+cenaPredi);
	    $("#span-shipping").text(shipingIf);
	    $("#span-avalible").text(data2[counter-1].availability);
	    $(".modal-img").attr("src", data2[counter-1].img);
	    $("#span-ar_num").text(data2[counter-1].articule_number); 
	    if(data2[counter-1].availability=="YES"){
	    	$(".avaliblility-p span").css('color','green');
	    }else{
	    	$(".avaliblility-p span").css('color','red');
	    }
}






$("#right-arrow-modal").click(function() {
counterClick++;

	if (counterClick == data2.length ) {
		counterClick -= data2.length ;
	}else nextWatch(counterClick);
	$(".added-to-cart-popup").removeClass('added-to-cart-popup-is-visible');
	console.log(counterClick);
});


$("#left-arrow-modal").click(function() {
counterClick--;
console.log(counterClick);
	if(counterClick == ""){
		counterClick += data2.length;
	}else nextWatch(counterClick);
	 
$(".added-to-cart-popup").removeClass('added-to-cart-popup-is-visible');


});
$(window).scroll(function  () {
	
		var  wScroll = $(this).scrollTop();
	
	
					
	//end of 	$(window).scroll(
});






var ActiculesInCart = new Array;
var ActiculesInCartPrice = new Array;
var AddCartClicker = 0;
var CunterForArticulsINCart = 0;







$("#to-cart-btn").click(function () {
			
			CunterForArticulsINCart++;
			AddCartClicker++;

			var _priceWith = $("#span-price").text();
			var _price = _priceWith.substring(1, 8);

			var cartPrice = parseInt(_price);
			
			for (var i = 0; i < ActiculesInCartPrice.length; i++) {
			    cartPrice += ActiculesInCartPrice[i] << 0;
			}
				ActiculesInCart.push(CunterForArticulsINCart);
				ActiculesInCartPrice.push(parseInt(_price));

			$("#cart-item-count").text(CunterForArticulsINCart);
			$("#cart-items-price-sum").text(cartPrice).append('$');
				$("#cart-item-count").fadeOut(50).delay( 100 ).fadeIn( 200 );
				$("#cart-items-price-sum").fadeOut(50).delay( 100 ).fadeIn( 200 );
				$(".cart-img").animate({'left':(-10)+'px'},50)
				.animate({'left':(+10)+'px'},50)
				.animate({'left':(-10)+'px'},50)
				.animate({'left':(+20)+'px'},50);
				
		    
		    

				
				console.log(ActiculesInCartPrice + "    " +CunterForArticulsINCart);
				

			var indexgg = data2.map(function(e) { 
					return e.articule_number; 
				}).indexOf($("#span-ar_num").text());

			AddNewRowTOcart(indexgg);

			$(".added-to-cart-popup").addClass('added-to-cart-popup-is-visible');



			$(".cart-total-price span").text(cartPrice+"$");




});


//namirame indexa po articule_number koito sa v masiva ActiculesInCart




$(".cart-close-btn").click(function () {
	
	$("#cart-items-price-sum").text($(".cart-total-price span").text()).append('$');
	$("#cart-item-count").text(CunterForArticulsINCart);
	ActiculesInCartPrice.length=0;
	ActiculesInCartPrice.push(parseInt($("#cart-items-price-sum").text()));
	$(".cart-window").removeClass('cart-window-is-visible');
	$(".cart-window-wraper").removeClass("cart-window-wraper-is-visible");


	console.log(ActiculesInCartPrice + "    " +CunterForArticulsINCart);
});
$(".cart-main-div-father").click(function () {
	$(".cart-window-wraper").show();
	$(".cart-window").addClass('cart-window-is-visible');
	$(".cart-window-wraper").addClass("cart-window-wraper-is-visible");
	$(".store-watch-modal-wraper").hide();

});



/*
$(".store-watch-object").click(function () {
	$(".store-watch-modal-wraper").show();
	$(".store-watch-modal-wraper").addClass("store-watch-modal-wraper-is-visible");
$(".store-watch-modal").addClass("store-watch-modal-is-visible");
});

$(".modal-close-btn").click(function () {
	counterClick = 0;	console.log(counterClick);
	$(".store-watch-modal-wraper").removeClass("store-watch-modal-wraper-is-visible");
$(".store-watch-modal").removeClass("store-watch-modal-is-visible");
});
*/




function AddNewRowTOcart(indexOFF) {

	$("#cart-table-body tr:last ").after(
	
	'<tr class="cart-articule-row"><td><img src="" class="cart-articule-img"/></td><td></td><td></td><td></td><td></td><td class="art-price-sibling"></td><td></td><td></td></tr>'


	);

	$("#cart-table-body tr:last td img").attr('src', data2[indexOFF].img);
	$("#cart-table-body tr:last td:nth-child(2)").text(data2[indexOFF].name +" "+ data2[indexOFF].model);
	$("#cart-table-body tr:last td:nth-child(3)").text(data2[indexOFF].price).append('$');
	$("#cart-table-body tr:last td:nth-child(4)").text(data2[indexOFF].off+"%");
	$("#cart-table-body tr:last td:nth-child(5)").text("1");
	$("#cart-table-body tr:last td:nth-child(6)").text(data2[indexOFF].price * $("#cart-table-body tr:last td:nth-child(5)").text()).append('$');
	$("#cart-table-body tr:last td:nth-child(8)").html("<input id='button-remove-art-"+data2[indexOFF].key+"' type='button' class='cart-remove-btn' value='REMOVE'/>");
	$("#cart-table-body tr:last td:nth-child(7)").text(data2[indexOFF].articule_number);

}


/*
$("#buy-now-btn-cart").click(function () {
	
	
});
*/

$(document).delegate(".cart-remove-btn", 'click', function(){


CunterForArticulsINCart--;

	
		
	 $(this).parent().parent().hide();

	var TotalNow = parseInt($(".cart-total-price span").text());
	var toRemve = parseInt($(this).closest("td").siblings(".art-price-sibling").text());

	$(".cart-total-price span").text( TotalNow - toRemve  );
		
	
var indexER = ActiculesInCartPrice.indexOf( $(this).closest("td").siblings(".art-price-sibling").text() );
ActiculesInCartPrice.splice(indexER, 1);
	

console.log(ActiculesInCartPrice + "    " +  $(this).closest("td").siblings(".art-price-sibling").text() +" "+indexER);
});

	
	










// end of doc.ready()
});
var data2 =[
   
   {
      key:'1',
      id:'watch1',
      name:'Versace',
      model:'V-Helix Ivory Dial Leather Ladies Watch',
      img:'assets/watch1.png',
      price:'455',
      off:'23',
      gender:'class_man',
      color:'class_white',
      articule_number:'13423589',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'2',
      id:'watch2',
      name:'Frederique Constant',
      model:' Classics Silver Dial Men Watch ',
      img:'assets/watch2.png',
      price:'388',
      off:'43',
      gender:'class_man',
      color:'class_brown',
      articule_number:'85635894',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'3',
      id:'watch3',
      name:'Arowatch',
      model:' Ivory Leather Man Watch ',
      img:'assets/watch3.png',
      price:'440',
      off:'35',
      gender:'class_woman',
      color:'class_black',
      articule_number:'75685963',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'4',
      id:'watch4',
      name:'Technomarine',
      model:' Medusa Chronograph White Dial ',
      img:'assets/watch4.png',
      price:'677',
      off:'35',
      gender:'class_man',
      color:'class_brown',
      articule_number:'47564296',
      shiping:'140',
      availability:'NO'

   },
   {
      key:'5',
      id:'watch5',
      name:'Tissot',
      model:' Classic Tradition Chronograph Men Watch',
      img:'assets/watch5.png',
      price:'242',
      off:'23',
      gender:'class_man',
      color:'class_brown',
      articule_number:'52346342',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'6',
      id:'watch6',
      name:'Tissot',
      model:' Heritage Visodate Automatic Men Watch',
      img:'assets/watch6.png',
      price:'453',
      off:'56',
      gender:'class_woman',
      color:'class_brown',
      articule_number:'5326526',
      shiping:'Free',
      availability:'NO'

   },
   {
      key:'7',
      id:'watch7',
      name:'Tissot',
      model:' Classic Tradition Chronograph Men Watch',
      img:'assets/watch5.png',
      price:'242',
      off:'23',
      gender:'class_man',
      color:'class_brown',
      articule_number:'64376324',
      shiping:'122',
      availability:'YES'

   },
   {
      key:'8',
      id:'watch8',
      name:'Tissot',
      model:'Chemin Des Tourelles Dial Automatic Ladies Watch',
      img:'assets/watch9.png',
      price:'738',
      off:'29',
      gender:'class_woman',
      color:'class_red',
      articule_number:'43563453',
      shiping:'Free',
      availability:'NO'

   },
   {
      key:'9',
      id:'watch9',
      name:'Frederique Constant',
      model:'Horological Smartwatch Mens Watch ',
      img:'assets/watch7.png',
      price:'878',
      off:'23',
      gender:'class_man',
      color:'class_blue',
      articule_number:'7587422',
      shiping:'123',
      availability:'YES'

   },
   {
      key:'10',
      id:'watch10',
      name:'Rolex',
      model:'Submariner Gold Oyster Bracelet Automatic Mens Watch',
      img:'assets/watch11.png',
      price:'23100',
      off:'22',
      gender:'class_woman',
      color:'class_yellow',
      articule_number:'6436673',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'11',
      id:'watch11',
      name:'Movado',
      model:'Bold Champagne Dial Yellow Gold Stainless Steel Watch',
      img:'assets/watch12.png',
      price:'554',
      off:'12',
      gender:'class_man',
      color:'class_yellow',
      articule_number:'7774343',
      shiping:'144',
      availability:'YES'

   },
   {
      key:'12',
      id:'watch12',
      name:'Seiko',
      model:'Recraft Automatic Mens Watch',
      img:'assets/watch13.png',
      price:'644',
      off:'32',
      gender:'class_man',
      color:'class_green',
      articule_number:'7573334',
      shiping:'Free',
      availability:'NO'

   },
   {
      key:'13',
      id:'watch13',
      name:'IWC ',
      model:'Portuguese Chronograph Automatic Dial Mens Watch ',
      img:'assets/watch8.png',
      price:'664',
      off:'44',
      gender:'class_woman',
      color:'class_blue',
      articule_number:'7357483',
      shiping:'155',
      availability:'YES'

   },
   {
      key:'14',
      id:'watch14',
      name:'Fossil',
      model:'Jacqueline Wine Dial Ladies Watch',
      img:'assets/watch10.png',
      price:'425',
      off:'11',
      gender:'class_man',
      color:'class_red',
      articule_number:'62627627',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'15',
      id:'watch15',
      name:'Baume et Mercier',
      model:'Classima White Dial Purple Leather Ladies',
      img:'assets/watch14.png',
      price:'117',
      off:'33',
      gender:'class_man',
      color:'class_purple',
      articule_number:'54754623',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'16',
      id:'watch16',
      name:'Versace',
      model:'V-Helix Ivory Dial Leather Ladies Watch',
      img:'assets/watch15.png',
      price:'545',
      off:'12',
      gender:'class_woman',
      color:'class_purple',
      articule_number:'34673378',
      shiping:'Free',
      availability:'NO'

   }


];




ReactDOM.render( <Store data={data2}/> , document.getElementById('store-react-father'));





























































