<?php
require('connect.php');
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $order_id=$data['order_id'];

    $sql="UPDATE `cart` SET `is_ordered`=1,`order_id`='$order_id' WHERE `user_id`='$id' AND `is_ordered`=0 ";
    if($conn->query($sql)===true){
        $response['message']="update";
    }else{
        $response['message']="error";
    }
    echo json_encode($response);
}

?>