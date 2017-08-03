var $body, $pageHeader, $slide, $slideNavList;
var slideCount, slideTimeout;
var isTouch = false;

$(document).ready(function() {
  $body = $('body');
  $pageHeader = $('.page-header');
  $slideNavList = $('.slide-nav-list');
  slideCount = $('.slide').length - 1;

  checkForTouch();
  setupProjectImages();
});

var checkForTouch = function() {
  isTouch = 'ontouchstart' in window || 'onmsgesturechange' in window;
  if (isTouch) {
    $body.addClass('is-touch');
  }
};

var setupProjectImages = function() {
  $('.project-images-item img').unveil(100);
  if (!isTouch) {
    $('.project-images-item a').magnificPopup({
      type: 'image',
      gallery: { enabled: true },
      zoom: { enabled: true },
    });
  }
};
