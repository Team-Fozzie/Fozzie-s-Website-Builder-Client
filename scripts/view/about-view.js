'use strict';

var app = app || {};
(function (module) {

  var aboutUsView = {}

  aboutUsView.initAboutUs = function() {
    $('section').hide();
    $('#about-us-view').show();
    $('body').css('background', '#06aaf6');
  }

  module.aboutUsView = aboutUsView;
})(app)