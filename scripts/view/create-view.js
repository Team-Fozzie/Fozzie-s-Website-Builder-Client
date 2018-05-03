'use strict';

const defaultBody = `<section class="cols-1 template-body"><article><img src="./assets/img/fozzie-web-builder-logo.png" alt="img alt"></article></section>`;

var app = app || {};

(function (module) {
    var createView = {};

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

    createView.initCreateView = function(ctx) {
        console.log('project_id', ctx.params.project_id);
        if (ctx.params.project_id) {
            project = new Project(ctx.params.project_id, '');
            project.getProject();
            project.renderAll($('#web-row-container')); 
        } else {
            // TODO: make new project in database.
        }
        $('section').hide();
        $('section#web-builder-view').show();
        $('section#web-builder-view').children().show();
        $('body').css('background', '#ffffff');
    } 

    module.createView = createView;

})(app);