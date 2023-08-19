<?php
include("connect.php");
session_start();
$id=$_SESSION['id'];
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $edit=$data['edit'];
    if($edit==1){
        $product_id=$data['product_id'];
        $sql="DELETE FROM `cart` WHERE `product_id` = '$product_id' AND `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }else{
        $sql="DELETE FROM `cart` WHERE `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }
}

?>