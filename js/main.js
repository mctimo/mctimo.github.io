$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev" src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-next" src="images/next.svg" alt=""></button>',
        vertical: true,
        responsive: [
          {
            breakpoint: 371,
            settings: {
              dots: false,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
          }
        }
      ]
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img class="product-prev" src="images/product-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img class="product-next" src="images/product-next.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 891,
            settings: {
              arrows: false,
              autoplaySpeed: 2000,
              vertical: false,
              slidesToShow: 3,
              dots: true,
          },
        breakpoint: 461,
        settings: {
        arrows: false,
        vertical: false,
        slidesToShow: 1,
        dots: true
        }
      } 

      ]
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
        
      });

      $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
      });

});