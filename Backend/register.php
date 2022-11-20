<?php
include("connection.php");


if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["password"])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];
} else {
  $response = [];
  $response["success"] = false;
  echo json_encode($response);
  return;
}


$hash = password_hash(
  $password,
  PASSWORD_DEFAULT
);

$query = $mysqli->prepare("INSERT INTO users(name, email, password) VALUES(?,?,?)");
$query->bind_param("sss", $name, $email, $hash);
if($query->execute()){
$response["success"] = true;
}else{
  $response["success"] = false;

}
