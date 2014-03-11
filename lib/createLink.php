<?php

require_once 'helpers.php';

if($_REQUEST['from_email']) {

    $aResponse = array();

    $aDocument = array(
        'from_email' => $_REQUEST['from_email'],
        'from_name' => $_REQUEST['from_name'] ? $_REQUEST['from_name'] : 'PG Support'
    );

    if($_REQUEST['from_name'])
        $aDocument['from_name'] = $_REQUEST['from_name'];

    $collection->insert($aDocument);


    $aResponse = $aDocument;
    $aResponse['_id'] = $aResponse['_id']->__toString();

    DoSuccess($aResponse);

} else {
    DoError(array(), 'Client email address is required.', 101);
}

?>