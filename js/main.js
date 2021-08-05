$(document).ready(function() {
  $('.header__burger, .header__site-menu').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active')
    $('body').toggleClass('lock')
  })

  $('.banner__slider').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnDotsHover: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows : false
      }
    }],

    prevArrow: '<button type="button" class="slick__banner-prev"><img class="banner__arrow-svg" src="img/arrow-banner.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__banner-next"><img class="banner__arrow-svg" src="img/arrow-banner.svg" alt=""></button>'
  });


  $('.specialists__slider').slick({
    speed: 500,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows : false,
      }
    }],

    prevArrow: '<button type="button" class="slick__banner-prev"><img class="banner__arrow-svg" src="img/arrow-banner.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__banner-next"><img class="banner__arrow-svg" src="img/arrow-banner.svg" alt=""></button>'
  })

  $('.healthlinks__slider').slick({
    speed: 500,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows : false
      }
    }],

    prevArrow: '<button type="button" class="slick__banner-prev"><img class="banner__arrow-svg" src="img/arrow-banner.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__banner-next"><img class="banner__arrow-svg" src="img/arrow-banner.svg" alt=""></button>'
  })

  
})