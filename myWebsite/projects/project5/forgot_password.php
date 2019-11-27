<!-- ISSUE: DISPLAY ERROR IF FORM IS NOT SUBMITED-->

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
		<title>Forgot Password</title>
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
	<body id='forgot_passwordPHP'>	
        <ul class='navigation-bar'>
			<li>User Authentication</li>
			<li class='active'><a href='home.php' >Home</a></li>
			<li><a href='signin.php'>Login</a></li>
			<li><a href='signup.php'>Sign up</a></li>
			<li><a href='forgot_password.php'>Forgot Password</a></li>
		</ul>
        <p>Password Reset Form</p>
        <form method='POST' action=''>
            <table>
                <tr>
                    <td>Email:</td>
                    <td><input type='email' value='' name='email' autocomplete='off' required></td>
                </tr>
                <tr>
                    <td>New Password:</td> 
                    <td><input type='password' value='' name='new_password' autocomplete='off' required></td>
                </tr>
                <tr>
                    <td>Confirm Password:</td> 
                    <td><input type='password' value='' name='confirm_password' autocomplete='off' required></td>
                </tr>
                <tr>
                    <td><button type='submit' id='passwordResetBtn' name='passwordResetBtn'>Reset Password</button></td>
                </tr>     
            </table>
        </form>
        <p><a href='signin.php'>Back</a></p>
		
	<!--JavaScript-->
	<script type='text/JavaScript' src='script.js'> </script>
	</body>
</html>
<?php
   
if(isset($_POST['passwordResetBtn'])){
    $email = $_POST['email'];
    $password1 = $_POST['new_password'];
    $password2 = $_POST['confirm_password'];

    if($password1 != $password2){
        echo "<p style='padding:20px; color:red;'>Password Doesnt Match</p>";	
    }else{
        $sqlQuery = "SELECT email FROM users WHERE email='$email'";

        if(mysqli_query($db_connection, $sqlQuery)){
            $hashed_password = password_hash($password1, PASSWORD_DEFAULT);
            
            $sqlUpdate = " UPDATE users SET password='$hashed_password' WHERE email='$email'";

            if(mysqli_query($db_connection, $sqlUpdate)){
                header('location:signin.php');
            }else{
               echo "Update Error: ".mysqli_error();	

            }
        }else{
            echo "<p style='padding:20px; color:red;'>Error Reset Password</p>".mysqli_error($db_connection);	
        }


    }


};


?>