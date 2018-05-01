var app = app || {};

//TODO: Test the below functions
(function(model) {
  function Section(){
    this.order = 0;
    this.html = '';
  }

  Section.all = [];

  Section.renderAll = function(startElement) {
    Section.sortAll();
    Section.all.forEach(e => {
      e.render(startElement)
      startElement = e;
    })
  }

  Section.prototype.render = function (previousElement){
    previousElement.after(this.html);
  }

  module.Section = Section;

  Section.sortAll = function() {
    Section.all.sort( (a,b) => a-b);
  }

})(app);