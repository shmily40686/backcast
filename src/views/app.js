var AppView = Backbone.View.extend({

  el: '#app',
  

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // console.log('videos in appView', this.videos)
    this.render();
    // this.listenTo(this.collection, 'change', this.render);
  },


  render: function() {
    this.$el.html(this.template());
    // console.log('this.collection is ', this.template());
    // this.videos.collection.render();
    
    new VideoPlayerView ({
      el: this.$(".video-player"),
      collection: this.videos,
    }).render();
    
    new VideoListView ({
      el: this.$(".video-list"),
      collection: this.videos, //i think this is wrong
    }).render();
    
    // console.log('videos in render', this.videos)
    // console.log('the collection in render', this.collection)
    return this;
  },

  template: templateURL('src/templates/app.html')

});


