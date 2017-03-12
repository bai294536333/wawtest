<?php
$user=$_GET["aa"];
$link=mysqli_connect('localhost','root','','wowapp',3306);
$sql="select username from user";
$result=mysqli_query($link,$sql);
$arr=mysqli_fetch_all($result,MYSQL_ASSOC);
// 结果集转换成数组(关联/索引数组)
$len=count($arr);
for($i=0;$i<$len;$i++){
	if($user==$arr[$i]['username']){
		echo "false";
		return;
	};
};
echo "true";
?>