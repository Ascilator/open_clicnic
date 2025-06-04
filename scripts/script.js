$(function () {
  $('.video').click(function () {
    $(this).children('.video_next').addClass('_active');
  });
  $('.mobile_video').click(function () {
    $(this).children('.video_next').addClass('_active');
  });

  $('.slider_discount_body').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_discount_controls>.arrow_prev'),
    nextArrow: $('.slider_discount_controls>.arrow_next'),
  });

  $('.slider_gallery').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_gallery_controls>.arrow_prev'),
    nextArrow: $('.slider_gallery_controls>.arrow_next'),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.slider_doctors_new').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_specialist_controls>.arrow_prev'),
    nextArrow: $('.slider_specialist_controls>.arrow_next'),
    draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.slider_times').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_times_container>.slider_prev'),
    nextArrow: $('.slider_times_container>.slider_next'),
  });

  $('.rev_block_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_review_controls>.arrow_prev'),
    nextArrow: $('.slider_review_controls>.arrow_next'),
    draggable: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.accordion_item>.title').click(function () {
    $(this).siblings('.body').slideToggle();
    $(this).parent().toggleClass('_active');

    $('.slider_times').slick('refresh');
  });

  $('.stars_slider_body').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_stars_controls>.arrow_prev'),
    nextArrow: $('.slider_stars_controls>.arrow_next'),
    draggable: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.slider_articles').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_articles_controls>.arrow_prev'),
    nextArrow: $('.slider_articles_controls>.arrow_next'),
    draggable: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.slider_video_mobile_body').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_video_controls>.arrow_prev'),
    nextArrow: $('.slider_video_controls>.arrow_next'),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.legal_slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_legal_controls>.arrow_prev'),
    nextArrow: $('.slider_legal_controls>.arrow_next'),
    draggable: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.rev_block_slider .show_more').click(function () {
    $(this).siblings('span').fadeIn();
    $(this).remove();
  });

  if (document.documentElement.clientWidth < 900) {
    $('._slider_blog').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 300,
      arrows: true,
      prevArrow: $('.slider_blog_controls>.arrow_prev'),
      nextArrow: $('.slider_blog_controls>.arrow_next'),
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('#extra').remove();

    $('._steps_mobile_slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      arrows: false,
      dots: true,
      appendDots: $('.mobile_steps_slider_dots'),
    });

    $('.rew_slider_centered').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      arrows: false,
      centerMode: true,
      centerPadding: '80px',
      dots: true,
      appendDots: $('.slider_dots_rew_centered'),
    });

    $('.filials_slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      arrows: true,
      prevArrow: $('.slider_fillial_controls>.arrow_prev'),
      nextArrow: $('.slider_fillial_controls>.arrow_next'),
    });
  }

  // $('.event_slider_body').slick({
  //   infinite: true,
  //   dots: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   speed: 300,
  //   arrows: true,
  //   prevArrow: $('.event_slider_controls>.slider_prev'),
  //   nextArrow: $('.event_slider_controls>.slider_next'),
  //   appendDots: $('.event_slider_controls>.slider_dots'),
  //   responsive: [
  //     {
  //       breakpoint: 950,
  //       settings: {
  //         slidesToShow: 1,
  //         variableWidth: true,
  //         appendDots: $('.event_slider_mobile_dots'),
  //       },
  //     },
  //   ],
  // });

  $('.cross').click(function () {
    $(this).closest('._popup').removeClass('_active');
  });

  $('.summon_app_popup').click(function () {
    $('._popup').removeClass('_active');
    $('.get_an_appointment').addClass('_active');
  });

  $('.summon_approve_popup').click(function () {
    $('._popup').removeClass('_active');
    $('.approve_popup').addClass('_active');
  });
});
