$(document).ready(function(){ 
    let slides = $(".slider-quote .slides").children(".slide"); 
    let width = $(".slider-quote .slides").width(); 
    let i = slides.length; 
    let offset = i * width; 
    let cheki = i-1;

    $(".slider-quote .slides").css('width',offset); 
    for (j=0; j < slides.length; j++){
        if (j==0) {
            $(".slider-quote .navigation").append("<div class='dot active'></div>");
        }
        else {
            $(".slider-quote .navigation").append("<div class='dot'></div>");
        }
    }
	
    let dots = $(".slider-quote .navigation").children(".dot");
    offset = 0;
    i = 0;

    $('.slider-quote .navigation .dot').click(function(){
        $(".slider-quote .navigation .active").removeClass("active");
        $(this).addClass("active");
        i = $(this).index();
        offset = i * width;
        $(".slider-quote .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 
    });
});