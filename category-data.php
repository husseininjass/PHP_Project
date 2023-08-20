<?php
require("connect.php");

session_start();
$id=$_SESSION['id'];
$sql ="SELECT * FROM `  categores` WHERE `category_id `=$id ";
$result = $conn->query($sql);
$rows=array();
if($result->num_rows>0){
while($row=$result->fetch_assoc()){
    $rows[]=$row;
}

}
echo json_encode($rows);
$conn->close()

?>