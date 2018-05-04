var app = app || {};

//TODO: Test the below functions
(function(module) {
  function Project(project_id, name){
    this.name = name;
    this.project_id = project_id;
    this.allSections = [];
  }
  function Section(order, body){
    this.order = order;
    this.body = body;
  }
  function User(username, email, user_id) {
    this.username = username;
    this.email = email;
    this.user_id = user_id;
  }

  
  //startElement must be a jQuery element
  Project.prototype.renderAll = function(startElement, currentlySelected) {
    $(startElement).empty();
    this.sortAll();
    this.allSections.forEach((e, i) => {
      if (i === currentlySelected){
        let template = Handlebars.compile($('#current-selection-template'));
        $(startElement).append(template(this));
        $('section.currently-selected').append(e.render());
      }
      else {
        console.log('Are we getting HERE?')
        $(startElement).append(e.render());
      }
    })
  }

  Section.prototype.render = function (){
    var template = Handlebars.compile($('#section-template').text());
    return template(this);
  }
// updating the project
Project.prototype.updateProject = function(callback){
  let htmlArr = [];
  this.allSections.forEach(e => htmlArr.push(e.body));
  let htmlStr = JSON.stringify(htmlArr);
  $.ajax({
      url: `${ENV.apiUrl}/app/data/${this.project_id}`,
      method: 'PUT',
      data: { html: htmlStr }
  })
      .then(callback);
}

// getting the info of a specifically selected project from the project page
Project.prototype.getProject = function(callback) {
  $.get(`${ENV.apiUrl}/app/project/${this.project_id}`)
      .then(results => {
          if(results[0].html) {
            let htmlArr = JSON.parse(results[0].html);
            console.log(htmlArr);
            app.project.allSections = htmlArr.map((e, i) => {
              return new Section(i, e)
            })
          }
          console.log('this', this);
          console.log(this.allSections);
      })
      .then(callback)
      .catch(console.error);
}
// Project.getProjects = function(user_id){
//   // $.get(`${ENV.apiUrl}/app/data/${user_id}`)
//   // .then(results => {
//   //   var proj = new Project(results[0].project_id, results[0].project_name);
//   //   let htmlArr = JSON.parse(results[0].html);
//   //   proj.allSections = htmlArr.map( (e,i) => new Section(i, e));
//   //   //FIXME: WHY DOESNT THE RETURN RETURN STUFF!
//   //   console.log(proj)
//   //   return proj;
//   })
// }
  module.Section = Section;
  module.Project = Project;
  module.User = User;


  Project.prototype.sortAll = function() {
    this.allSections.sort( (a,b) => a.order-b.order);
  }

})(app);

//TODO: TEST Project --- REMEMBER TO DELETE

app.project = new app.Project( 1, 'BUSMALL MEMORY GAME');



