<?php
switch($_REQUEST["method"]){
    case 'get':
        echo sendInfoGet();
    break;
    case 'post':
        echo sendInfoPost();
    break;
}
/*
    REQUEST FUNCTION ( GET & POST METHOD): 
    Only example, I do not use it. But in case you desire it
    you do not need to do the switch above because you could 
    do it with just this function.  
*/
function sendInfoRequest(){
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $method = $_REQUEST['method'];
    $array = array(
        "method" => $method,
        "name" => $name,
        "email" => $email,
    );
    return json_encode($array);
}
// GET METHOD
function sendInfoGet(){
    $name = $_GET['name'];
    $email = $_GET['email'];
    $method = $_GET['method'];
    $array = array(
        "method" => $method,
        "name" => $name,
        "email" => $email,
    );
    return json_encode($array);
}
// POST METHOD
function sendInfoPost(){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $method = $_POST['method'];
    $array = array(
        "method" => $method,
        "name" => $name,
        "email" => $email,
    );
    return json_encode($array);
}

?>