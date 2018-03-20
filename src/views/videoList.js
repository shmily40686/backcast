var VideoListView = Backbone.View.extend({
  initialize: function(){
     this.listenTo(this.collection, 'sync', this.render); 
     //'change' also works
     // for(var i = 0 ; i < this.collection.length; i++){
     //   this.collection[i].render();
     // }
   },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    // this.collection.forEach(function(video) {
      
    // })
    
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
