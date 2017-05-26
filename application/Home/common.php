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
        vendor('PHPMailerSi.PHPMailerAutoload');
        $from = "leeprincehz@gmail.com";
        // $from = "customerservice.iwh@gmail.com";//有效的发件人
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
        $mail->SetFrom($from, config('BUYERSENDEMAILFROM'));
        $mail->AddReplyTo($from,config('BUYERSENDEMAILFROM'));
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

        vendor('PHPMailerSi.PHPMailerAutoload');
        $from = "leeprincehz@gmail.com";
        // $from = "customerservice.iwh@gmail.com";
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
        $mail->SetFrom($from, config('SELLERSENDEMAILFROM'));
        $mail->AddReplyTo($from,config('SELLERSENDEMAILFROM'));
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

    function send_emial_163()
    {
        vendor('PHPMailer163.PHPMailerAutoload');
        $toemail = 'leeprince@foxmail.com';//定义收件人的邮箱           
        $mail = new PHPMailer();            
        $mail->isSMTP();// 使用SMTP服务         
        $mail->CharSet = "utf8";// 编码格式为utf8，不设置编码的话，中文会出现乱码            
        $mail->Host = "smtp.163.com";// 发送方的SMTP服务器地址           
        $mail->SMTPAuth = true;// 是否使用身份验证          
        $mail->Username = "leeprincehz@163.com";//</span><span style="color:#ff6666;">// 发送方的163邮箱用户名，就是你申请163的SMTP服务使用的163邮箱</span><span style="color:#333333;">           
        $mail->Password = "leeprince163";//</span><span style="color:#ff6666;">// 发送方的邮箱密码，注意用163邮箱这里填写的是“客户端授权密码”而不是邮箱的登录密码！</span><span style="color:#333333;">   
        $mail->SMTPSecure = "ssl";//</span><span style="color:#ff6666;">// 使用ssl协议方式</span><span style="color:#333333;">            
        $mail->Port = 994;// 163邮箱的ssl协议方式端口号是465/994           
        $mail->setFrom("leeprincehz@163.com","LeePrince");// 设置发件人信息，如邮件格式说明中的发件人，这里会显示为Mailer(xxxx@163.com），Mailer是当做名字显示          
        $mail->addAddress($toemail,'prince');// 设置收件人信息，如邮件格式说明中的收件人，这里会显示为Liang(yyyy@163.com)          
        $mail->addReplyTo("leeprincehz@163.com","Reply");// 设置回复人信息，指的是收件人收到邮件后，如果要回复，回复邮件将发送到的邮箱地址         
        //$mail->addCC("xxx@163.com");// 设置邮件抄送人，可以只写地址，上述的设置也可以只写地址(这个人也能收到邮件)         
        //$mail->addBCC("xxx@163.com");// 设置秘密抄送人(这个人也能收到邮件)            
        //$mail->addAttachment("bug0.jpg");// 添加附件          
        $mail->Subject = "PHP Email 163 TEST.";// 邮件标题          
        $mail->Body = "邮件内容是 <b>您的验证码是：123456</b> 嗯哼?";// 邮件正文          
        //$mail->AltBody = "This is the plain text纯文本";// 这个是设置纯文本方式显示的正文内容，如果不支持Html方式，就会用到这个，基本无用         
        if(!$mail->send()){// 发送邮件              
            echo "Message could not be sent.";              
            echo "Mailer Error: ".$mail->ErrorInfo;// 输出错误信息            
        }else{              
            echo '发送成功';            
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