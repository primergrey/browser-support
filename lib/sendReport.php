<?php
require './Mustache/Autoloader.php';
Mustache_Autoloader::register();

$Mustache = new Mustache_Engine(array(
    'loader' => new Mustache_Loader_FilesystemLoader(dirname(dirname(__FILE__)).'/templates')
));
