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
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
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

  if (document.documentElement.clientWidth < 600) {
    $('#btn_container').mCustomScrollbar({
      axis: 'y',
      theme: 'dark-thick',
      scrollInertia: 400,
      mouseWheel: {
        scrollAmount: 100,
      },
    });
  }

  if (document.documentElement.clientWidth < 900) {
    $('.navigation .wrapper').mCustomScrollbar({
      axis: 'x',
      theme: 'dark-thick',
      scrollInertia: 400,
      mouseWheel: {
        scrollAmount: 100,
      },
    });

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

  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

  function updateCalendar() {
    var monthNames = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
    $('#month-name').text(monthNames[currentMonth] + ' ' + currentYear);

    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    var firstDay = new Date(currentYear, currentMonth, 1).getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    $('#calendar-body').empty();

    for (var i = 0; i < firstDay; i++) {
      $('#calendar-body').append('<button class="calendar_btn"></button>');
    }

    var totalDays = firstDay + daysInMonth;
    var rows = Math.floor(totalDays / 7);

    var lastRow = false;

    for (var day = 1; day <= daysInMonth; day++) {
      if (totalDays % 7 === 0 && Math.abs(firstDay + day - rows * 7) < 7) {
        lastRow = true;
      }

      if (firstDay + day - rows * 7 < 7 && firstDay + day - rows * 7 > 0) {
        lastRow = true;
      }

      if (lastRow) {
        $('#calendar-body').append(
          '<button class="calendar_btn _no_border"><span>' + day + '</span><span>Нет приема</span></button>'
        );
      } else {
        $('#calendar-body').append(
          '<button class="calendar_btn"><span>' + day + '</span><span>Нет приема</span></button>'
        );
      }
    }

    var remainingCells = 7 - (totalDays % 7);
    for (var i = 0; i < remainingCells && remainingCells !== 7; i++) {
      $('#calendar-body').append('<button class="calendar_btn _no_border"></button>');
    }
  }

  $('.arrow._prev_month_arrow').click(function () {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    updateCalendar();
  });

  $('.arrow._next_month_arrow').click(function () {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    updateCalendar();
  });

  updateCalendar();

  $('.clinic_switcher > button').click(function () {
    $('.clinic_switcher > button').removeClass('main_button').addClass('main_reverse_button');
    $(this).removeClass('main_reverse_button').addClass('main_button');
  });
});
