;(function() {
  'use strict';

  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-')
      ;
  }
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = slugify;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return slugify;
      });
    }
    else {
      window.slugify = slugify;
    }
  }
})();
