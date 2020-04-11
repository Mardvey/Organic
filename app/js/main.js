$('.count').each(function () {
    $(this).prop('info__item', 0).animate({
        info__item: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
})


$('.comfort__slider').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    arrows: false,
});


$(".comfort__slider .comfort__item").click(function () {
    $(".comfort__slider .comfort__item").removeClass("active");
    $(this).toggleClass("active");
})