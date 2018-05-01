'use strict';

var app = app || {};

var positionCounter = -1;

$('#add-new-section').on('click', createSection);

$('#user-input-menu li').on('click', function () {
  // console.log();
  let templateNum = $(this).data('cols');
  let body = project.allSections[positionCounter].body 
  body = app.templates.templateToHtml(templateNum, body);
  
  project.allSections[positionCounter].body = body;
  project.renderAll($('#web-row-container'));

  project.updateProject();
  $('#user-input-menu').css('left', '-33%');


});

function createSection() {
  // section(order, body)
  let section = new app.Section('1', '<p>Hello</p>');
  project.allSections.push(section);
  positionCounter++;
  project.renderAll($('#web-row-container'));

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