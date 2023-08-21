<?php
require("connect.php");
session_start();
$id=$_SESSION['id'];
$response=array();
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $product_id=$data['product_id'];
    $count=$data['count'];

    $query="SELECT * FROM `cart` WHERE `user_id`='$id' AND `product_id`='$product_id' ";
    $result=$conn->query($query);
    if($result->num_rows == 0){
        $sql ="INSERT INTO `cart`(`user_id`, `product_id`, `conte`, `is_ordered`, `order_id`) VALUES ('$id','$product_id',$count,0,0)";

        if($result = $conn->query($sql)){
            $response['message']="Inserted";
            echo json_encode($response);
        }

    }else{
        $row = $result->fetch_assoc();
        $count=(+$row['conte'])+$count;
        $sql="UPDATE `cart` SET `conte`='$count' WHERE `user_id`='$id' AND `product_id`='$product_id' ";
        if($conn->query($sql)){
            $response['message']="updated";
            echo json_encode($response);
        }
    }

}
?>