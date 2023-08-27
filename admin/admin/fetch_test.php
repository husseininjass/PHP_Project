<?php include("../../user/connect.php") ?>
<?php 
session_start();
$josn_data = $_SESSION['json'];
echo $josn_data;
?>