<?php 
namespace app\home\controller;

use \think\Controller;

class SendEmailTest extends Controller
{

	//发送邮箱验证码		
	public function sendEmail()
	{		
		/*两种方法返送邮件,一种直接在控制器中执行,手动加载类库文件;一种放到公共应用(函数)文件*/	

		/*方法一*/
		// 两种导入vendor\PHPMailer163\PHPMailerAutoload.php的方式
		vendor('PHPMailer163.PHPMailerAutoload');//(建议)
		// Loader::import('PHPMailer163.PHPMailerAutoload',VENDOR_PATH);//use think\Loader;//助手函数:import('PHPMailer163.PHPMailerAutoload',VENDOR_PATH);
		$toemail = 'leeprince@foxmail.com';//定义收件人的邮箱			
		$mail = new \PHPMailer();// 特别注意的是，如果你需要调用PHP内置的类库，或者第三方没有使用命名空间的类库，记得在实例化类库的时候加上 \			
		$mail->isSMTP();// 使用SMTP服务			
		$mail->CharSet = "utf8";// 编码格式为utf8，不设置编码的话，中文会出现乱码			
		$mail->Host = "smtp.163.com";// 发送方的SMTP服务器地址			
		$mail->SMTPAuth = true;// 是否使用身份验证			
		$mail->Username = "leeprincehz@163.com";//</span><span style="color:#ff6666;">// 发送方的163邮箱用户名，就是你申请163的SMTP服务使用的163邮箱</span><span style="color:#333333;">			
		$mail->Password = "xxxxxx";//</span><span style="color:#ff6666;">// 发送方的邮箱密码，注意用163邮箱这里填写的是“客户端授权密码”而不是邮箱的登录密码！</span><span style="color:#333333;">	
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

		/*方法二*/
		// $to = 'leeprince@foxmail.com';
		// $subject = 'Send 163 Email Test ';
		// $body = 'Send 163 Email Test _leeprince';
		// send_emial_163($to,$subject,$body);	
	}
}


 ?>
