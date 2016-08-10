$(function() {
  'use strict';

  function resizeHero() {
    var minHeight = 540;
    var availableHeight = $(window).height() - 50;

    $('.section--hero').css({
      minHeight: (availableHeight > minHeight ? availableHeight : minHeight)
    });
  }

  resizeHero();
  $(window).resize(resizeHero);
});
