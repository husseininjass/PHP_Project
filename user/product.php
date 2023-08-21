<?php
require("connect.php");

$response=array();
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $product_id=$data['product_id'];


    $sql ="SELECT * FROM `products` WHERE `product_id`='$product_id' ";

    if($result = $conn->query($sql)){
        foreach ($result as $row) {
            $response[]=$row;
        }
        echo json_encode($response);

    }

}
?>