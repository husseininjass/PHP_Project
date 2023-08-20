<?php
require("connect.php");
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $sql="INSERT INTO `orders`(`user_id`, `status`) VALUES ('$id',0)";
        if($conn->query($sql)===true){
            $query="SELECT `order_id` FROM `orders` WHERE `order_id`";
            if($conn->query($query))
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
}

?>