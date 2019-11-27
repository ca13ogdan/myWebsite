<?php session_start(); 
	unset($_SESSION['accessBlock']);
?>
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--CSS-->
		<link rel='stylesheet' type='text/css' href='style.css'>
		<!--Babel-->
		<script src='https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.js'></script>
		<!--JQuery-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<!--icons-->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<!--SweetAlert-->
		<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
		<!--AngularJS-->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
		
	</head>
	<body>	
		<div id='client-form'>
			<form id='client-data-form' method='POST'>
				<p>Server Name <input type='text' id='client-servername' name='client-servername' placeholder='Required' onkeyup='clientKeyPress()'></p>
				<p>User Name <input type='text' id='client-username' name='client-username' placeholder='Required' onkeyup='clientKeyPress()'></p>
				<p>Password <input type='password' id='client-password' name='client-password' placeholder='Optional' autocomplete='OFF'></p>
				<p>Database <input type='text' id='client-database' name='client-database' placeholder='Optional' autocomplete='OFF'></p>
				<p><button id='client-submit-btn' name='client-submit-btn' value='submit' disabled>Submit</button></p>
			</form>
		</div>	
	<!--JavaScript-->
	<script type='text/JavaScript' src='script.js'> </script>
	</body>
</html>
<?php
	  if(isset($_POST['client-submit-btn'])){
        $client_servername = $_POST['client-servername'];
        $client_username = $_POST['client-username'];
        $client_password = $_POST['client-password'];
        $client_database = $_POST['client-database'];

        $db_connection = mysqli_connect($client_servername, $client_username, $client_password, $client_database);

        if($db_connection){
			//Create Table If Datababase Exists 
			if(mysqli_select_db($db_connection, $client_database)){
				$createTable = 'CREATE TABLE IF NOT EXISTS users(
					id int(100) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					username VARCHAR(40) NOT NULL,
					password VARCHAR(255) NOT NULL,
					email VARCHAR(100) NOT NULL UNIQUE,
					join_date TIMESTAMP
					)';
				if(!mysqli_query($db_connection,$createTable)){
					echo 'Error Create Table: '.mysqli_error();
				}
			$_SESSION['database'] = $client_database;
			}
			//If $client_database Is Empty Then Create Database 
			if(empty($client_database)){
				$sql = 'CREATE DATABASE IF NOT EXISTS register';

				if(!mysqli_query($db_connection,$sql)){
					echo "Error Create Default Database: ".mysqli_error($db_connection);
				}
				mysqli_select_db($db_connection, 'register');
				//Create Default Table
				$createTable = 'CREATE TABLE IF NOT EXISTS users(
					id int(100) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					username VARCHAR(40) NOT NULL,
					password VARCHAR(255) NOT NULL,
					email VARCHAR(100) NOT NULL UNIQUE,
					join_date TIMESTAMP
					)';
				if(!mysqli_query($db_connection,$createTable)){
					echo 'Error Create Table: '.mysqli_error();
				}

			$_SESSION['database'] = 'register';
			}
			//Get mysql info
			$_SESSION['servername'] = $client_servername;
			$_SESSION['username'] = $client_username;
			$_SESSION['password'] = $client_password;	
			$_SESSION['accessBlock'] = 1;	
            header('location:home.php'); 
        }else{
            header('location:index.php');
        }
    }
?>
