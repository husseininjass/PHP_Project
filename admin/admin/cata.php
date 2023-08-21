<?php include("../../user/connect.php")?>

<?php 
$sql = "SELECT * FROM categores";
$result = $conn->query($sql);

$rows = array();
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

echo json_encode($rows);
?>