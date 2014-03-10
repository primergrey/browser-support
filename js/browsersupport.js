var app = {
}

// **********************************************
// Build Basic Response
// **********************************************

    app.buildBasic = function(sLabel, sField, sValue, sIcon) {

        if(!sIcon)
            console.error('Missing parameters from basic build.');

        if(sField == 'bs_flash_version' && sValue == '0.0')
            sValue = 'Not Installed'

        return {
            label: sLabel,
            field: sField,
            readable: sValue,
            icon: sIcon
        };

    }

// **********************************************
// Operating System
// **********************************************

    app.operatingSystem = function() {

        var oBrowser = window.BS_browscap,
            oResponse = this.buildBasic('Operating System', 'bs_operating_system', 'Unknown OS ', 'question-circle');

        // Mac Intel
        if(oBrowser.os == 'MacOSX') {
            oResponse.readable = 'Mac OS X ';
            oResponse.icon = 'apple';

        // iOS
        } else if(oBrowser.os == 'iOS') {
            oResponse.readable = 'iOS ';
            oResponse.icon = 'apple';

        // Windows + Windows Mobile
        } else if(oBrowser.os.indexOf('Win') == 0) {
            oResponse.readable = oBrowser.os.replace('Win', 'Windows ');
            oResponse.icon = 'windows';

        // Android
        } else if(oBrowser.os == 'Android') {
            oResponse.readable = 'Android';
            oResponse.icon = 'android';

        // Firefox OS
        } else if(oBrowser.os == 'FirefoxOS') {
            oResponse.readable = 'Firefox OS';
            oResponse.icon = 'linux';

        // ChromeOS
        } else if(oBrowser.os == 'ChromeOS') {
            oResponse.readable = 'Chrome OS';
            oResponse.icon = 'linux'; // TODO: New Icon

        // Linux flavors
        } else if(oBrowser.os == 'Linux') {
            oResponse.readable = 'Linux';
            oResponse.icon = 'linux';

        // Blackberry
        } else if(oBrowser.os == 'RIM OS') {
            oResponse.readable = 'Blackberry';
            oResponse.icon = 'linux';

        // Web OS
        } else if(oBrowser.os == 'webOS') {
            oResponse.readable = 'Web OS';
            oResponse.icon = 'linux';

        // Unknown
        } else if(oBrowser.os) {
            oResponse.readable = oBrowser.os + ' ';
        }

        if(oBrowser.os_version && oBrowser.os.indexOf('Win') == -1)
            oResponse.readable += oBrowser.os_version + ' ';

        if(oBrowser.device_name && oBrowser.device_name != 'PC')
            oResponse.readable += 'on ' + oBrowser.device_name;

        return oResponse;

    }

// **********************************************
// Browser
// **********************************************

    app.browser = function() {
        var oBrowser = window.BS_browscap,
            oResponse = this.buildBasic('Browser', 'bs_browser', oBrowser.browser || 'Unkown Browser', 'desktop');

        // IE Rewrite
        if(oBrowser.browser == 'IE') oResponse.readable = 'Internet Explorer';
        if(oBrowser.browser == 'IEMobile') oResponse.readable = 'IE Mobile';

        if(oBrowser.browser_version)
            oResponse.readable += ' ' + oBrowser.browser_version;

        return oResponse;
    }

// **********************************************
// Screen Resolution
// **********************************************

    app.screenResolution = function() {

        var oResponse = this.buildBasic('Screen Resolution', 'bs_screen_resolution', '', 'picture-o');
        oResponse.readable = screen.width + ' x ' + screen.height;

        function isHighDensity() {
            return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
        }

        function isRetina() {
            return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        }

        if(isHighDensity() && !isRetina())
            oResponse.readable += ' (high density)';

        if(isRetina())
            oResponse.readable += ' (retina)';

        return oResponse;
    }

