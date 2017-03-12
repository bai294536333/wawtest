<?php
	$usen=$_GET["nickname"];
	define('HOST','localhost');
	define('USER','root');
	define('PASSWORD','');
	define('DBNAME','wowapp');
	$con = new mysqli(HOST,USER,PASSWORD,DBNAME);
     if($con->connect_error){
        exit('连接失败'.$con->connect_error);
    }
    $con->set_charset('utf8');
    $sql = "update user set nickname='$usen' where id=1";
    $result=$con->query($sql);
    if ($con->affected_rows>0) {
       echo "1";
    }else{
         echo "2";
    }
    // $con->close()

?>