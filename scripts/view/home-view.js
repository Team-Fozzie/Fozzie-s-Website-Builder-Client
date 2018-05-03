'use strict';

var app = app || {};

(function (module) {
    var homeView = {};

    homeView.initHomeView = function () {
        $('section').hide();
        $('#home-view').show();
        $('#error-block').animate({ opacity: 0 });

        $('#home-view-signup').on('submit', function(event) {
            event.preventDefault();
            let username = $('#username').val();
            let email = $('#email').val();
            let password = $('#password').val();
            
            $.ajax({
                url: `${ENV.apiUrl}/users/${username}`,
                method: 'POST',
                data: {
                    username: username,
                    email: email,
                    password: password
                }
            })
            .then(results => {
                app.user = new app.User(results.username, results.email, results.user_id);     
                page(`/projects/${results.user_id}`);
            })
            .catch(homeView.displayError());

        });
    }
    homeView.displayError = function() {
        $('#error-block').animate({ opacity: 1 })
        $('#home-view-signup').on('change', function (event) {
            $('#error-block').animate({ opacity: 0 })
        });
    }
    module.homeView = homeView;
})(app);