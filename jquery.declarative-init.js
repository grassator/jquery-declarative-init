  /*!
   * Declarative Init - jQuery Plugin
   * Provides a way to init jquery plugins declaratively.
   * 
   * © 2012 Dmitriy Kubyshkin (http://kubyshkin.ru)
   * 
   * Version: 1.0
   * Requires: jQuery v1.5+
   *
   * Dual licensed under the MIT and GPL licenses:
   *   http://www.opensource.org/licenses/mit-license.php
   *   http://www.gnu.org/licenses/gpl.html
   */
(function($) {
  $.fn.declarativeInit = function(options) {
    var options = $.extend({
      pluginDefaults: {},
      pluginGetter: function(element) {
        // If there's no onclick there's nothing to initialize
        if(typeof element.onclick !== 'function') return false;

        // Getting a config and removing onclick handler
        var plugins = element.onclick();
        element.onclick = null;

        return plugins;
      }
    }, options);

    return this.each(function() {
      // Check that we got the plugins description
      var plugins = options.pluginGetter(this);
      if (!plugins) return;

      // We just iterate over the plugins and initialize them
      for (key in plugins) {
        $(this)[key]($.extend({}, options.pluginDefaults[key], plugins[key]));
      }
    });
  };
})(jQuery || Zepto);