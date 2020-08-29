$(document).ready(function () {
  $('.item').click(function () {
    const value = $(this).attr('data-filter')

    if (value === 'all') {
      $('.itembox').show('1000')
    } else {
      $('.itembox').not('.' + value).hide('500')
      $('.itembox').filter('.' + value).show('500')
    }
  })
  $('.item').click(function () { $(this).addClass('active').siblings().removeClass('active') })
}) // ######### main function ###############
