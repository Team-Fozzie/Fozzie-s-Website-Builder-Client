'use strict';

var app = app || {};

(function(module) {

  var templates = {};

  templates.template1 = Handlebars.compile($('#template-one').text());
  templates.template2 = Handlebars.compile($('#template-two').text());
  templates.template3 = Handlebars.compile($('#template-three').text());
  templates.template4 = Handlebars.compile($('#template-four').text());
  templates.template5 = Handlebars.compile($('#template-five').text());

  templates.templateToHtml = function(templateNum, body) {
    console.log('made it to templates.templateToHtml', 'templateNum: ' + templateNum, body);
    console.log(this[templateNum]());
    return this[templateNum]();
  };

  module.templates = templates;

})(app)