/*!
 * Declarative Init - jQuery Plugin
 * Provides a way to init jquery plugins declaratively.
 * 
 * © 2012-2013 Dmitriy Kubyshkin (http://kubyshkin.ru)
 * 
 * Version: 1.0.1
 * Requires: jQuery v1.5+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/*global jQuery, Zepto*/
(function($) {
  $.fn.declarativeInit = function(options) {
    options = $.extend({
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
      for (var key in plugins) {
        // Nicer error message 
        if(!$.fn[key] && console && console.error) {
          console.error("Plugin '" + key + "' not found while initializing");
        } else {
          $(this)[key]($.extend({}, options.pluginDefaults[key], plugins[key]));
        }
      }
    });
  };
})(jQuery || Zepto);