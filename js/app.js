window.App = Ember.Application.create();

App.Router.map(function(){
  this.resource("front", { path: "/" });
  this.resource("TX", {path: "/TX"});
});

App.FrontController = Ember.ObjectController.extend({
  actions: {
    clickState: function(state){
      this.transitionToRoute(state.replace("US-", ""));
    }
  }
});

App.MapView = Ember.View.extend({
  templateName: 'map',
  didInsertElement: function(){
    this._super();
    self = this
    $('#world-map').vectorMap({map: 'us_aea_en',
      backgroundColor: "black",
      onRegionClick: function(e, code) {
        self.get("controller").send("clickState", code);
        $(".jvectormap-label").remove();
      }
    });
  }
})
