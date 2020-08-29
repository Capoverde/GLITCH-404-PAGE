$(function () {

  const $bg = $('.bg');

  $bg.mousemove(function (e) {

    let $moveX = (e.pageX * 1 / 30);
    let $moveY = (e.pageY * 1 / 30);
    $(this).css('background-position', $moveX + 'px ' + $moveY + 'px ');
  });
}); //end of main function