<?php
require('connect.php');
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $order_id=$data['order_id'];
    
    $sql="SELECT `products`.`photo`, `products`.`product_name`, `cart`.`conte`, `cart`.`price` FROM `cart` JOIN `products` ON `cart`.`product_id`=`products`.`product_id` AND `cart`.`user_id`='$id' AND `cart`.`order_id`='$order_id'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row=$result->fetch_assoc()){
            $response[]=$row;
        }
    }
        echo json_encode($response);
}
?>