<?php
session_start();
$uid = $_GET['uid'];
$school = $_GET['school'];
$_SESSION['all_exe_uid']=$uid;
$_SESSION['all_exe_school']=$school;
header("Location:/");
exit;
?>