<?php
	session_start();
    //Remove Access Page Without Database Connection
    if($_SESSION['accessBlock'] == null){
        header('location:index.php');
    };
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Homepage</title>
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
	<body id='homePHP'>	
		<ul class='navigation-bar'>
				<li>User Authentication</li>
				<li class='active'><a href='home.php' >Home</a></li>
				<li><a href='signin.php'>Login</a></li>
				<li><a href='signup.php'>Sign up</a></li>
				<li><a href='forgot_password.php'>Forgot Password</a></li>
		</ul>

		<?php if(!isset($_SESSION['loggedinUsername'])){
			echo
			"<h1>User Authentication System</h1>
			<p>A login and  registration System with PHP.</p>
			<p>You are curently not signedin <a href='signin.php'>Login</a>. Not yet a member? <a href='signup.php'>Signup</a></p>";
		}else{
			echo "<p>You are logged in as ".$_SESSION['loggedinUsername']." .<a href='logout.php'>Logout</a></p>";
		}; ?>

		
	<!--JavaScript-->
	<script type='text/JavaScript' src='script.js'> </script>
	</body>
</html>

