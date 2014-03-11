<section class="main" id="success">
    <div class="message">
        <h3>{{page_title}}</h3>
        <p>{{page_content}}</p>
    </div>
    <div>
        <ul id="details">
            <item-details ng-repeat="item in items"></item-details>
        </ul>
    </div>
</section>
<object id="flash_test" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1">
    <param name="movie" value="/images/test.swf" />
    <!--[if !IE]>--><object type="application/x-shockwave-flash" data="/images/test.swf" width="1" height="1"><!--<![endif]-->
    <!--[if !IE]>--></object><!--<![endif]-->
</object>
