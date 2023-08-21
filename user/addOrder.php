<?php
require("connect.php");
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    // $date=new Date();
    $data=json_decode(file_get_contents("php://input"),true);
    $sql="INSERT INTO `orders`(`user_id`, `status`) VALUES ('$id',0)";
        if($conn->query($sql)===true){
                $last_id = $conn->insert_id;
                $response['message']="update";
                $response['id']=$last_id;
        }else{
            $response['message']="error insert";
        }
        echo json_encode($response);
}

?>