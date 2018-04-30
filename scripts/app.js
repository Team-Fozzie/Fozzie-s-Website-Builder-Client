'use strict';
// const ENV = '';
const ENV = {};
ENV.apiUrl = 'https://fozzie-web-builder.herokuapp.com';

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