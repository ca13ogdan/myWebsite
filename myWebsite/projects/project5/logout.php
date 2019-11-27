<?php
    session_start();

    unset($_SESSION["loggedinUsername"]);
    header('location:home.php');
?>