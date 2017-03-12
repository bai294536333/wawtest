<?php

$user=$_GET["user"];
$pass=$_GET["pass"];

$link=mysqli_connect('localhost','root','','wowapp',3306);
$sql="insert into user (`username`,`password`) value ('{$user}','{$pass}') ";
$result=mysqli_query($link,$sql);

session_start();
$_SESSION['name']=$user;

if(mysqli_affected_rows($link)==1){
	echo '1';
	return;
}else{
	echo '2';
	return;
}
?>