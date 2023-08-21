<?php
session_start();
session_unset();
if($_SERVER["REQUEST_METHOD"]=="POST"){
    session_destroy();
    
    echo json_encode("Done");

}
?>