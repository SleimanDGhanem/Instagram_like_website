<?php
session_start();
include("connection.php");

$query = $mysqli->prepare("SELECT *  FROM photos");

$query->execute();
$array = $query->get_result();
$result = $array->fetch_assoc();

if(isset($result)){
  $response["success"] = true;
  echo json_encode($result);
}else{
  $response["success"] = false;
  echo json_encode($response);
}



?>