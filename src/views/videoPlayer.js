var VideoPlayerView = Backbone.View.extend({

  el: '.video-player',

  initialize : function() {
    this.listenTo(this.collection, 'select', this.render);
  },

  
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this.$el;
  },
  
  // selectVideo: function() {
  //   // this.model = selection;
  //   this.render();
  // },

  template: templateURL('src/templates/videoPlayer.html')

});
