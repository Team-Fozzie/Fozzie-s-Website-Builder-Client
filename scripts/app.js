'use strict';


function Test(callback) {
    $.get('/')
        .then(results => {
            testCallback(results);
        })
        .catch(console.error());
}
function testCallback(results) {
    $('p').text(results);
}