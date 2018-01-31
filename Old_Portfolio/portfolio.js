jQuery(function () {

$(document).ready(function () {





$(".hamburger_activator").click(function(event) {
$(".nav-toggle").toggleClass("active");
    /* Act on the event */
});


var nav_switch = true;
function Side_nav_visible() {
    if (!nav_switch) {
        $(".side-menu").removeClass('side_menu_avtive');
        $(".navigation-hamburger").removeClass('navigation-hamburger_active');
        $(".hamburger_activator").removeClass('hamburger_activator_moved');

        if ($(window).width() > 800) {
            
                     
            
        }

        
        
        
    }else{
        $(".side-menu").addClass('side_menu_avtive');
         $(".navigation-hamburger").addClass('navigation-hamburger_active');
        $(".hamburger_activator").addClass('hamburger_activator_moved');

         if ($(window).width() > 800) {
            
            
            }

       
        
        
    }
nav_switch = !nav_switch;
}


$(".hamburger_activator").click(Side_nav_visible);
if ($(window).width() > 1000) {
    $(".nav_a_wraper").hover(function() {
        $(this).addClass('nav_a_wraper_active');
    }, function() {
        $(this).removeClass('nav_a_wraper_active');
    });

}



    

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["HTML", "CSS", "JavaScript", "jQuery", "PhotoShop"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ["#f2895c","#5db1ee","#f4d45f","#1b82b4","#3d3c75"],
            borderColor: 'rgba(0,0,0,0.0)',
            data: [11, 37, 10, 34, 8],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                fontColor: "#333",
                fontSize: 13
            }
        },
        pieceLabel: {
    render: 'percentage',
    fontColor: 'white',
    precision: 2
  }
    }
});









});








    
});//end jq

