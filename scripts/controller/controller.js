'use strict';
// const ENV = '';
const ENV = {};
ENV.apiUrl = 'https://fozzie-web-builder.herokuapp.com';

var app = app || {};

//proof of life function
function Test() {
    $.get(`${ENV.apiUrl}/users`)
        .then(results => {
            console.log(results);
        });
    // .catch(console.error());
}

// updating the project
function updateProject(project_id) {
    Section.all.forEach(e => htmlArr.push(e.body));
    let htmlStr = JSON.stringify(htmlArr);
    $.ajax({
        url: `/app/data/${project_id}`,
        method: 'PUT',
        data: { html: htmlStr }
    })
        .then(callback);
}

// getting the info of a specifically selected project from the project page
function getProject() {
    $.get(`/app/data/${project}`)
        .then(results => {
            let htmlArr = JSON.parse(results.html);
            let Section.all = htmlArr.map((e, i) => {
                return new Section(i, e)
            })
        })
}
Test();
// function testCallback(results) {
//     $('p').text(results);
// }