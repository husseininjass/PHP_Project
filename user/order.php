<?php
require('connect.php');
session_start();
$id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){

    $sql="SELECT * FROM `orders` WHERE  `user_id`='$id'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row=$result->fetch_assoc()){
            $response[]=$row;
        }
    }
        echo json_encode($response);
}
?>