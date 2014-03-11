<?php
require_once './helpers.php';
require './Mustache/Autoloader.php';

Mustache_Autoloader::register();

$Mustache = new Mustache_Engine(array(
    'loader' => new Mustache_Loader_FilesystemLoader(dirname(dirname(__FILE__)).'/templates')
));

$Template = $Mustache->loadTemplate('report');
$SendParams = $collection->findOne(array('_id' => new MongoId($_REQUEST['link_id'])));

$aTemplateArgs = $_REQUEST;
$aTemplateArgs['from_email'] = $SendParams['from_email'];
$aTemplateArgs['from_name'] = $SendParams['from_name'] ? $SendParams['from_name'] : false;

$subject = 'Support Details';

$headers = "From: " . strip_tags($SendParams['from_email']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

mail('web@primergrey.com', $subject, $Template->render($aTemplateArgs), $headers);