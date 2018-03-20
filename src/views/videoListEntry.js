var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title' : 'handler'
  },
   
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  handler: function(){
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});

