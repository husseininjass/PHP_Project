<?php include("../../user/connect.php") ?>
<?php 
if(isset($_POST['category'])){
    $category_id = $_POST['category'];
    $query = "SELECT * FROM products WHERE category_id = $category_id";
    $result = $conn->query($query);
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row; 
    }
    session_start();
    $_SESSION['json'] = json_encode($rows);
    
    header("Location: ../../shop.html");

}
?>