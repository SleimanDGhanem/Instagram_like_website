<?php
include("connection.php");

if (isset($_POST["email"]) && isset($_POST["password"])) {
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

// $query = $mysqli->prepare("Select * from articles");
$query = $mysqli->prepare("SELECT *  FROM users WHERE email = ? ");
$query->bind_param("s", $email);

$query->execute();
$array = $query->get_result();
 $result = $array->fetch_assoc();

 if(isset($result) && password_verify($password, $result['password'])){
  header("Location: http://www.google.com");
}else{
  echo "you made a mistake";
}


?>