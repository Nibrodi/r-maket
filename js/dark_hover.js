$('.link').hover(function () {
  $('.dim').fadeIn(200);
  $('.dim').stop(true);
}, function () {
  $('.dim').fadeOut(200);
  $('.dim').stop(true);
});