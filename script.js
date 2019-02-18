$(document).ready(() => {
    $('.brand').addClass('animation-fade');
    $('.menu').addClass('animation-fade');
    $('.btn-border').addClass('animation-left');
    $('body').children('.section-left').eq(0).find('.content-box').addClass('animation-right');
    setTimeout(() => {
        $('body').children('.section-left').eq(0).find('.content').addClass('animation-right');
        $('.menu').css('opacity', '1');
        setTimeout(() => {
            $('body').children('.section-left').eq(0).find('.content').css('opacity', '1');
            $('body').children('.section-left').eq(0).find('svg').addClass('animation-fade');
            $('body').children('.section-left').eq(0).find('svg').css('opacity', '1');
        }, 800);
    }, 300);
    $(window).scroll(() => {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 606) {
            $('body').children('.section-right').eq(0).find('.content').addClass('animation-right');
            $('body').children('.section-right').eq(0).find('.content-box').addClass('animation-fade');
            $('body').children('.section-right').eq(0).find('img').addClass('animation-fade');
            setTimeout(() => {
                $('body').children('.section-right').eq(0).find('.content-box').css('opacity', '1');
                $('body').children('.section-right').eq(0).find('.content').css('opacity', '1');
                $('body').children('.section-right').eq(0).find('img').css('opacity', '1');
            }, 800);
        }
        if (scroll > 1333) {
            $('body').children('.section-left').eq(1).find('.content-box').addClass('animation-right');
            setTimeout(() => {
                $('body').children('.section-left').eq(1).find('.content').addClass('animation-right');
                $('.menu').css('opacity', '1');
                setTimeout(() => {
                    $('body').children('.section-left').eq(1).find('.content').css('opacity', '1');
                    $('body').children('.section-left').eq(1).find('img').addClass('animation-fade');
                    $('body').children('.section-left').eq(1).find('img').css('opacity', '1');
                }, 800);
            }, 300);
        }
        if (scroll > 2184) {
            $('body').children('.section-right').eq(1).find('img').addClass('animation-up');
            $('.test-outer').children('.test-element-right').eq(0).addClass('animation-up');
            setTimeout(() => {
                $('body').children('.section-right').eq(1).find('img').css('opacity', '1');
            }, 800);
        }
    });
});