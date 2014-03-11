<!DOCTYPE html>
<html lang="en" xmlns:ng="http://angularjs.org" id="ng-app" ng-app="browserDetails">
    <head>
        <meta charset="utf-8">
        <title>Browser Support | Primer Grey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <!-- Favicons -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" media="screen" href="/css/pgbs.main.css">
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
        <script src="/js/angular-route.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="/js/modernizr.js"></script>
        <script src="/js/swfobject.js"></script>
        <script src="/js/zclip.js"></script>
        <script src="/js/browsersupport.js"></script>

        <!-- Implement redirect to "Javascript Disabled" notifications -->
        <noscript>
            <meta http-equiv="refresh" content="0; url=whatyouwant.html" />
        </noscript>


    </head>
    <body>
        <div class="wrapper">
            <header>
                <div class="inside">
                    <h2 class="left"><a href="http://primergrey.com/">Primer Grey</a></h2>
                    <h1 class="right">Browser Support</h1>
                </div>
            </header>
            <div ng-view></div>
        </div>
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
