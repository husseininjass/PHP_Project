<?php
require("connect.php");
// session_start();
// $id=$_SESSION['id'];
$response=array();
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $category_id=$data['category'];


    $sql ="SELECT * FROM `products` WHERE `category_id`='$category_id' ";

    if($result = $conn->query($sql)){
        foreach ($result as $row) {
            $response[]=$row;
        }
        echo json_encode($response);

    }

}
?>