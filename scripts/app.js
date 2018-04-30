'use strict';
// const ENV = '';
const ENV = {};
ENV.apiUrl = 'https://fozzie-web-builder.herokuapp.com';

function Test(callback) {
    $.get(`${ENV.apiUrl}/users`)
        .then(results => {
            console.log(results);
        });
    // .catch(console.error());
}
// function testCallback(results) {
//     $('p').text(results);
// }