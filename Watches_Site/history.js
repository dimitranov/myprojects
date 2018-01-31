
var Test = React.createClass({ 


    getInitialState : function() {
       return { 
       	year:1500
       

        };
    },
    onClick1 : function() {
       this.setState({year:1500 } );
    },
	onClick2 : function() {
	       this.setState({year:1600 } );
	    },
	onClick3 : function() {
	      this.setState({year:1700 } );
	    },
	onClick4 : function() {
       	  this.setState({year:1800 } );
    	},
	onClick5 : function() {
	       this.setState({year:1900 } );
	    },
	onClick6 : function() {
	      this.setState({year:2000 } );
	    },
	
    render : function() {
        var text;
        if(this.state.year == 1500) { 
            text = "The first timepieces to be worn, made in the 16th century beginning in the German cities of Nuremberg and Augsburg, were transitional in size between clocks and watches.These 'clock-watches' were fastened to clothing or worn on a chain around the neck. They were heavy drum-shaped cylindrical brass boxes several inches in diameter, engraved and ornamented. They had only an hour hand. The face was not covered with glass, but usually had a hinged brass cover, often decoratively pierced with grillwork so the time could be read without opening. The movement was made of iron or steel and held together with tapered pins and wedges, until screws began to be used after 1550. Many of the movements included striking or alarm mechanisms. They usually had to be wound twice a day. The shape later evolved into a rounded form; these were later called Nuremberg eggs. Still later in the century there was a trend for unusually-shaped watches, and clock-watches shaped like books, animals, fruit, stars, flowers, insects, crosses, and even skulls (Death's head watches) were made."
            
        } 
         if (this.state.year == 1600){ 
            text = "Styles changed in the 17th century and men began to wear watches in pockets instead of as pendants (the woman's watch remained a pendant into the 20th century). This is said to have occurred in 1675 when Charles II of England introduced waistcoats.[11] This was not just a matter of fashion or prejudice; watches of the time were notoriously prone to fouling from exposure to the elements, and could only reliably be kept safe from harm if carried securely in the pocket. To fit in pockets, their shape evolved into the typical pocketwatch shape, rounded and flattened with no sharp edges. Glass was used to cover the face beginning around 1610. Watch fobs began to be used, the name originating from the German word fuppe, a small pocket. Later in the 1800s Prince Albert, the consort to Queen Victoria, introduced the 'Albert chain' accessory, designed to secure the pocket watch to the man's outergarment by way of a clip. The watch was wound and also set by opening the back and fitting a key to a square arbor, and turning it."
            
        } 
        if (this.state.year == 1700){ 
            text = "The Enlightenment view of watches as scientific instruments brought rapid advances to their mechanisms. The development during this period of accurate marine chronometers to determine longitude during sea voyages produced many technological advances that were later used in watches. It was found that a major cause of error in balance wheel timepieces was changes in elasticity of the balance spring with temperature changes. This problem was solved by the bimetallic temperature compensated balance wheel invented in 1765 by Pierre Le Roy and improved by Thomas Earnshaw. This type of balance wheel had two semicircular arms made of a bimetallic construction. If the temperature rose, the arms bent inward slightly, causing the balance wheel to rotate faster back and forth, compensating for the slowing due to the weaker balance spring. This system, which could reduce temperature induced error to a few seconds per day, gradually began to be used in watches over the next hundred years."
            
        } 
         if (this.state.year == 1800){ 
            text = "The lever escapement, invented by Thomas Mudge in 1759 and improved by Josiah Emery in 1785, gradually came into use from about 1800 onwards, chiefly in Britain; it was also adopted by Abraham-Louis Breguet, but Swiss watchmakers (who by now were the chief suppliers of watches to most of Europe) mostly adhered to the cylinder until the 1860s. By about 1900, however, the lever was used in almost every watch made. In this escapement the escape wheel pushed on a T shaped 'lever', which was unlocked as the balance wheel swung through its centre position and gave the wheel a brief push before releasing it. The advantages of the lever was that it allowed the balance wheel to swing completely free during most of its cycle; due to 'locking' and 'draw' its action was very precise; and it was self-starting, so if the balance wheel was stopped by a jar it would start again."
        } 
         if (this.state.year == 1900){ 
            text = "The impact of the First World War dramatically shifted public perceptions on the propriety of the man's wristwatch, and opened up a mass market in the post-war era. The creeping barrage artillery tactic, developed during the War, required precise synchronization between the artillery gunners and the infantry advancing behind the barrage. Service watches produced during the War were specially designed for the rigours of trench warfare, with luminous dials and unbreakable glass. Wristwatches were also found to be needed in the air as much as on the ground: military pilots found them more convenient than pocket watches for the same reasons as Santos-Dumont had. The British War Department began issuing wristwatches to combatants from 1917"
        } 
         if (this.state.year == 2000){ 
            text = "The watch is based on a chip developed by the breakthrough Chip Scale Atomic Clock (CSAC) program of the US Defense Advanced Research Projects Agency (DARPA) which was initiated in 2001, and produced the first prototype atomic clock chip in 2005.[39][40] Symmetricom began manufacturing the chips in 2011. Like other cesium clocks the watch keeps time with an ultraprecise 9.192631770 GHz microwave signal produced by electron transitions between two hyperfine energy levels in atoms of cesium, which is divided down by digital counters to give a 1 Hz clock signal to drive the hands. On the chip, liquid metal cesium in a tiny capsule is heated to vaporize the cesium. A laser shines a beam of infrared light modulated by a microwave oscillator through the capsule onto a photodetector. When the oscillator is at the precise frequency of the transition, the cesium atoms absorb the light, reducing the output of the photodetector. The output of the photodetector is used as feedback in a phase locked loop circuit to keep the oscillator at the correct frequency. The breakthrough that allowed a rack-sized cesium clock to be shrunk small enough to fit on a chip was a technique called coherent population trapping, which eliminated the need for a bulky microwave cavity."
        } 
  return (

        	<div >








        		<div className="history-year-btn-wraper">
	        		<button onClick={this.onClick1} id="btn1" className="history-year-btn">1500</button>
	        		<button onClick={this.onClick2} id="btn2" className="history-year-btn">1600</button>
	        		<button onClick={this.onClick3} id="btn3" className="history-year-btn">1700</button>
        			<button onClick={this.onClick4} id="btn4" className="history-year-btn">1800</button>
	        		<button onClick={this.onClick5} id="btn5" className="history-year-btn">1900</button>
	        		<button onClick={this.onClick6} id="btn6" className="history-year-btn">2000</button>
        		
        		</div>
        	<p className="history-brands-title">{this.state.year}</p>
          <div className="history_image_wraper">
        	<img src="assets/textdecoration3.png" className="image-under-headings"/> 
          </div>
        	<p className="history-main-p history-main-p-react">{text}</p> 
        	
        	</div>
        )
    }
});



