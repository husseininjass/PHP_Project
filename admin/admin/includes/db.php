<?php

$server="localhost";
$username="root";
$password="";
$dbname="e-commerce";

$conn=new mysqli($server, $username, $password, $dbname);
if($conn->connect_error){
    die("Connection Faild: ".$conn->connect_error);
}

?>