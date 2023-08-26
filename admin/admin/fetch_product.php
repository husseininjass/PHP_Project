<?php include("../../user/connect.php") ?>
<?php 
if(isset($_POST['submit'])){
    $category_id = $_POST['category'];
    $query = "SELECT * FROM products WHERE category_id = $category_id";
    $result = $conn->query($query);
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row; 
    }
    echo json_encode($rows); 
    header("Location: ../../shop.html");

}