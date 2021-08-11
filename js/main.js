$(document).ready(function() {
  $('.header__burger, .header__site-menu').click(function() {
    $('.header__burger,.header__menu').toggleClass('active')
    $('body').toggleClass('lock')
    // $('.header').toggleClass('header__center')
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

  // function shineLinks(id){
  //   try{
  //     var el = document.getElementById(id).getElementsByTagName('a');
  //     var url = document.location.href;
  //     for (var i = 0; i < el.length; i++){
  //       if (url == el[i].href) {
  //           el[i].className += ' act';
  //       };
  //     };
  //   } catch(e){}
  // };

  // shineLinks('menu-act');
  


  var link = document.querySelector('link[rel=import]');
  var content = link.import.querySelector('.wrapper');
  document.body.appendChild(content.cloneNode(true));



  $('.license-pop').on('click', function() {
    $('.licensepreview').attr('src', $(this).find('img').attr('src'));
    $('#licenseimg').modal('show');   
  });
})