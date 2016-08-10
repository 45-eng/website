// $(function() {
//   'use strict';
//
//   var _init = function(){
//     var height = $( window ).height();
//
//     $('.hero').css({
//       height: height
//     });
//   };
//
//   _init();
//
//   $('a.hero__arrow').on('click', function(e) {
//     var height = $( window ).height();
//     e.preventDefault();
//
//     $('html, body').animate({
//       scrollTop: height
//     }, 300);
//   });
//
//   $(window).resize(_init);
//   $(window).load(_init);
//
//   var timeoutHandler = null;
//
//   setInterval(function() {
//     clearTimeout(timeoutHandler);
//
//     timeoutHandler = setTimeout(function() {
//       $('a.hero__arrow').removeClass('active');
//     }, 2000);
//
//     $('a.hero__arrow').addClass('active');
//   }, 5000);
// });
