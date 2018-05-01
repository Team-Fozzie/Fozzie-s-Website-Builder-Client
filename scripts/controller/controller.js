'use strict';
// const ENV = '';
const ENV = {};
ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://fozzie-web-builder.herokuapp.com'
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

var app = app || {};

//proof of life function
function Test() {
    $.get(`${ENV.apiUrl}/users`)
        .then(results => {
            console.log(results);
        });
    // .catch(console.error());
}

Test();
// function testCallback(results) {
//     $('p').text(results);
// }