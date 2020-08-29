$(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('.TOP').addClass('showTOP');
    } else {
      $('.TOP').removeClass('showTOP');
    }
  });

  //Click event to scroll to top
  $('.TOP').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  function addShow() {
    $('.RODO').addClass('showRodo');
  }

  setTimeout(addShow, 2000);


  $('.x').on('click', function (e) {
    e.preventDefault();
    $('.RODO').addClass('hideRodo');
  });

  console.log($('.RODO'));



}); // end of main function