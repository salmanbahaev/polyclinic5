$(document).ready(function() {
  // меню-бургер
  $('.header__burger, .header__site-menu').click(function() {
    $('.header__burger,.header__menu').toggleClass('active')
    //блок прокрутки фона при открытом меню
    $('body').toggleClass('lock')
  })

  // слайдер для баннера
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

  // слайдер для специалистов
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

  // слайдер для карточек-ссылок
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

  // добавляем класс act для меню сайта (активное меню)
  /* function shineLinks(id){
    try{
      var el = document.getElementById(id).getElementsByTagName('a');
      var url = document.location.href;
      for (var i = 0; i < el.length; i++){
        if (url == el[i].href) {
            el[i].className += ' act';
        };
      };
    } catch(e){}
  };

  shineLinks('menu-act'); */
  
  // Модальное окно для лицензий
  $('.licenses-pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#exampleModal').modal('show');
  });

  // required/opacity для формы (../headphys.html)
  $('.page-headphys__checkbox-input').on('click', function() {
    if($(this).prop('checked')) {
      $('.page-headphys__form-submit').prop('required', false).css('opacity', '1.0')
    } else {
      $('.page-headphys__form-submit').prop('required', true).css('opacity', '0.5')
    }
  })

})