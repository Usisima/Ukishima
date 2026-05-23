'use strict';
window.toggleTheme = function () {
  var r = document.documentElement;
  var n = r.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  r.setAttribute('data-theme', n);
  localStorage.setItem('uk-theme', n);
};
