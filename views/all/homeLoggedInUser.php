<head>
	<meta charset="UTF-8">
	<title>Product Devs Test</title>
</head>
<?php 

session_start();

if(isset($_SESSION["username"]))
{
    require('nav.php');
    require('../module/movieModule.php');
    require('footer.php');
}
else
{
    header('Location: /talentTest');
    exit;
}

?>