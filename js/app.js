$(function(){
    $(window).on("load resize",function(){
        $(".fill-screen").css("height",window.innerHeight);
    });

    $('body').scrollspy({
        target:'.navbar',
        offset:150
    });

    $('nav a').bind('click',function(){
        $($(this).attr('href')).animatescroll({scrollspeed:2000,padding:50});
        event.preventDefault();
    });

    $('.progress-bar').each(function() {
        var bar_value = $(this).attr('aria-valuenow') + '%';                
        $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
    });

    $('[data-toggle="linkedin"]').tooltip();
    $('[data-toggle="github"]').tooltip();
    $('[data-toggle="hackerrank"]').tooltip();
})