'use strict';

var app = app || {};


$('#add-new-section').on('click', createSection);

$('#user-input-menu li').on('click', function () {

});

function createSection() {
  var section = new app.Section('1', '<p>Hello</p>');
  project.allSections.push(section);
  project.renderAll($('#web-builder-view'));

  $('#user-input-menu').css('left', '0');
}

function initWebBuilderViewToHtml() {
  var source = document.getElementById("web-builder-article-template").innerHTML;
  var template = Handlebars.compile(source);
  return template;
};

function initWebBuilderView() {
  $('section').hide();
  $('section#web-builder-view').show();
} 