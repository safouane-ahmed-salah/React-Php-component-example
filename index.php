<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once 'vendor/autoload.php';

// if(!empty($_POST['phpreact'])){
//     // ob_start();
//     React\Component::setTags();
//     $post = json_decode($_POST['phpreact']);
//     $a = unserialize(base64_decode($post->component)); 
//     ob_end_clean();
//     echo $a;
//     // echo new React\Tag\div('test');

//     // var_dump('test');
//     return '';
// }


use React\Tag\App;



echo new App;