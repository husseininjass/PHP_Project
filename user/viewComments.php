<?php
require("connect.php");
// session_start();
// $id=$_SESSION['id'];

$response=array();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $product_id=$data['product_id'];


    $sql ="SELECT `comments`.`comment`, `users`.`first_name` FROM `comments` JOIN `users` ON `comments`.`user_id`=`users`.`user_id` AND `comments`.`product_id`='$product_id'";

    $result = $conn->query($sql);
    // $row=mysqli_fetch_assoc($result);
    foreach ($result as $row) {
        $response[]=$row;
    }

    echo json_encode($response);

}
?>