<!DOCTYPE html>
<html lang="en" xmlns:ng="http://angularjs.org" id="ng-app" ng-app="browserDetails">
    <head>
        <meta charset="utf-8">
        <title>Browser Support | Primer Grey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <!-- Favicons -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" media="screen" href="/css/pgbs.main.css">
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="/js/modernizr.js"></script>
        <script src="/js/swfobject.js"></script>
        <script src="/js/browsersupport.js"></script>

        <!-- Implement redirect to "Javascript Disabled" notifications -->
        <noscript>
            <meta http-equiv="refresh" content="0; url=whatyouwant.html" />
        </noscript>


    </head>
    <body>
        <pre></pre>
        <div class="wrapper">
            <header>
                <div class="inside">
                    <h2 class="left"><a href="http://primergrey.com/">Primer Grey</a></h2>
                    <h1 class="right">Browser Support</h1>
                </div>
            </header>
            <section class="main" id="success">
                <div class="message">
                    <h3>Thank You.</h3>
                    <p>Your system and browser details have been sent along to<br>
                    Primer Grey for further troubleshooting.</p>
                </div>
                <div ng-controller="DetailsItems">
                    <ul id="details">
                        <item-details ng-repeat="item in items"></item-details>
                    </ul>
                </div>
            </section>
        </div>
        <object id="flash_test" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1">
            <param name="movie" value="/images/test.swf" />
            <!--[if !IE]>--><object type="application/x-shockwave-flash" data="/images/test.swf" width="1" height="1"><!--<![endif]-->
            <!--[if !IE]>--></object><!--<![endif]-->
        </object>
        <script type="text/javascript">
            <?php $aBrowser = get_browser(null, true) ?>
            window.BS_ip_address = '<?= $_SERVER["REMOTE_ADDR"] ?>';
            window.BS_browscap = {
                os: '<?= $aBrowser["platform"] ?>',
                os_version: '<?= $aBrowser["platform_version"] ?>',
                browser: '<?= $aBrowser["browser"] ?>',
                browser_version: '<?= $aBrowser["version"] ?>',
                device_name: '<?= ($aBrowser["device_name"] && $aBrowser["device_name"] !== "unknown") ? $aBrowser["device_name"] : false ?>'
            };
        </script>
    </body>
</html>
