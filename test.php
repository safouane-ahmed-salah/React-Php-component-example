<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once 'vendor/autoload.php';
React\Component::setTags();

function test(){
    ob_start();
    $a = "TzoxNDoiUmVhY3RcVGFnXENhcmQiOjM6e3M6NToic3RhdGUiO086ODoic3RkQ2xhc3MiOjE6e3M6NzoiY291bnRlciI7aToxO31zOjg6IgAqAHByb3BzIjtPOjg6InN0ZENsYXNzIjowOnt9czoxMToiACoAY2hpbGRyZW4iO2E6MDp7fX0=";
    $b = unserialize(base64_decode($a));    

    ob_end_clean();
    echo $b;

    die();
}

echo test();