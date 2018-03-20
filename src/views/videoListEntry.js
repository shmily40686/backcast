var VideoListEntryView = Backbone.View.extend({
 // template: _.template('<div class="movie"> \
 //                          <div class="like"> \
 //                            <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
 //                          </div> \
 //                          <span class="title"><%- title %></span> \
 //                          <span class="year">(<%- year %>)</span> \
 //                          <div class="rating">Fan rating: <%- rating %> of 10</div> \
 //                        </div>')
 
  initialize: function(){
     // this.on('change',function(){
     //  _.each(this.template, this.render(model){})
     // },this)
   },
   
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

