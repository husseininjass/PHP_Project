
<?php
require("connect.php");

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $email=$data['email'];
    $password=$data['password'];
    $response=array();
    $sql="SELECT `user_id`, `first_name` FROM `users` WHERE `email`='$email' and `password`='$password'";
    $result=$conn->query($sql);
    if($result->num_rows > 0){
        $row=$result->fetch_assoc();
        session_start();
        $_SESSION['id']=$row['user_id'];
        $_SESSION['firstname']=$row['first_name'];
        $response['message']="success";
    }else{
        $response['message']="Email Or Password Not Valid";

    }
    echo json_encode($response);
}

?>