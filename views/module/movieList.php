<thead>
    <th>Title</th>
    <th>Year</th>
    <th>Type</th>
    <th>Poster</th>
</thead>

<?php

session_start();

if(!isset($_SESSION["username"]))
{
    session_destroy();
    session_unset();
    header('Location: /talentTest');
    exit;
}

if(isset($_POST["movieList"]))
{
    $movies = json_decode($_POST["movieList"]);

    foreach ($movies as $value) 
    {
        //var_dump($value->Title);

        ?><tr>
			<td><?php echo $value->Title; ?> </td>
			<td><?php echo $value->Year; ?> </td>
			<td><?php echo $value->Type; ?> </td>
			<td><img src="<?php echo ($value->Poster != "N/A") ? $value->Poster : "../../assets/src/img/img-default.jpeg"; ?>" title="<?php echo $value->Title; ?>" alt="Poster" width="50" height="60"> </td>
		</tr>
        <?php
    
    }
    //echo $movies;
}
?>