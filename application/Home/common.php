<?php
// 这里封装网站所有需要函数，在网站任何地方都可以调用
    //获取IP地址，在需要获取IP地址时候直接调用getIP()就能获取客户端IP地址
    function getIP(){ 
        if (getenv('HTTP_CLIENT_IP')) { 
            $ip = getenv('HTTP_CLIENT_IP'); 
        } 
        elseif (getenv('HTTP_X_FORWARDED_FOR')) { 
            $ip = getenv('HTTP_X_FORWARDED_FOR'); 
        } 
        elseif (getenv('HTTP_X_FORWARDED')) { 
            $ip = getenv('HTTP_X_FORWARDED'); 
        } 
        elseif (getenv('HTTP_FORWARDED_FOR')) { 
            $ip = getenv('HTTP_FORWARDED_FOR'); 
        } 
        elseif (getenv('HTTP_FORWARDED')) { 
            $ip = getenv('HTTP_FORWARDED'); 
        } 
        else { 
            $ip = $_SERVER['REMOTE_ADDR']; 
        } 
        return $ip; 
    }


    function getRealIp()
{
    $ip=false;
    if(!empty($_SERVER["HTTP_CLIENT_IP"])){
        $ip = $_SERVER["HTTP_CLIENT_IP"];
    }
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ips = explode (", ", $_SERVER['HTTP_X_FORWARDED_FOR']);
        if ($ip) { array_unshift($ips, $ip); $ip = FALSE; }
        for ($i = 0; $i < count($ips); $i++) {
            if (!eregi ("^(10│172.16│192.168).", $ips[$i])) {
                $ip = $ips[$i];
                break;
            }
        }
    }
    return ($ip ? $ip : $_SERVER['REMOTE_ADDR']);
}

	// sort array by one column
	function array_sort($arr,$keys,$type='asc'){
		$keysvalue = $new_array = array();
		foreach($arr as $k=>$v){
			$keysvalue[$k] = $v[$keys];
		}
		
		if($type == 'asc'){
			asort($keysvalue);
		}else{
			arsort($keysvalue);
		}
		
		reset($keysvalue);
		foreach($keysvalue as $k=>$v){
			$new_array[$k] = $arr[$k];
		}
		return $new_array;
	}

    function Send_Mail($to,$cc,$subject,$body)
    {
       	import('Vendor.Mail');
        Vendor('PHPMailer.PHPMailerAutoload');
        $from = "customerservice.iwh@gmail.com";
        $mail = new PHPMailer();
        $mail->SMTPDebug = 0;
        $mail->CharSet = "UTF-8";
        $mail->Encoding = "base64";
        $mail->Debugoutput = 'html';
        $mail->IsSMTP(true); // SMTP
        $mail->SMTPAuth   = true;  // SMTP authentication
        $mail->Mailer = "smtp";
        $mail->SMTPSecure = 'tls';
        $mail->Host= "email-smtp.us-west-2.amazonaws.com"; // Amazon SES
        $mail->Port = 587;  // SMTP Port
        $mail->Username = "AKIAJIGDYWBCYUCRPCDA";  // SMTP  Username
        $mail->Password = "AtB2t01VswSHur/42mN7YLtbv0ZfWWmRTtbc5lAO8NTW";  // SMTP Password
        $mail->SetFrom($from, C('BUYERSENDEMAILFROM'));
        $mail->AddReplyTo($from,C('BUYERSENDEMAILFROM'));
        $mail->Subject = $subject;
        $mail->MsgHTML($body);
        $address = $to;
        $mail->AddAddress($address, $to);
        $ccArray = explode(";", $cc);
        for($i = 0; $i < count($ccArray); $i ++) {
            $mail->AddCC($ccArray[$i], $ccArray[$i]);
        }
        if(!$mail->Send()){
            //echo "Mailer Error: ".$mail->ErrorInfo;

            return false;
        } else {
            //echo "Message sent";

            return true;
        }
    }


    function Send_Mail_Seller($to,$cc,$subject,$body)
{

    import('Vendor.Mail');
    Vendor('PHPMailer.PHPMailerAutoload');
    $from = "customerservice.iwh@gmail.com";
    $mail = new PHPMailer();
    $mail->SMTPDebug = 0;
    $mail->CharSet = "UTF-8";
    $mail->Encoding = "base64";
    $mail->Debugoutput = 'html';
    $mail->IsSMTP(true); // SMTP
    $mail->SMTPAuth   = true;  // SMTP authentication
    $mail->Mailer = "smtp";
    $mail->SMTPSecure = 'tls';
    $mail->Host= "email-smtp.us-west-2.amazonaws.com"; // Amazon SES
    $mail->Port = 587;  // SMTP Port
    $mail->Username = "C('AKIAJIGDYWBCYUCRPCDA')";  // SMTP  Username
    $mail->Password = "AtB2t01VswSHur/42mN7YLtbv0ZfWWmRTtbc5lAO8NTW";  // SMTP Password
    $mail->SetFrom($from, C('SELLERSENDEMAILFROM'));
    $mail->AddReplyTo($from,C('SELLERSENDEMAILFROM'));
    $mail->Subject = $subject;
    $mail->MsgHTML($body);
    $address = $to;
    $mail->AddAddress($address, $to);
    $ccArray = explode(";", $cc);
    for($i = 0; $i < count($ccArray); $i ++) {
        $mail->AddCC($ccArray[$i], $ccArray[$i]);
    }
    if(!$mail->Send()){
        //echo "Mailer Error: ".$mail->ErrorInfo;

        return false;
    } else {
        //echo "Message sent";

        return true;
    }
}


    function getHeadInfo(){
        echo'<li><a href="'.__MODULE__.'/index/dealManager.html"id="mainLoginButton" class="logIn"><span>Deal Manager</span></a></li>';
        echo'<li><a href="'.__MODULE__.'/index/archivePage.html"  id="mainLoginButton" class="logIn"><span>Archive</span></a></li>	';
    }

    function getPhone(){
        echo ' <p class="bor-b-e5gray"><a href="'.__MODULE__.'/buyer/account.html" class="block pt15 pb15 fs14 lh1 tdn tc">Account</a></p>';
        echo ' <p class="bor-b-e5gray"><a href="'.__MODULE__.'/index/dealManager.html" class="block pt15 pb15 fs14 lh1 tdn tc">Deal Manager</a></p>';
        echo ' <p><a href="'.__MODULE__.'/index/archivePage.html" class="block fs14 lh1 tdn pt15 pb15 tc">Archive</a></p>';

    }

	//random number
    function generatePass()
    {
      srand((double)microtime()*1000000);
      $characters = explode(',', "a,b,c,d,e,f,g,h,i,j,k,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K");
      $len = count($characters)-1;
      $pass_len = 10;
      $pass = '';
      for ($i = 0; $i < $pass_len; $i++) {
          $x = rand(0, $len);
          $pass .= $characters[$x];
           }
      return $pass;
    }