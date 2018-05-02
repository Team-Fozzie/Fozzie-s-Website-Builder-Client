'use strict';

//TODO: Making Default Body
const defaultBody = `<section class="cols-1"><article><img src='http://via.placeholder.com/480x350' alt="img alt"></article></section>`;

//TODO: make selection class that highlights section you are working on - add and remove class to users currently selected thing
var app = app || {};

(function(module) {
  var webBuilderView = {};

  var positionCounter = project.allSections.length - 1;

  $('#add-new-section').on('click', createSection);

  $('#user-input-menu li').on('click', assignTemplate);

  function assignTemplate() {
    let templateNum = $(this).data('cols');
    let body = project.allSections[positionCounter].body
    body = app.templates.templateToHtml(templateNum, body);

    project.allSections[positionCounter].body = body;
    project.renderAll($('#web-row-container'));

    project.updateProject();
    $('#user-input-menu').css('left', '-33%');
  }

  function createSection() {
    positionCounter++;
    let section = new app.Section(positionCounter, defaultBody);

    project.allSections.push(section);
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

})(app)

