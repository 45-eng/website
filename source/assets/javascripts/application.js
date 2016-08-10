//= require jquery/dist/jquery
//= require flexslider/jquery.flexslider.js
//
//= require vendor/_validate.js
//= require bootstrap/transition
//= require bootstrap/alert
//= require bootstrap/button
//# require bootstrap/carousel
//= require bootstrap/collapse
//= require bootstrap/dropdown
//# require bootstrap/modal
//# require bootstrap/tab
//# require bootstrap/affix
//# require bootstrap/scrollspy
//# require bootstrap/tooltip
//# require bootstrap/popover

//
//# require blocks/_flexslider.js
//# require blocks/_hero.js
//= require blocks/_contacts.js
//= require blocks/_map.js
//= require blocks/_classie.js
//= require blocks/_validators.js
//= require blocks/_sections.js
//= require blocks/_scrool_to.js

(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  [].slice.call( document.querySelectorAll( 'textarea.input__textarea' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();
