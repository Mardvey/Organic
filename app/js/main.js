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

