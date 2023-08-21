<?php
require("connect.php");
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $comment=$data['comment'];
    $product_id=$data['product_id'];
    $sql="INSERT INTO `comments`(`user_id`, `product_id`, `comment`) VALUES ('$id','$product_id','$comment')";
        if($conn->query($sql)===true){
                $response['message']="inserted";
        }else{
            $response['message']="error insert";
        }
        echo json_encode($response);
}

?>