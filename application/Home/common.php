<?php
// 这里封装网站所有需要函数，在网站任何地方都可以调用

    //获取IP地址，在需要获取IP地址时候直接调用get_real_ip()就能获取客户端IP地址
    function get_real_ip(){ 
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

    // 通过ip或者ip所在国家
    // 在IP地址范围内，非路由地址IANA(Internet Assigned Numbers Authority)
    function get_country_from_ip($ip){
         $content = file_get_contents("http://ip.taobao.com/service/getIpInfo.php?ip=$ip");
         $banned = json_decode(trim($content), true);
         // $lan = strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']);//检测浏览器使用的语言
         if(!empty($banned['data']['country_id']))
         // if((!empty($banned['data']['country_id']) && $banned['data']['country_id'] == 'CN') || strstr($lan, 'zh'))
         {
            $country = $banned['data']['country_id'];
         }else{
            $country = 'US';
         }
         return $country;
    }

	// 分类
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

    // 163邮箱发送邮件
    // $cc='' 是设置默认值, 调用该方法时如果赋值会覆盖
    function send_emial_163($to,$cc='',$subject,$body)
    {
        vendor('PHPMailer163.PHPMailerAutoload');
        $fromEmail = "leeprincehz@163.com";
        $fromName = 'LeePrince';   
        $toName = 'prince';    
        $mail = new \PHPMailer();// 特别注意的是，如果你需要调用PHP内置的类库，或者第三方没有使用命名空间的类库，记得在实例化类库的时候加上 \           
        $mail->isSMTP();// 使用SMTP服务         
        $mail->CharSet = "utf8";// 编码格式为utf8，不设置编码的话，中文会出现乱码            
        $mail->Host = "smtp.163.com";// 发送方的SMTP服务器地址           
        $mail->SMTPAuth = true;// 是否使用身份验证          
        $mail->Username = "leeprincehz@163.com";//发送方的163邮箱用户名，就是你申请163的SMTP服务使用的163邮箱          
        $mail->Password = "leeprince163";// 发送方的邮箱密码，注意用163邮箱这里填写的是“客户端授权密码”而不是邮箱的登录密码！ 
        $mail->SMTPSecure = "ssl";//</span><span style="color:#ff6666;">// 使用ssl协议方式</span><span style="color:#333333;">            
        $mail->Port = 994;// 163邮箱的ssl协议方式端口号是465/994           
        $mail->setFrom($fromEmail,$fromName);// 设置发件人信息，如邮件格式说明中的发件人，这里会显示为Mailer(xxxx@163.com），Mailer是当做名字显示          
        $mail->addAddress($to,$toName);// 设置收件人邮箱和信息，如邮件格式说明中的收件人，这里会显示为Liang(yyyy@163.com)          
        $mail->addReplyTo($fromEmail,$fromName);// 设置回复人信息，指的是收件人收到邮件后，如果要回复，回复邮件将发送到的邮箱地址         
        $mail->addCC($cc);// 设置邮件抄送人，可以只写地址，上述的设置也可以只写地址(这个人也能收到邮件)         
        //$mail->addBCC("xxx@163.com");// 设置秘密抄送人(这个人也能收到邮件)            
        //$mail->addAttachment("p_avatar.jpg");// 添加附件          
        $mail->Subject = $subject;// 邮件标题          
        $mail->Body = $body;// 邮件正文     用:\n 换行;         
        //$mail->AltBody = "This is the plain text纯文本";// 这个是设置纯文本方式显示的正文内容，如果不支持Html方式，就会用到这个，基本无用         
        if(!$mail->send()){// 发送邮件              
            return "Failed";              
            // echo "Mailer Error: ".$mail->ErrorInfo;// 输出错误信息 
            // return false;           
        }else{              
            return 'successfully';  
            // return true;          
        }
    }


    function getHeadInfo(){
        echo '<li><a href="__MODULE__/index/dealManager.html"id="mainLoginButton" class="logIn"><span>Deal Manager</span></a></li>';
        echo '<li><a href="__MODULE__/index/archivePage.html"  id="mainLoginButton" class="logIn"><span>Archive</span></a></li>	';
    }

    function getPhone(){
        echo ' <p class="bor-b-e5gray"><a href="__MODULE__/buyer/account.html" class="block pt15 pb15 fs14 lh1 tdn tc">Account</a></p>';
        echo ' <p class="bor-b-e5gray"><a href="__MODULE__/index/dealManager.html" class="block pt15 pb15 fs14 lh1 tdn tc">Deal Manager</a></p>';
        echo ' <p><a href="__MODULE__/index/archivePage.html" class="block fs14 lh1 tdn pt15 pb15 tc">Archive</a></p>';

    }

	//random number
    function generate_password()
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