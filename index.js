$win = $(window);

//Check for dropdown
$('.nav li').each(function () {
  var $this = $(this);
  var hasDropdown = $this.find('> ul').length;

  if (hasDropdown) {
    $this.addClass('has-dropdown');
  }
});

//Responsive navigation
$('.nav-menu').on('click', function (event) {
  event.preventDefault();

  $('.nav').toggleClass('is-visible');
  $(this).toggleClass('opened');
});

//Responsive dropdown
$('.nav').on('click', '.has-dropdown a', function () {
  if ($win.width() < 1024) {

    $(this).siblings('ul').stop().slideToggle()
      .parent().toggleClass('is-expanded');

    event.preventDefault();
  }
});


$(document).ready(function () {
  $(window).scroll(function () {
    var positionTop = $(document).scrollTop();
    console.log(positionTop);

    if ((positionTop > 315) && (positionTop < 550)) {
      $('.card').addClass('animate__animated animate__fadeInLeft animate__slower')
    }
    if ((positionTop > 550) && (positionTop < 968)) {
      $('.card2').addClass('animate__animated animate__fadeInRight animate__slower')
    }
    // if ((positionTop > 1256) && (positionTop < 1440)) {
    //   $('#round').addClass('animate__animated animate__fadeInLeft animate_slower')
    // }
    // if ((positionTop > 1448) && (positionTop < 1880)) {
    //   $('#round1').addClass('animate__animated animate__fadeInRight animate_slower')
    // }
    // if ((positionTop > 1950) && (positionTop < 2264)) {
    //   $('#round2').addClass('animate__animated animate__fadeInLeft animate_slower')
    // }
    // // if ((positionTop > 2405) && (positionTop < 2907)) {
    //   $('#round3').addClass('animate__animated animate__fadeInRight animate_slower')
    // }
    // if ((positionTop > 2886) && (positionTop < 3183)) {
    //   $('#round4').addClass('animate__animated animate__fadeInLeft animate_slower')
    // }
    // if ((positionTop > 3267) && (positionTop < 3600)) {
    //   $('#round5').addClass('animate__animated animate__fadeInRight animate_slower')
    // }
  });
});


