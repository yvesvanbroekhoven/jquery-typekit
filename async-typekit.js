(function($){

  var _log;
  
  window.AsyncTypekit = {}
  
  window.AsyncTypekit.init = function(id, options){
    
    if (id === undefined) {
      
      _log("Typekit script ID is missing");
      return false;
      
    } else {
      
      options = options ? $.extend({}, AsyncTypekit.defaults, options) : AsyncTypekit.defaults;
      
      $.getScript(options.typekit_url + id + '.js', function(){
        
        window.Typekit.load({
          loading: function(){
            // Javascript to execute when fonts start loading
            $("html").addClass("typekit-loading");
            if ($.isFunction(options.onLoading)) {
              options.onLoading();
            }
          },
          active: function(){
            // Javascript to execute when fonts become active
            if ($.isFunction(options.onActive)) {
              options.onActive();
            }
          },
          inactive: function(){
            // Javascript to execute when fonts become inactive
            $("html").addClass("typekit-inactive");
            if ($.isFunction(options.onInactive)) {
              options.onInactive();
            }
            _log("Typekit fonts inactive");
          }
        });
        
      });
    }
    
  };
  
  window.AsyncTypekit.defaults = {
    typekit_url : "http://use.typekit.com/"
  , onLoading   : false
  , onActive    : false
  , onInactive  : false
  };
  
  _log = function(msg){
    if (typeof console !== undefined) {
      console.log(msg);
    }
  }

}(jQuery));