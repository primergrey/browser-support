PG Browser Support
===============

A small little tool to gather user system and browser details for efficient configuration-specific troubleshooting.

## Capabilities

### Supported Operating Systems
Currently, operating systems are determined using PHP's `get_browser()` output. Ideally this is transitioned over to a solution that is entirely Javascript. 

* Mac OS X
* Windows 
* iOS
* Windows Mobile _(not tested)_
* Android _(not tested)_
* Firefox OS _(not tested)_
* Linux _(not tested)_
* Blackberry _(not tested)_
* WebOS _(not tested)_


### Supported Browsers
* _Chrome (not implemented)_
* _Chrome Mobile (not implemented)_
* _Firefox (not implemented)_
* _Firefox for Mobile (not implemented)_
* _SeaMonkey? (not implemented)_
* _Safari (not implemented)_
* _Safari Mobile (not implemented)_
* _Internet Explorer (not implemented)_
* _Internet Explorer Mobile (not implemented)_
* _Opera (not implemented)_
* _Opera Mobile (not implemented)_
* _Chromium (not implemented)_
* _Konquerer (not implemented)_
* _Kindle (not implemented)_
* _Blackberry Browser (not implemented)_
* _Iris (not implemented)_
* _Dolphin (not implemented)_
* _Web OS (not implemented)_

### HTML5 Capabilities
HTML5 Capabilities are determined via [Modernizr](http://modernizr.com/).

* `canvas`
* `draganddrop`
* `hashchange`
* `video`
* `placeholder`

### CSS3 Capabilities
CSS3 Capabilities are determined via [Modernizr](http://modernizr.com/).

* `@font-face`
* `background-size`
* `box-shadow`
* `opacity`
* `rbga()`
* `transform`
* `transition`
* `mediaqueries`

### Miscellaneous Capabilities
* Geolocation API
* Javascript
* Flash
* Cookies

### General Statistics
* Screen Resolution (+ hd or retina)
* Browser Window Size
* Color Depth
* IP Address
* Flash Version

## Todos
* Implement Browser Detection.
* Automate browscap.ini updating. 
* Alerts for out-of-date items.
* Expand HTML5/CSS3 items to show specifics on tested capabilities.
* More specific responses for Linux distros.
* Make browser size update in real time. 
* Pure javascript alternative to php-browscap.
* Change `item.readable` to be named more semantically. 

### Icons Needed
* Chrome OS
* Chrome Browser
* Firefox OS
* Blackerry / RIM OS
* Flash (currently using YouTube play button)

## Notes

**Browscap.ini Version:** 5024







