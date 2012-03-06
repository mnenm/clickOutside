(function($){
  $.fn.clickOutside = function(config){
    var root   = $(this);
    var option = $.extend({
      onOutside: function(){
        $(document).trigger('clickOutside');           
      }
    }, config);

    $(document).click(function(ev){
      if (ev.target !== root && !root.has(ev.target).length){
        option.onOutside();
      }
    });
  }
})(jQuery)
