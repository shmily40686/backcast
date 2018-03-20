var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // console.log('videos in appView', this.videos)
    console.log('this.videos is ', this.videos)
    this.videos.on('all', this.render, this);
    this.render();
    // this.listenTo(this.collection, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template());
    // console.log('this.collection is ', this.template());
    // this.videos.collection.render();
    
    new VideoPlayerView ({
      el: this.$(".player"),
      model: this.videos.at(0)
    }).render();
    
    new VideoListView ({
      el: this.$(".list"),
      collection: this.videos //i think this is wrong
    }).render();
    
    // console.log('videos in render', this.videos)
    // console.log('the collection in render', this.collection)
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});


