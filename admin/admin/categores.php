
<?php
session_start();
include("../../user/connect.php");
if(isset($_GET['action']) && $_GET['action']!="" && $_GET['action']=='delete')
{
$category_id=$_GET['category_id'];

/*this is delet quer*/
mysqli_query($conn,"delete from categores where category_id='$category_id'")or die("query is incorrect...");
}

$display = 'none';
if(isset($_POST["edituser"])){
  $category_id=$_POST['categoryid'];
  $stat = "SELECT * FROM categores WHERE category_id='$category_id';";
  $result = mysqli_query($conn,$stat);
  $resultcheck1 = mysqli_num_rows($result);
  if($resultcheck1 > 0)
  {
      while($row = mysqli_fetch_assoc($result))
      {   $newName= $row["name"];
        
          $display= 'block';
      }
  }
}
if(isset($_POST["newuser"])){
  $newName= $_POST["newName"];
 
  $category_id= $_POST['categoryid'];
  $query1= "UPDATE categores SET name='$newName' WHERE category_id=$category_id;";
  $run1= mysqli_query($conn , $query1);
  $display= 'none';
}
$display2='none';
if(isset($_POST["addcat"])){

  $display2= 'block';
}
if(isset($_POST["addcats"])){
  $newName= $_POST["newName"];
  

  $query1= "INSERT into categores (name) values ('$newName') ";
  $run1= mysqli_query($conn , $query1);
  $display2= 'none';
}

include "sidenav.php";
include "topheader.php";
?>
      <!-- End Navbar -->
      <div class="content">
        <div class="container-fluid">
         <div class="col-md-14">
                    <div id="editdiv" style="display: <?php echo $display;?> ">
                      <form method="post">
                          <input type="hidden" value="<?php echo $category_id?>" name="categoryid">
                          <label class="col-2">category Name:</label>
                          <input class="col-5" type="text" value="<?php echo $newName?>" name="newName"><br>
                          
                          <input type="submit" class="btn btn-outline-secondary" value="Save" name="newuser">
                      </form>
                </div>
                <div id="editdiv" style="display: <?php echo $display2;?> ">
                      <form method="post">
                         
                          <label class="col-2">categorys Name:</label>
                          <input class="col-5" type="text" value="Name" name="newName"><br>
                          
                          <input type="submit" class="btn btn-outline-secondary" value="Save" name="addcats">
                      </form>
                </div>
            <div class="card ">
              <div class="card-header card-header-primary">
                <h4 class="card-title">Manage Categories</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive ps">
                  <table class="table tablesorter table-hover" id="">
                    <thead class=" text-primary">
                      <tr><th>category id</th>
                        <th>name</th>
	                      <th>
                          <form method="post">
                            <input class="btn btn-success" type="submit" value="Add New" name="addcat">
                          

                          </form>
                    </tr></thead>
                    <tbody>
                      <?php 
                        $result=mysqli_query($conn,"select category_id,name from categores")or die ("query 2 incorrect.......");

                        while(list($category_id,$name)=
                        mysqli_fetch_array($result))
                        {
                         
                        echo "<tr>
                        <td>$category_id</td>
                         <td>$name</td>";

                        echo'<td>
                        
                        <form method="post">
                        <input type="hidden" value="' . $category_id . '" name="categoryid">
                        <input class="btn btn-outline-primary" type="submit" value="Edit" name="edituser">
                        
                        <a class="btn btn-danger" href="activity.php?category_id=$category_id&action=delete">Delete<div class="ripple-container"></div></a>
                        </td></tr>

                        </form>';
                        
                        }
                        mysqli_close($conn);
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