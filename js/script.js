  $(document).ready(function() {
    $('html').niceScroll();
   $('.gear-check').click(function () {
     $('.color-option').fadeToggle();
   });
   var colorLi = $('.color-option ul li');
   colorLi
   .eq(0).css('backgroundColor','#e41b17').end()
   .eq(1).css('backgroundColor','#1d0969').end()
   .eq(2).css('backgroundColor','#801477').end()
   .eq(3).css('backgroundColor','#7db3da').end()
   .eq(4).css('backgroundColor','#6d5513').end()

   colorLi.click(function() {
     $("link[href*='themes']").attr('href',$(this).attr('dat-value'))
});
// start scrollTop
var scroll = $('.scrolltop');
$(window).scroll(function () {
  $(this).scrollTop()>=700?scroll.show():scroll.hide();

})

  scroll.click(function () {
    $('body,html').animate({scrollTop:0},500);
  })


//end scroll top
});
// ممكن تختصر الكود ده عادى
$(window).on('load',function() {
  $('.loading .spinner').fadeOut(1000,function () {
    $(this).parent().fadeOut(1000)
  });
});
