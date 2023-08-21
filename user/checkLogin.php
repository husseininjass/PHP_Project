<?php

session_start();
// $id=$_SESSION['id'];
// vardump($id);
// var_dump(isset($_SESSION['id']));
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $id=isset($_SESSION['id']);
    echo json_encode($id);
}
?>