$(window).load(function(){
    $('.menu-info:not(:first)').css('display', 'none');
});

$(function() {
$('.link').on('click', function(e) {
    e.preventDefault();
    $('.menu-info').each(function() {
        $(this).css('display', 'none');
    });
    let block = $(this).attr('href');
    $(block).fadeIn(1000).css('display', 'initial');
});
});

