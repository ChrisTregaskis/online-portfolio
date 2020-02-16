$(document).ready(function() {

    $('#close-menu').hide();
    $('#open-menu').click(function() {
        $('#open-menu').hide();
        $('#close-menu').show();
        var menuContainer = $('.menu-container');
        menuContainer.animate({height: '250px', opacity: '0.9'}, 'slow');
        menuContainer.animate({width: '300px', opacity: '0.9'}, 'slow');
    });

    $('#close-menu').click(function() {
        $('#close-menu').hide();
        $('#open-menu').show();
        var menuContainer =$('.menu-container');
        menuContainer.animate({height: '50px', opacity: '0.8'}, 'slow');
        menuContainer.animate({width: '50px', opacity: '1'}, 'slow');
    });

    $(function(){
        $(window).scroll(function (){
            if($(this).scrollTop() > 700) {
                $('#menu-container').addClass('mCon-change-color')
                $('#burger-nav-menu').addClass('bNavMenu-change-color')
            }
            if ($(this).scrollTop() < 700) {
                $('#menu-container').removeClass('mCon-change-color')
                $('#burger-nav-menu').removeClass('bNavMenu-change-color')
            }
        });
    });

    $(function(){
        $(window).scroll(function (){
            if($(this).scrollTop() > 500) {
                $('.article1').animate({margin: '0', opacity: '1'}, 'slow');
                $('.article2').animate({margin: '0', opacity: '1'}, 'slow');
                $('.article3').animate({margin: '0', opacity: '1'}, 'slow');
            }
        })
    })

    $(function() {
        $(window).scroll(function (){
            if($(this).scrollTop() > 1000) {
                $('.about-me-pic').animate({top: '-62px', opacity: '1'}, 'slow');
            }
        })
    })

});
