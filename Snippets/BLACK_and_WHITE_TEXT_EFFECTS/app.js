// alert('dziala');

$('.box').mousemove(function(e){
    var window = $(this);
    var x_axis = e.pageX - window.offset().left;
    $('.mask').css({
        left : x_axis, 
        backgroundPosition : '-' + x_axis + 'px -'
    })
});