$(document).ready(function()
{
    // Adjust header height
    var myheader = $('header'),
    mySlider = $('.bxslider');
    myheader.height($(window).height());
    
    $(window).resize(function()
    {
        myheader.height ($(window).height() );        
        //Adjust bxslider list item at center
        mySlider.each(function()
        {
            $(this).css('paddingTop', ( $(window).height() - $('.bxslider li').height()) / 2 )
        });

    });

    //Add active class on Links
    $('.links li a').click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    //Adjust bxslider list item at center
    mySlider.each(function(){
        $(this).css('paddingTop', ( $(window).height() - $('.bxslider li').height()) / 2 )
    });

    //Trigger the pxslider
    mySlider.bxSlider({
        pager : false     
    });

    //smooth scroll to div 
    $('.links li a').click(function()
    {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    //Our auto slider 
    (function autoSlider(){
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child'))
            {
                $(this).delay(3000).fadeOut(1000, function()
                {
                    $(this).removeClass('active').next().addClass('active').fadeIn(2000);
                    autoSlider();
                });
            }
            else
            {
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    autoSlider();

                });
            }
        });
    }());
    
    //Trigger the mixitup
    $('#container').mixItUp();

    //Add select class on fiter tabs
    $('.projects ul li').click(function(){
        $(this).addClass("select").siblings().removeClass("select");
    });

    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '9px',
        cursorborder: '1px solid none',
        cursorborderradius: '0'
    });
}); 