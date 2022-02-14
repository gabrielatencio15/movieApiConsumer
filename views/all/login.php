<?php

class SessionObject
{
	public 	$username="";	
	public 	$email="";
    public 	$phonenumber="";
	public 	$loggedin="";
}


if(isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["phonenumber"]))
{

    $user = new SessionObject();

    $user->username = $_POST["username"];
    $user->email = $_POST["email"];
    $user->phonenumber = $_POST["phonenumber"];
    $user->loggedin = true;

    session_start();

    $_SESSION['username'] = $user->username;
    $_SESSION['email'] = $user->email;
    $_SESSION['phonenumber'] = $user->phonenumber;
    $_SESSION['loggedin'] = $user->loggedin;
    //exit;

}
    
?>