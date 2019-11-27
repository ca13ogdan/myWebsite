<?php
    include_once('database.php');
    //Remove Access Page Without Database Connection
    if($_SESSION['accessBlock'] == null){
        header('location:index.php');
    };
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Register Page</title>
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
	<body id='signupPHP'>	
        <ul class='navigation-bar'>
			<li>User Authentication</li>
			<li class='active'><a href='home.php' >Home</a></li>
			<li><a href='signin.php'>Login</a></li>
			<li><a href='signup.php'>Sign up</a></li>
			<li><a href='forgot_password.php'>Forgot Password</a></li>
		</ul>
		<p>Registration Form</p>
       
        <form method='POST' action=''>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type='text' value='' name='username' min=4 autocomplete='off' placeholder='Username' required ></td>
                </tr>
                <tr>
                    <td>Password:</td> 
                    <td><input type='password' value='' name='password' min=6 autocomplete='off' placeholder='Password' required ></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type='email' value='' name='email' autocomplete='off' placeholder='Email' required ></td>
                </tr>   
                <tr>
                    <td></td>
                    <td><button type='submit' name='signupBtn' value='Signup'>Submit</button></td>
                </tr> 
            </table>
        </form>
		<p><a href='home.php'>Back</a></p>
	<!--JavaScript-->
	<script type='text/JavaScript' src='script.js'> </script>
	</body>
</html>
<?php
    if(isset($_POST['signupBtn'])){
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sqlInsert = "INSERT INTO users (username, password, email, join_date)
                    VALUES ('$username', '$hashed_password', '$email', now())";

        if(mysqli_query($db_connection, $sqlInsert)){
            $result = "<p style='padding:20px; color:green'>Registration Successfull.</p>";
        }else{
            $result = "<p style='padding:20px; color:red'>An error occurred:".mysqli_error($db_connection)."</p>";
        }   
        
        echo $result;
    }  
?>
