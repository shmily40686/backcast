var VideoListEntryView = Backbone.View.extend({
  
  el: ".video-list-entry media",

  initialize: function(){
    // this.videos = new Videos(window.exampleVideoData)
  },
  
  events: {
    'click .video-list-entry-title' : 'handler'
  },
   
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log('the $el on video list entry view ', (this));
    return this;
  },
  
  handler: function(){
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});

