'use strict';

var app = app || {};

(function (module) {
    var homeView = {};

    homeView.initHomeView = function () {
        $('section').hide();
        $('#home-view').show();

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
                // MIGHT NOT NEED CONSTRUCTOR

                page(`/projects/${results.user_id}`);
            })
            .catch(console.error('username or email already is registerd'));

        });
    }
    module.homeView = homeView;
})(app);