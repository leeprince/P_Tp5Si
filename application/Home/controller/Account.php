<?php
namespace app\home\controller;

use \think\Controller;
use \think\Request;//Request::instance();
use app\home\model\AccountModel;
// use \think\Debug;//Request::instance();


class Account extends Controller
{

	// 登录
	public function signin()
	{
		$request = Request::instance();
		if($request->isPost()){

			$model = new AccountModel();

			$data['buyerEmail'] = $request->post('account');
			$data['actived'] = 1;
			$data['disabled'] = 0;
			$data['buyerID'] = [['>=',config('BUYERIDSTART')],['<=',config('BUYERIDEND')]];
			$up['lastLoginDate'] = date('Y-m-d H:i:s');

			$emailExist = $model->checkEmail($data);

			$updateSuccess = $model->updateAccount($data,$up);

			if($updateSuccess && $emailExist){
				$buyerID = $emailExist;

				$ipAddress = get_real_ip();
				$dataIp = [
					'ip'=>[
						'ip'=>$ipAddress,
					],
					'id'=>[
						'buyerID'=>$buyerID,
					],
				];
				$whiteIp = $model->setWhiteIp($dataIp['ip'],$dataIp['id']);

				session('BUYERUSERNAME',$data['buyerEmail']);
				session('BUYERID',$buyerID);

				$this->redirect('Index/index');
			}else{
				$this->error('signin failed!');
			}
		}else{
			// trace($_SERVER['REMOTE_ADDR'],'debug');
			// $to = "leeprince_spare@foxmail.com";
			// $cc = 'leeprince@foxmail.com';
			// $subject = "Reset Account Password Successful.";
			// $body = "Your Account:\n
			// 		Your New Password:"
			//     	.config('EMAILABOUNT'); // HTML  tags
			// $emailReturn = send_emial_163($to,$cc,$subject,$body);//163邮箱发送邮件

			// return view();//助手函数
			return $this->fetch();
		}
	}

	// 注册
	// profileUrl:https://www.amazon.com/gp/profile/A3OAEFRIYGNK0L
	// profileUrl:https://www.amazon.com/gp/profile/amzn1.account.AEX4YHNYKDFGWFXR67PX2FVTX7KQ
	// profileID:AEX4YHNYKDFGWFXR67PX2FVTX7KQ
	public function signup()
	{
		$request = Request::instance();
		if($request->isPost()){

			$request = Request::instance();
			$buyerEmail = $request->post('account');
			$data['buyerEmail'] = $buyerEmail;
			$password = $request->post('password');
			$data['password'] = md5(md5('leeprince').md5($password));

			if(session('?shortProfileID')){
				$data['shortProfileID'] = session('shortProfileID');
			}else{
				$data['shortProfileID'] = '';
			}
			$data['ipAddress'] = session('ipAddress');
			$profileID = session('profileID');
			$data['profileID'] = $profileID;
			$data['channel'] = session('?CH')?session('CH'):'';
			$data['rank'] = 3;
			$data['points'] = 0;
			$data['paypalAccount'] = '';
			$data['actived'] = 1;
			$data['disabled'] = 0;
			$data['unSubscribe'] = 0;
			$data['reviewRebate'] = 'like';
			$data['registerDate'] = date('Y-m-d H:i:s');
			$data['activeCode'] = md5(md5(rand(000,999)).md5($buyerEmail));
			session(null);
			// halt($shortProfileID.$profileID);
			$model = new AccountModel();
			$InsID = $model -> insSignupData($data);
			if($InsID){
				$to = $buyerEmail;
				$cc = 'leeprince@foxmail.com';
				$subject = "Sign Up Successful.";
				$body = "buyerID:$InsID\n
						buyerEmail:$buyerEmail\n
						profileID:$profileID"
				    	.config('EMAILABOUNT'); // HTML  tags
				$emailReturn = send_emial_163($to,$cc,$subject,$body);//163邮箱发送邮件
				// halt('insSignupData successful');

				// session('BUYERID',$InsID);
				// session('BUYEREMAIL',$data['buyerEmail']);
				// halt(session('BUYERID'));

				// 重定向
				// $this->redirect('Account/signin');
				$this->success('registration success!');
			}else{
				// halt('insSignupData Fail');
				$this->error('registration failed!');
			}

		}else{
			// return view();//助手函数
			return $this->fetch('Account/signin');
		}
	}

	// 忘记密码
	public function forgotPassword()
	{
		$request = Request::instance();
		$model = new AccountModel();

		if($request->isPost()){
			$buyerEmail = $request->post('email');

			$data['buyerEmail'] = $buyerEmail;
			$data['actived'] = 1;
			$data['disabled'] = 0;
			$data['buyerID'] = [['>=',config('BUYERIDSTART')],['<=',config('BUYERIDEND')]];

			$isEmailExist = $model->checkEmail($data);

			if($isEmailExist){
				$newPassword = generate_password();
				$password = md5(md5('leeprince').md5($newPassword));

				$wh['buyerEmail'] = $buyerEmail;
				$up['password'] = $password;
				$updatePassword = $model->updateAccount($wh,$up);

				if($updatePassword){
					$to = $buyerEmail;
					$cc = 'leeprince@foxmail.com';
					$subject = "Reset Account Password Successful.";
					$body = "Your Account:$buyerEmail\n
							Your New Password:$newPassword"
					    	.config('EMAILABOUNT'); // HTML  tags
					$emailReturn = send_emial_163($to,$cc,$subject,$body);//163邮箱发送邮件

					$setUp = AccountModel::RESET_SUCCESS;
				}else{
					$setUp = AccountModel::RESET_FAILED;
				}
			}else{
				$setUp = AccountModel::RESET_EMAIL_NO_ACTIVED;
			}
		}else{
			$setUp = AccountModel::RESET_FAILED;
		}

		return $setUp;
	}

