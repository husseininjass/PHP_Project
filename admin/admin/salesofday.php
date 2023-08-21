
<?php
session_start();
include("../../user/connect.php");

error_reporting(0);
if(isset($_GET['action']) && $_GET['action']!="" && $_GET['action']=='delete')
{
$order_id=$_GET['order_id'];

/*this is delet query*/
mysqli_query($conn,"delete from orders where order_id='$order_id'")or die("delete query is incorrect...");
} 

///pagination
$page=$_GET['page'];

if($page=="" || $page=="1")
{
$page1=0; 
}
else
{
$page1=($page*10)-10; 
}
// $alterSql = "ALTER TABLE cart ADD CONSTRAINT unique_product_id UNIQUE (product_id)";
// if ($conn->query($alterSql) === TRUE) {
//     echo "Unique constraint added successfully.<br>";
// } else {
//     echo "Error adding unique constraint: " . $conn->error . "<br>";
// }


$sql = "SELECT cart.order_id, cart.user_id, products.product_name, cart.conte,orders.status ,orders.date_time
        FROM cart
        INNER JOIN products ON products.product_id = cart.product_id
        INNER JOIN orders on orders.order_id = cart.order_id";
        

$result = $conn->query($sql);
include "sidenav.php";
include "topheader.php";

?>
      <!-- End Navbar -->
      <div class="content">
        <div class="container-fluid">
          <!-- your content here -->
          <div class="col-md-14">
            <div class="card ">
              <div class="card-header card-header-primary">
                <h4 class="card-title">Orders List<?php echo $page;?> </h4>
              </div>
              <div class="card-body">
                <div class="table-responsive ps">
                  <table class="table table-hover tablesorter " id="">
                    <thead class=" text-primary">
                      <tr><th>order_id</th><th>User Id</th><th>Product Name</th><th>Count</th><th>Date Time</th><th>Status</th>
                    </tr></thead>
                    <tbody>
                      <?php 
                          while($row=mysqli_fetch_assoc($result)){
                            $orderid = $row['order_id'];
                            $user_id = $row['user_id'];
                            $product_name = $row['product_name'];
                            $count = $row['conte'];
                            $date = $row['date_time'];
                            $status = $row['status'];
                            echo "
                            <tr>
                              <td>$orderid</td>
                              <td>$user_id</td>
                              <td>$product_name</td>
                              <td>$count</td>
                              <td>$date</td>
                              <td>$status</td>
                            </tr>
                            ";
                          }
                      ?>
                    </tbody>
                  </table>
                  
                <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <?php
include "footer.php";
?>