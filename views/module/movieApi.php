<?php

session_start();

if(!isset($_SESSION["username"]))
{
    session_destroy();
    session_unset();
    header('Location: /talentTest');
    exit;
}

//Function to get API data.
function callAPI($method, $url, $data)
{
    $curl = curl_init();
    switch ($method){
       case "POST":
          curl_setopt($curl, CURLOPT_POST, 1);
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
          break;
       case "PUT":
          curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
          break;
       default:
          if ($data)
             $url = sprintf("%s?%s", $url, http_build_query($data));
    }
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
       'Content-Type: application/json',
    ));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    $result = curl_exec($curl);
    if(!$result){die("Connection Failure");}
    curl_close($curl);
    return $result;
 }

if(isset($_POST["movieName"]) && $_POST["movieName"] != '')
{
    $get_data = callAPI('GET', 'https://www.omdbapi.com/?s='.$_POST["movieName"].'&apiKey=fc59da33', false);
    echo $get_data;
}

?>