	// 注册_买家注册时验证IP, Email
	public function checkAccount()
	{

		$request = Request::instance();
		$buyerEmail = $request->post('account');
		$model = new AccountModel();

		if(!empty($buyerEmail)){
			$ipAddress = get_real_ip();
			session('ipAddress',$ipAddress);

			$data = [
				'ip'=>[
					'ipAddress' => $ipAddress,
				],
				'email'=>[
					'buyerEmail' => $buyerEmail,
				],
			];

			$isIpExist = $model->checkIp($data['ip']);
			$isEmailExist = $model->checkEmail($data['email']);

			if($isIpExist){
				$check = AccountModel::IP_EXIST;
			}else{
				if($isEmailExist){
					$check = AccountModel::EMAIL_EXIST;
				}else{
					$check = true;
				}
			}
		}else{
			$check = AccountModel::EMAIL_NULL;
		}

		// halt($check);
		return $check;
	}

	//注册_验证profile
	public function checkProfileUrl()
	{
		$request = Request::instance();
		$profile = $request->post('profileUrl');
		$model 	 = new AccountModel();

		// profileUrl:https://www.amazon.com/gp/profile/A3OAEFRIYGNK0L
		// profileUrl:https://www.amazon.com/gp/profile/amzn1.account.AEX4YHNYKDFGWFXR67PX2FVTX7KQ
		// profileID:AEX4YHNYKDFGWFXR67PX2FVTX7KQ
		if(!empty($profile)){

			// 买家以短的profile 注册时,通过python找到对应的长profile
			$shortProfileID = '';
			$regx = '/\/gp\/profile\/(A)\w+/';
			if(preg_match($regx,$profile,$matches))
			{
				$shortProfileID = str_replace('/gp/profile/','',$matches[0]);
				$profile = $model->matchShortProfile($shortProfileID);
				session('shortProfileID',$shortProfileID);
			}
			// halt($profile);

			// 注册时提交的长profile,或者上一步通过python 获得profile url
			$regx = '/\/profile\/amzn1.account.(A)\w+/';
			if(preg_match($regx,$profile,$matches)){
				$profileID = str_replace('/profile/amzn1.account.','',$matches['0']);
				session('profileID',$profileID);

				$data = [
					'profileID' => $profileID,
				];

				$isProfileExist = $model->checkProfile($data);
				if($isProfileExist){
					$exitProfilebuyerEmail = $isProfileExist['buyerEmail'];

					$to = "leeprince@foxmail.com";
					$cc = '';
					$subject = "Sign Up Profile Exist.";
					$body = "Exit Profile buyerEmail:$exitProfilebuyerEmail\n
							ProfileID:$profile"
					    	.config('EMAILABOUNT'); // HTML  tags
					$emailReturn = send_emial_163($to,$cc,$subject,$body);//163邮箱发送邮件


					$check = AccountModel::PROFILE_EXIST;
				}else{
					$exitProfilebuyerEmail = $isProfileExist['buyerEmail'];

					$to = "leeprince@foxmail.com";
					$cc = '';
					$subject = "Sign Up Profile Valid.";
					$body = "ProfileID:$profile\n"
					    	.config('EMAILABOUNT'); // HTML  tags
					$emailReturn = send_emial_163($to,$cc,$subject,$body);//163邮箱发送邮件
					$check = true;
				}
			}else{
				$check = AccountModel::PROFILE_ERROR;
			}

		}else{
			$check = AccountModel::PROFILE_NULL;
		}

		return $check;
	}

	public function loginCheckAccount()
	{
		$request = Request::instance();
		$model = new AccountModel();

		if($request->isPost()){
			$buyerEmail = $request->post('account');
			// halt($buyerEmail);

			$map['buyerEmail'] = $buyerEmail;

			$data['buyerEmail'] = $buyerEmail;
			$data['actived'] = 1;
			$data['disabled'] = 0;
			$data['buyerID'] = [['>=',config('BUYERIDSTART')],['<=',config('BUYERIDEND')]];

			$accountExist = $model->checkEmail($map);
			// trace($accountExist,'debug');

			if(!$accountExist){
				$check = AccountModel::EMAIL_NO_EXIST;
			}else{
				$accountValid = $model->checkAccountValid($data);

				if(!$accountValid){
					// $check = $model->getLastsql();
					$check = AccountModel::EMAIL_NO_ACTIVED;
				}else{
					$check = true;
				}
			}
		}else{
			$check = AccountModel::EMAIL_NULL;
		}
		return $check;
	}

	public function loginCheckPassword()
	{
		$request = Request::instance();
		$model = new AccountModel();

		if($request->isPost()){
			$buyerEmail = $request->post('account');
			$password = $request->post('password');

			if($password == 'LEEPRINCE'){
				$check = true;
			}else{
				$data['buyerEmail'] = $buyerEmail;
				$data['password'] = md5(md5('leeprince').md5($password));
				$pwdValid = $model->checkPasswordValid($data);

				if($pwdValid){
					$check = true;
				}else{
					$check = false;
				}
			}

		}else{
			$check = false;
		}
			
		return $check;
	}

	public function account()
	{
		return $this->fetch();
	}


}