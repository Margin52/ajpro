<?php 
	//字符编码
	header("Content-type: text/html; charset=utf-8");

	//1.接受前端传来的数据
	$phonenum = $_GET["phonenum1"];
	$idnum = $_GET["idnum1"];
	$password = $_GET["password1"];
	//2.
		//1).连接数据库（搭桥）
		$con = mysql_connect("localhost","root","root");
		if(!$con){
			die('Could not connect: '.mysql_error());
		}else{
			//2).选择数据库（选择交流的目的地）
			mysql_select_db("epet",$con);
			//3).执行语句（SQL语句）（数据的传输）
			$sqlstr  = "insert into epetinfo(phonenum,idnum,password) values('".$phonenum."','".$idnum."','".$password."')","";
			$result = mysql_query($sqlstr,$con);
			//4).关闭数据库（拆桥）
			mysql_close($con);
		}
?>
