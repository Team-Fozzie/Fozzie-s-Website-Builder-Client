'use strict';

var app = app || {};

(function (module) {
    var homeView = {};

    homeView.initHomeView = function () {
        $('section').hide();
        $('#home-view').show();
    }

    $('#home-view-signup').on('submit', function(event) {
        event.preventDefault();
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
        
        $.ajax({
            url: `${ENV.apiUrl}/users/${username}`,
            method: 'POST',
            data: {
                email: email,
                password: password
            }
        })
        .then(results => console.log(results));

        // let user = new app.User(username, email, password);

    });

    // homeView.submitUser = function(event) {
    //     console.log("prevent default");
    //     event.preventDefault();
    //     var username = $('username').val();
    //     console.log(username);
    //     // Create New User with a constructor with input details
    //     // let user = new User(username, email, password);
      

    // }


    module.homeView = homeView;
})(app);