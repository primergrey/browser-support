<?php

// **********************************************
// Error Response JSON
// **********************************************

    function DoError($aParams, $sMessage = null, $iCode = 0) {
        $aResponse = $aParams;
        if($sMessage) $aResponse['message'] = $sMessage;
        if($iCode) $aResponse['code'] = $iCode;
        $aResponse['status'] = 'error';
        header('Content-type: application/json');
        http_response_code(400);
        echo json_encode($aResponse);
        exit;
    }

// **********************************************
// Success Response JSON
// **********************************************

    function DoSuccess($aParams) {
        $aResponse = $aParams;
        $aResponse['status'] = 'success';
        header('Content-type: application/json');
        echo json_encode($aResponse);
        exit;
    }

// **********************************************
// Mongo Connection
// **********************************************

    $mongo = new MongoClient();
    $db = $mongo->selectDB('browsersupport');
    $collection = $db->links;