// **********************************************
// Cookies
// **********************************************


    app.cookies = function() {

        var oResponse = {
            label: 'Cookies Enabled',
            field: 'bs_cookies',
            readable: 'No',
            icon: 'thumbs-down'
        };

        function createCookie(name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            else expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function eraseCookie(name) {
            createCookie(name, "", -1);
        }

        function areCookiesEnabled() {
            var r = false;
            createCookie("bs_test", "Hello", 1);
            if(readCookie("bs_test") != null) {
                r = true;
                eraseCookie("bs_test");
            }
            return r;
        }

        if(areCookiesEnabled()) {
            oResponse.readable = 'Yes';
            oResponse.icon = 'thumbs-up';
        }

        return oResponse;
    }

// **********************************************
// Geolocation
// **********************************************

    app.geolocation = function() {
        var oResponse = this.buildBasic('Geolocation', 'bs_geolocation', 'Supported', 'map-marker');
        if(Modernizr.geolocation != true)
            oResponse.readable = 'Not Supported';
        return oResponse;
    }

// **********************************************
// HTML5 Capabilities
// **********************************************

    app.htmlCapabilities = function() {

        var oResponse = this.buildBasic('HTML5 Support', 'bs_html', null, 'html5'),
            aTesters = ['canvas', 'draganddrop', 'hashchange', 'video'], // multi-dimensional responses are parsed separately post-for
            iSupported = 0;

        oResponse.details = {};

        for(var i=0;i < aTesters.length;i++) {
            oResponse.details[aTesters[i]] = {
                label: aTesters[i],
                value: (Modernizr[aTesters[i]]) ? true : false
            }
            if(Modernizr[aTesters[i]]) iSupported++;
        }

        oResponse.details['placeholder'] = {
            label: 'placeholder',
            value: Modernizr.input.placeholder
        };

        if(Modernizr.input.placeholder) iSupported++;
        aTesters.push('placeholder');

        oResponse.readable = Math.round((iSupported/aTesters.length) * 100) + '%';
        return oResponse;
    }

// **********************************************
// CSS3 Capabilities
// **********************************************

    app.cssCapabilities = function() {

        var oResponse = this.buildBasic('CSS3 Support', 'bs_css', null, 'css3'),
            aTesters = ['fontface', 'backgroundsize', 'boxshadow', 'opacity', 'rgba', 'csstransforms', 'csstransitions', 'mediaqueries'], // multi-dimensional responses are parsed separately post-for
            iSupported = 0;

        oResponse.details = {};

        for(var i=0;i < aTesters.length;i++) {
            oResponse.details[aTesters[i]] = {
                label: aTesters[i],
                value: (Modernizr[aTesters[i]]) ? true : false
            }
            if(Modernizr[aTesters[i]]) iSupported++;
        }

        oResponse.readable = Math.round((iSupported/aTesters.length) * 100) + '%';
        return oResponse;
    }

// **********************************************
// Angular : browserDetails
// **********************************************

    swfobject.registerObject('flash_test', '6'); // used for flash version testing
    var oFlashVersion = swfobject.getFlashPlayerVersion();

    angular.module('browserDetails', [])
        .controller('DetailsItems', function($scope) {
            var aItems = [
                app.operatingSystem(),
                app.browser(),
                app.screenResolution(),
                app.buildBasic('Browser Size', 'bs_browser_size', $(window).width() + ' x ' + $(window).height(), 'expand'),
                app.buildBasic('Color Depth', 'bs_color_depth', screen.colorDepth + ' bit', 'th'),
                app.buildBasic('Javascript Enabled', 'bs_javascript', 'Yes', 'coffee'),
                app.buildBasic('IP Address', 'bs_ip_address', window.BS_ip_address, 'location-arrow'),
                app.cookies(),
                app.buildBasic('Flash Version', 'bs_flash_version', oFlashVersion.major + '.' + oFlashVersion.minor, 'youtube-play'),
                app.geolocation(),
                app.htmlCapabilities(),
                app.cssCapabilities()
            ];
            $scope.items = aItems;

        })
        .directive('itemDetails', function() {
            return {
                restrict: 'E',
                templateUrl: '../templates/list-item.tpl'
            }
        });

// TODO:
// Add dynamic browser size functionality.
// Flash Version if no flash
// Actual Flash Icon