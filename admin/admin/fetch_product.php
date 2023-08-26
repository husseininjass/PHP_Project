<?php include("../../user/connect.php") ?>
<?php 
if(isset($_POST['submit'])){
    $category_id = $_POST['category'];
    $query = "SELECT * FROM products WHERE category_id = $category_id";
    $result = mysqli_query($conn,$query);
    $rows = array();
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row; 
    }

    echo json_encode($rows); 
    header("Location: ../../shop.html");
}
?>