<?php
include("connection.php");

session_start();
echo $_FILES["file"]["tmp_name"];


 
  $filename = $_FILES["file"]["name"];

  $caption = $_POST['caption'];


$user_id = $_SESSION['user_id'];
  // Get all the submitted data from the form
  $query = $mysqli->prepare("INSERT INTO photos(filename, caption, user_id) VALUES(?,?,?)");

  $query->bind_param("ssi", $filename, $caption, $user_id);
  // Execute query
  if($query->execute()){
    $response = [];
    $response['success'] = true;
    echo json_encode($response);
  }else{
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
  }

  $folder ="../Frontend/images/" . $filename;
  $tempname = $_FILES["file"]["tmp_name"];
  // Now let's move the uploaded image into the folder: image
  if (move_uploaded_file($tempname, $folder)) {
      echo "Image Uploaded Successfully";

  } else {
      echo "Failed";
  }


