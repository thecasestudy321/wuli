<?php
session_start();
$json = $_GET['jsoncallback'];
$uid = $_SESSION['all_exe_uid'];
$school = $_SESSION['all_exe_school'];
echo $json.'({"success":true,"code":200,"msg":"\u6210\u529f","obj":{"nickname":"'.$school.'","schoolname":"'.$school.'","schoolid":291808,"uid":"'.$uid.'","bind_phone":0,"isSetPassword":1,"isFirstLogin":1,"lq":1,"nobook_session":"xh6uSG9QuT9biXqITP9JT9CnASpV06qF9e6JQRwe","usericon":null,"role":0,"experienceVipState":1,"vip":1,"vip_endtime":9999999999,"vipInfo":{"CZWlTE4lVgz9":{"vip":1,"vip_endtime":9999999999},"GZWLcJQXfD9W":{"vip":1,"vip_endtime":9999999999}}},"map":"","list":"","errcode":0})';
?>