<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "onlineshop";

// Create connection
$con = new mysqli($servername, $username, $password,$db);

// Check connection
if($con->connect_error){
    die("Connection Faild: ".$con->connect_error);
}


?>