ReactDOM.render(
 <Test/>
,
        
        document.getElementById('civBtns')
      );

//$("#firstbtn").click();
//$("#firstbtn").addClass("brand-filter-sty-active");
$(document).ready(function () {
	$("#btn1").addClass("history-year-btn-active");

});
function LeaterActiveState(ActiveOne) {
    
    $(ActiveOne).click(function  () {
        $(".history-year-btn-wraper button").removeClass("history-year-btn-active");
        $(this).addClass("history-year-btn-active");
		var filter_scroll_top = $(".history-year-btn-wraper").offset().top;
		$("html, body").animate({ scrollTop: filter_scroll_top-45 }, 600);
    });
}

LeaterActiveState("#btn1");
LeaterActiveState("#btn2");
LeaterActiveState("#btn3");
LeaterActiveState("#btn4");
LeaterActiveState("#btn5");
LeaterActiveState("#btn6");


$(window).scroll(function () {
	
var  wScroll = $(this).scrollTop();

if (wScroll > $(".passage-p").offset().top ) {
	$(".history-year-btn-wraper button").each(function  (i) {
		
		setTimeout(function  () {
			
		
		$(".history-year-btn-wraper button").eq(i).addClass('history-year-btn-visible');
	}  , 150 * (i+1) );
	
	});

}//end of main if


});

