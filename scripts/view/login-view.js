'use strict';

var app = app || {};
(function (module) { 

  loginView.initLoginView = function() {
    $('section').hide();
    $('#home-view-login').show();
  };

  module.loginView = loginView;
})(app)