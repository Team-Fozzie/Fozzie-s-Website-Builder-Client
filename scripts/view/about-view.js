'use strict';

var app = app || {};
(function (module) {

  var aboutUsView = {}

  aboutUsView.initAboutUs = function() {
    $('section').hide();
    $('#about-us-view').show();
  }

  module.aboutUsView = aboutUsView;
})(app)