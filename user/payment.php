<?php
require("connect.php");
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $edit=$data['edit'];
    if($edit==1){
        $sql="SELECT `products`.`quantity`,`cart`.`conte`,`cart`.`product_id` ,`products`.`product_name` FROM `products` JOIN `cart` ON `cart`.`product_id`=`products`.`product_id` AND `cart`.`user_id`='$id' AND `cart`.`is_ordered`=0";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            while($row=$result->fetch_assoc()){
                $response[]=$row;
            }
            
            }
            echo json_encode($response);
    }elseif($edit=2){
        $quantity=$data['quantity'];
        $product_id=$data['product_id'];

        $sql="UPDATE `products` SET `quantity`= '$quantity' WHERE `product_id`='$product_id'";
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }else{
        
    }
        $conn->close();
}

?>