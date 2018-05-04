'use strict';

const defaultBody = '<section class="cols-1 template-body"><article><img src="./assets/img/fozzie-web-builder-logo.png" alt="img alt"></article></section>';

var app = app || {};

(function (module) {
  var createView = {};

  // var currentSection = createView.positionCounter;

  $('#add-new-section').on('click', createSection);

  $('#user-input-menu li').on('click', assignTemplate);

  function assignTemplate() {
    let templateNum = $(this).data('cols');
    let body = app.project.allSections[createView.positionCounter].body;
    body = app.templates.templateToHtml(templateNum, body);

    app.project.allSections[createView.positionCounter].body = body;
    app.project.renderAll($('#web-row-container'));

    app.project.updateProject();

    $('#user-input-menu').css('left', '-33%');
  }

  function renderSiteHeader() {
    let siteHeader = app.templates.templateToHtml('header', '');
    $('#web-row-container').append(siteHeader);

    console.log('reset the sections');
    createView.positionCounter++;
    let header = new app.Section(createView.positionCounter, app.templates.templateToHtml('header'));
    app.project.allSections.push(header);
    app.project.updateProject();
  }

  function createSection() {
    createView.positionCounter++;
    // currentSection++;
    let section = new app.Section(createView.positionCounter, defaultBody);

    app.project.allSections.push(section);
    app.project.updateProject();
    app.project.renderAll($('#web-row-container'));
    createView.renderSectionList();

    $('#user-input-menu').css('left', '0');
  }

  createView.initCreateView = function(ctx) {
    
    $('section').hide();
    $('section#web-builder-view').show();
    $('section#web-builder-view').children().show();
    $('body').css('background', '#ffffff');
    $('#hamburger-menu-icon').css('color', '#003459');
    
    if (ctx.params.project_id) {
      app.project = new app.Project(ctx.params.project_id, ctx.params.project_name);
      app.project.getProject(createView.displayProject);
      // app.project.updateProject();
    } else{
      // TODO: make new project in database.
    }
    createView.enableMenu(); 
  };

  createView.displayProject = function() {
    app.project.renderAll($('#web-row-container'))
    createView.positionCounter = app.project.allSections.length - 1;

    if (!$('#web-row-container > header').length) {
      renderSiteHeader();
    }

    createView.renderSectionList();

  };

  createView.renderSectionList = function() {

    $('#current-sections').empty();
    $('#section-count').text(app.project.allSections.length);

    let template = Handlebars.compile($('#edit-section-list').text());
    for (var i = 1; i < app.project.allSections.length; i++) {
      $('#current-sections').append(template(app.project.allSections[i]));
    }

    // $('.delete-section').on('click', deleteSection)
  }

  createView.enableMenu = function() {
    $('#hamburger-menu-icon').on('click', function () {
      $('#user-input-menu').css('left', '0');
    });
    $('#menu-exit').on('click', function() {
      $('#user-input-menu').css('left', '-33%');
    });
  };

  // function deleteSection() {
  //   let sectionToDelete = $(this).parent().data('order');

  //   app.project.allSections.splice(sectionToDelete, (sectionToDelete + 1));
  //   app.project.updateProject(page(`/create/${app.project.project_id}/${app.project.project_name}`));
    
  // }

  createView.testHtml = project_id => {
    $.get(`${ENV.apiUrl}/app/zip/:${project_id}`)
      .then(results => console.log(results))
      .catch(console.error)
  }
  
  module.createView = createView;

})(app);