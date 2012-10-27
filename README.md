# jQuery Declarative Init Plugin

Provides a way to initialize jquery plugins from the elements they are linked to.
It works with both jQuery and Zepto.

## Basic Usage

First of all we need some plain old jQuery plugin. I will use [lightweight-datepicker](http://maximzhukov.com/demos/lw-datepicker/) for this example since it's really nice and has configuration options which is what we need. Let's say we have a field like this that needs a date picker:

    <input type="text" id="date1">
    
Now we need a way to specify that this fields needs some query plugins applied to it, so we add a class:

    <input type="text" id="date1" class="jquery-declarative-init">

Next thing we need is a way to specify which plugins we need so we add configuration as an `onclick` attribute:

    <input type="text" id="date1" class="jquery-declarative-init" onclick="return {
        lwDatepicker: { autoFillToday: true }
    }">
    
In options we use a hash where key is plugin name and value is a hash of options for the plugin. All that's left is to run this jquery plugin:

    $('.jquery-declarative-init').declarativeInit();

## Configuration

- `pluginDefaults` - (default: `{}`) - A hash of default options for plugins that will be merged with the ones provided in DOM element.

- `pluginGetter` - (default is function to get plugins from `onclick`) - this is an advanced option that let's you change a way plugins are specified. You can for example use html5 `data-*` attributes.

## Demo

Live demo available [here](http://kubyshkin.ru/samples/jquery-declarative-init.html).