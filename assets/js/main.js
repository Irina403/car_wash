$( document ).ready(function() {
    $('.reviews__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<img src='i/icons/arrow-prev.svg' class='prev' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next.svg' class='next' alt='2'>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 780,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  infinite: true,
                  dots: true
                }
              }
    
        ]
    });



    $('.advantages-block__mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='i/icons/arrow-prev.svg' class='prev' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next.svg' class='next' alt='2'>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 780,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  infinite: true,
                  dots: true
                }
              }
    
        ]
    });

});

$(document).ready(function($){
    $('.js-open-modal').click(function(event) {
        console.log('hi');
        event.preventDefault();
        
        var modalName = $(this).attr('data-modal');
        var modal = $('.modal-contact[data-modal="' + modalName + '"]');
        
        modal.addClass('is-show');
        $('body').addClass('hidden');
        // $('.modal__slide').slick('setPosition');
        $('.js-modal-overlay').addClass('is-show');
     });
        $('.js-modal-overlay').click(function() {
            $('.modal-contact.is-show').removeClass('is-show');
            $(this).removeClass('is-show');
            $('body').removeClass('hidden');
        });
        $('.modal-contact__close').click(function() {
            $('.modal-contact.is-show').removeClass('is-show');
            $('.overlay').removeClass('is-show');
            $('body').removeClass('hidden');
        });
    });



















