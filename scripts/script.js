$(function () {
  $('.slider_discount_body').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
    prevArrow: $('.slider_discount_controls>.arrow_prev'),
    nextArrow: $('.slider_discount_controls>.arrow_next'),
  });

  $('.slider_doctors').slick({
    infinite: false,
    slidesToShow: 2,
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

  $('.accordion_item>.title').click(function () {
    $(this).siblings('.body').slideToggle();
    $(this).parent().toggleClass('_active');
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
});
