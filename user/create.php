<?php
require("./connect.php");
header("Content-Type: application/json");


if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $firstName=$data['firstName'];
    $lastName=$data['lastName'];
    $email=$data['email'];
    $mobile=$data['mobile'];
    $password=$data['password'];
    $city=$data['city'];
    $address=$data['address'];
    
    $response=array();
    $query="SELECT * FROM `users` WHERE `email`='$email'";
    $result=$conn->query($query);
    if($result->num_rows == 0){
       $sql="INSERT INTO `users`(`first_name`, `last_name`, `email`, `password`, `address`, `phone`, `city`) VALUES ('$firstName','$lastName','$email','$password','$address','$mobile','$city')";
    
        if($conn->query($sql)===true){
            $response['message']="Data stored successfully";
        }else{
            $response['message']="Error: ".$sql."<br".$conn->error;
        }
        echo json_encode($response);
    }else{
        $response['message']="Email Not Valid";
        echo json_encode($response);
    }
}
$conn->close();
?>