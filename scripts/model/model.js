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

  
  //startElement must be a jQuery element
  Project.prototype.renderAll = function(startElement) {
    $(startElement).empty();
    this.sortAll();
    this.allSections.forEach(e => {
      $(startElement).append(e.render());
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
Project.prototype.getProject= function() {
  $.get(`${ENV.apiUrl}/app/data/${project}`)
      .then(function(results) {
          let htmlArr = JSON.parse(results.html);
          this.allSections = htmlArr.map((e, i) => {
              return new Section(i, e)
          })
          .catch(console.error);
      })
}
Project.getProjects = function(user_id){
  $.get(`${ENV.apiUrl}/app/data/${user_id}`)
  .then(results => {
    var proj = new Project(results[0].project_id, results[0].project_name);
    let htmlArr = JSON.parse(results[0].html);
    proj.allSections = htmlArr.map( (e,i) => new Section(i, e));
    //FIXME: WHY DOESNT THE RETURN RETURN STUFF!
    console.log(proj)
    return proj;
  })
}
  module.Section = Section;
  module.Project = Project;


  Project.prototype.sortAll = function() {
    this.allSections.sort( (a,b) => a.order-b.order);
  }

})(app);

//TODO: TEST Project --- REMEMBER TO DELETE

var project = new app.Project( 1, 'BUSMALL MEMORY GAME');



