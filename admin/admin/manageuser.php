
<?php
session_start();
// include("../../db.php");
include("../../user/connect.php");
if(isset($_GET['action']) && $_GET['action']!="" && $_GET['action']=='delete')
{
$user_id=$_GET['user_id'];

/*this is delet quer*/
mysqli_query($conn,"delete from users where user_id='$user_id'")or die("query is incorrect...");
}
// $updates= "UPDATE users SET first_name='Doe' WHERE id=2";
$display = 'none';
if(isset($_POST["edituser"])){
  $user_id=$_POST['userid'];
  $stat = "SELECT * FROM users WHERE user_id='$user_id';";
  $result = mysqli_query($conn,$stat);
  $resultcheck1 = mysqli_num_rows($result);
  if($resultcheck1 > 0)
  {
      while($row = mysqli_fetch_assoc($result))
      {   $newfName= $row["first_name"];
          $newlName= $row["last_name"];
          $newEmail= $row["email"];
          $newmobile= $row["phone"];
          $newPassword= $row["password"];
          $display= 'block';
      }
  }
}
if(isset($_POST["newuser"])){
  $newfName= $_POST["newfName"];
  $newlName= $_POST["newlName"];
  $newEmail= $_POST["newEmail"];
  $newmobile= $_POST["newmobile"];
  $newPassword= $_POST["newPassword"];
 
  $user_id= $_POST['userid'];
  $query1= "UPDATE users SET first_name='$newfName', last_name='$newlName',email='$newEmail',
  phone='$newmobile',password='$newPassword' WHERE user_id=$user_id;";
  $run1= mysqli_query($conn , $query1);
  $display= 'none';
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
                        <input type="hidden" value="<?php echo $user_id?>" name="userid">
                        <label class="col-2">First Name:</label>
                        <input class="col-5" type="text" value="<?php echo $newfName?>" name="newfName"><br>
                        <label class="col-2">Last Name:</label>
                        <input class="col-5" type="text" value="<?php echo $newlName?>" name="newlName"><br>
                        <label class="col-2">Email:</label>
                        <input class="col-5" type="text" value="<?php echo $newEmail?>" name="newEmail"><br>
                        <label class="col-2">Mobile:</label>
                        <input class="col-5" type="text" value="<?php echo $newmobile?>" name="newmobile"><br>
                        <label class="col-2">Password:</label>
                        <input class="col-5" type="text" value="<?php echo $newPassword?>" name="newPassword"><br>
                     
                        <input type="submit" class="btn btn-outline-secondary" value="Save" name="newuser">
                    </form>
                </div>
            <div class="card ">
              <div class="card-header card-header-primary">
                <h4 class="card-title">Manage User</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive ps">
                  <table class="table tablesorter table-hover" id="">
                    <thead class=" text-primary">
                      <tr><th>User id</th>
                        <th>First_name</th>
                        <th>last_name</th>
                        <th>Email</th>
                       
                <th>User Password</th>
                <th>mobile</th>
                <th>city</th>
                <th>Address</th>
	                      <th><a href="addsuppliers.php" class="btn btn-success">Add New</a></th>
                    </tr></thead>
                    <tbody>
                      <?php 
                        $result=mysqli_query($conn,"select user_id,first_name,last_name, email, password,address,phone,city from users")or die ("query 2 incorrect.......");

                        while(list($user_id,$user_name,$user_last,$email,$password,$address,$mobile,$city)=
                        mysqli_fetch_array($result))
                        {
                         
                        echo "<tr>
                        <td>$user_id</td>
                         <td>$user_name</td>
                          <td>$user_last</td>
                           <td>$email</td>

                        <td>$password</td>
                         <td>$mobile</td>
                          <td>$address</td>
                           <td>$city</td>";

                        echo"  <td>
                          
                        
                        <a class='btn btn-danger' href='manageuser.php?user_id=$user_id&action=delete'>Delete<div class='ripple-container'></div></a>
                        </td></tr>";


                        echo'<td>
                        
                        <form method="post">
                        <input type="hidden" value="' . $user_id . '" name="userid">
                        <input class="btn btn-outline-primary" type="submit" value="Edit" name="edituser">
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