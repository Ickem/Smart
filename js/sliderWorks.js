jQuery(document).ready(function(){
    function htmSlider(){
        let slideWrap = jQuery('.slide-wrap');
        let nextLink = jQuery('.next-slide');
        let prevLink = jQuery('.prev-slide');
        let playLink = jQuery('.auto');
        let is_animate = false;

        let slideWidth = jQuery('.slide-item').outerWidth();
        let newLeftPos = slideWrap.position().left - slideWidth;

        nextLink.click(function(){
            if(!slideWrap.is(':animated')) {
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                });

            }
        });

        prevLink.click(function(){
            if(!slideWrap.is(':animated')) {
                slideWrap
                    .css({'left': newLeftPos})
                    .find('.slide-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);

            }
        });

        function autoplay(){
            if(!is_animate){
                is_animate = true;
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                    is_animate = false;
                });
            }
        }

        playLink.click(function(){
            if(playLink.hasClass('play')){
                playLink.removeClass('play').addClass('pause');
                jQuery('.navy').addClass('disable');
                timer = setInterval(autoplay, 1000);
            } else {
                playLink.removeClass('pause').addClass('play');
                jQuery('.navy').removeClass('disable');
                clearInterval(timer);
            }
        });

    }

    htmSlider();
});