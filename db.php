<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "e-commerce";

// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if($conn->connect_error){
    die("Connection Faild: ".$conn->connect_error);
}


?>
