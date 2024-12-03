$(document).ready(function(){

    //the shineLoop function uses the chainin teqnique to //
    //utilize multiple animate event methods in the same function//
    function shineLoop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000) 
        .animate({backgroundPositionX: '-800px'}, 3000);
    };
    
    //setInterval repeats shine loop and//
    //0 sets delay time between each repeat//
    setInterval(shineLoop, 0);

//shrinks header when document is scrolled down by 50 pixels//
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({
        //triggers images to slide down one after the other when//
        //user's mouse enters div area with classicCars id//
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //triggers images to slide up one after the other when//
        //user's mouse leaves div area with classicCars id//
        mouseleave: function(){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //creates toggle effect on each FAQ element by checking sibling elements//
    //so they don't all display at once when a question is clicked//
    $('div.question').on('click', function(){
        $(this).next().slideToggle('slow');
    });

})