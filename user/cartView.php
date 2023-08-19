<?php
include("connect.php");
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    // $data=json_decode(file_get_contents("php://input"),true);
    $sql ="select `cart`.product_id , `cart`.conte , `products`.product_name , `products`.price FROM `products` JOIN `cart` ON `cart`.`product_id`=`products`.`product_id` AND `cart`.`user_id`='$id'";
    $result = $conn->query($sql);
    // $row=mysqli_fetch_assoc($result);
    foreach ($result as $row) {
        $response[]=$row;
        
    }

    echo json_encode($response);

    // $i=0;
    // if($result->num_rows>0)
    // {
    //     foreach ($row as $key => $value) {
    //         $response[$i++]=$value;
    //     }         
    
    // }else{
    //     $response['message']="failed";
    //     echo json_encode($response);


    // }
}

?>