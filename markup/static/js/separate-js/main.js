$(document).ready(function () {

    $('.js-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand'
    });

    $('.js-view').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        dots: true,
        fade: true,
        lazyLoad: 'ondemand',
        asNavFor: '.js-nav-slider'
    });

    $('.js-nav-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        asNavFor: '.js-view'
    });

    $('.js-modal').on('show.bs.modal', function () {
        var docHeight = $(document).height(),
            windowHeight = $(window).height(),
            docWidth = $(document).outerWidth(),
            windowWidth = $(window).outerWidth(),
            widthScroll = windowWidth - docWidth;

        if (docHeight > windowHeight) {
            // fix-scroll
            $('body').css("paddingRight", widthScroll);
        }
        else {
            $('body').css("paddingRight", "0");
        }
    });
    $('.js-modal').on('hidden.bs.modal', function () {
        $('body').css("paddingRight", "0");
    });

    $(".fancybox-img").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            media: {}
        }
    });
});
