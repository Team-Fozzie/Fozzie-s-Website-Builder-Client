'use strict';
/*
land on this page AFTER sign up or log in
retrieve there project data from the DB
get the name of the projects
make individual LI from them
*/
var app = app || {};
(function (module) {
    var projectView = {};
    projectView.initProjectView = function (ctx) {
        $('section').hide(); 
        $('#project-view').show();
        
        

        $.get(`${ENV.apiUrl}/user/projects/${ctx.params.user_id}`)
            .then(results => {
                if(results.length){
                    let template = Handlebars.compile($('#project-li-template').text());
                    $('#project-view ul').append(template(ctx.params));
                }
                let template = Handlebars.compile($('#add-new-project-li').text());
                $('#project-view ul').append(template(ctx.params));
            })
            .catch(console.error(error));

            


            
    //     page('/projects');
        //how to get the user data from the DB and populate the project-view interface with new li per project name
        //let template = Handlebars.compile($('#book-detail-template').text());
        // $('.book-detail').append(template(ctx.book));
        // to UPDATE the project BUT ONLY the name of it
        // $('#update-btn').on('click', function() {
        //   page(`/books/${$(this).data('id')}/update`);
        // });
        // to DELETE the project from the project view and all contents of it from DB
        // $('#delete-btn').on('click', function() {
        //   module.Project.destroy($(this).data('id'));
        // });
    };
    module.projectView = projectView;
})(app);