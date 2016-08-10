$(function() {
  'use strict';

  $('.scroll-to').on('click', function(e) {
    e.preventDefault();

    var $this = $(this);
    var $target = $($this.attr('href'));

    $('html, body').animate({
      scrollTop: $target.offset().top - 50
    }, 200);
  });
});
