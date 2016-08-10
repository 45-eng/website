$(function() {
  'use strict';
  //
  // var _homeFlexHandler = null;
  // var _homeFlexLazyTimer = null;
  // var _initHomeFlexSlider = function() {
  //   var headerHeight = $('#header').outerHeight();
  //   var availableHeight = $(window).height() - headerHeight;
  //   var $slider = $('#HomeSlider');
  //
  //   if (!$slider.length) { return false; }
  //
  //   var _setupNavPosition = function() {
  //     var $nav = $('#HomeSlider .flex-control-nav').first();
  //     var navTop = parseInt(availableHeight / 2 - $nav.outerHeight() / 2, 10);
  //
  //     $nav.css({
  //       top: navTop
  //     });
  //   };
  //
  //   $slider.find('.flexslider__item, .flex-viewport').each(function() {
  //     $(this).css({
  //       height: availableHeight
  //     });
  //   });
  //
  //   if (!_homeFlexHandler) {
  //     _homeFlexHandler = $slider.flexslider({
  //       animation: 'slide',
  //       direction: 'vertical',
  //       directionNav: false,
  //       touch: false,
  //       start: _setupNavPosition
  //     });
  //   } else {
  //     _setupNavPosition();
  //
  //     if (_homeFlexLazyTimer) {
  //       clearTimeout(_homeFlexLazyTimer);
  //     }
  //
  //     _homeFlexLazyTimer = setTimeout(function() {
  //       $slider.flexslider(0);
  //     }, 500);
  //   }
  // };
  //
  // _initHomeFlexSlider();
  //
  // $(window).resize(_initHomeFlexSlider);


  $('#HomeSlider').flexslider({
    // animation: 'slide',
    // direction: 'vertical',
    directionNav: false,
    animationSpeed: 1000,
    keyboard: false,
    touch: false,
    // start: _setupNavPosition
  });
});
