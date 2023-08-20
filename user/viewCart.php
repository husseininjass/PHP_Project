<?php
require("connect.php");
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    // $data=json_decode(file_get_contents("php://input"),true);
    $sql ="select `cart`.product_id , `cart`.conte , `products`.product_name , `products`.price , `products`.`photo` FROM `products` JOIN `cart` ON `cart`.`product_id`=`products`.`product_id` AND `cart`.`user_id`='$id'";
    $result = $conn->query($sql);
    // $row=mysqli_fetch_assoc($result);
    foreach ($result as $row) {
        $response[]=$row;
        
    }

    echo json_encode($response);

}
?>