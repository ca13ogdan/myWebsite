<?php
    session_start();
    $client_servername = $_SESSION['servername'];
	$client_username = $_SESSION['username'];
    $client_password = $_SESSION['password'];
    $client_database = $_SESSION['database']; 	
	$db_connection = mysqli_connect($client_servername, $client_username, $client_password, $client_database); 



    

?>