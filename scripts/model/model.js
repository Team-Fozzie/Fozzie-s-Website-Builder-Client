var app = app || {};

//TODO: Test the below functions
(function(module) {
  function Section(order, body, section){
    this.order = order;
    this.body = body;
  }

  Section.all = [];

  Section.renderAll = function(startElement) {
    Section.sortAll();
    Section.all.forEach(e => {
      $(startElement).append(e.render());
    })
  }

  Section.prototype.render = function (){
    var template = Handlebars.compile($('#section-template').text());
    this.body = marked(this.body);
    return template(this);
  }

  module.Section = Section;

  Section.sortAll = function() {
    Section.all.sort( (a,b) => a-b);
  }

})(app);