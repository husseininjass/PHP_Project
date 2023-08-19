<?php
include("connect.php");
session_start();
$id=$_SESSION['id'];
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $edit=$data['edit'];
    if($edit==1){
        $fname=$data['fname'];

        $sql="UPDATE `users` SET `first_name`='$fname' WHERE `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }elseif ($edit==2) {
        $lname=$data['lname'];

        $sql="UPDATE `users` SET `last_name`='$lname' WHERE `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }elseif($edit==3){
        $email=$data['email'];

        $sql="UPDATE `users` SET `email`='$email' WHERE `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }elseif($edit==4){
        $oldpass=$data['oldpass'];
        $newpass=$data['newpass'];

        $sql="SELECT * FROM `users` WHERE `password`='$oldpass' and `user_id`='$id'";
        $result = $conn->query($sql);
        $response=array();
        if($result->num_rows>0){
            $query="UPDATE `users` SET `password`='$newpass' WHERE `user_id`='$id'";
            if($conn->query($query)===true){
                $response['message']="update";
            }else{
                $response['message']="error";
            }
            echo json_encode($response);
        }else{
            $response['message']="error password";
            echo json_encode($response);
        }
    }elseif($edit==5){
        $phone=$data['phone'];

        $sql="UPDATE `users` SET `phone`='$phone' WHERE `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }elseif($edit==6){
        $city=$data['city'];

        $sql="UPDATE `users` SET `city`='$city' WHERE `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }
    else{
        $address=$data['address'];

        $sql="UPDATE `users` SET `address`='$address' WHERE `user_id`='$id'";
        $response=array();
        if($conn->query($sql)===true){
            $response['message']="update";
        }else{
            $response['message']="error";
        }
        echo json_encode($response);
    }

}
?>