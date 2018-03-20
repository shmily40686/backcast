var VideoListView = Backbone.View.extend({
  
  // el: ".video-list",
  
  initialize: function({ 'collection': collection }){
     this.collection = collection
     this.listenTo(this.collection, 'sync', this.render); 
     console.log("collection",this.collection.models);
   },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    // for(var i = 0 ; i < this.collection.models.length; i++) {
    //    var eachModel = new VideoListEntryView ({ model : this.collection.models[i]}) 
    //       eachModel.render();
    // }
    // _.each(this.collection.models, function(video) {
    //   var eachModel = new VideoListEntryView ({model: video});
    //   console.log('model', eachModel)
    //   this.$el.append(eachModel.render());
    // }, this)
    
          
  // console.log('eachModel.render is ', eachModel.render());
  // console.log('eachModel.render().el is ',eachModel.render().el)
    
    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).render().el;
 
      })
    );
    return this;
       
    },

  template: templateURL('src/templates/videoList.html')

});
