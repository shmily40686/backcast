var AppView = Backbone.View.extend({

  el: '#app',
  

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    console.log('videos in appView', this.videos)
    // this.model.on('change' , function(e){
    //   this.render();
    // })
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});


