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

		}else{
			// trace(session('BUYERID').' | '.session('BUYEREMAIL'),'debug');
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
			$data['buyerEmail'] = $request->post('account');
			$password = $request->post('password');
			$data['password'] = md5(md5('leeprince').md5($password));

			if(session('?shortProfileID')){
				$data['shortProfileID'] = session('shortProfileID');
			}else{
				$data['shortProfileID'] = '';
			}
			$data['ipAddress'] = session('ipAddress');
			$data['profileID'] = session('profileID');
			$data['channel'] = session('?CH')?session('CH'):'';
			$data['rank'] = 3;
			$data['points'] = 0;
			$data['paypalAccount'] = '';
			$data['actived'] = 1;
			$data['disabled'] = 0;
			$data['unSubscribe'] = 0;
			$data['reviewRebate'] = 'like';
			$data['registerDate'] = date('Y-m-d H:i:s');
			$data['activeCode'] = md5(md5(rand(000,999)).md5($data['buyerEmail']));
			session(null);
			// halt($shortProfileID.$profileID);
			$model = new AccountModel();
			$InsID = $model -> insSignupData($data);
			if($InsID){
				$to = "leeprince@foxmail.com";
				$subject = "Sign Up Successful.";
				$body = "buyerID:$InsID\n
						buyerEmail:$data['buyerEmail']\n
						profileID:$profileID"
				    	.config('EMAILABOUNT'); // HTML  tags
				$emailReturn = send_emial_163($to,$subject,$body);//163邮箱发送邮件
				// halt('insSignupData successful');
				session('BUYERID',$InsID);
				session('BUYEREMAIL',$data['buyerEmail']);
				// halt(session('BUYERID'));
				// trace(session('BUYERID'),'debug');
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

	// 买家注册时验证IP, Email
	public function checkAccount()
	{

		$request = Request::instance();
		$buyerEmail = $request->post('account');
		$model = new AccountModel();

		if(!empty($buyerEmail)){
			$ipAddress = getRealIp();
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
				$check = $model::IP_EXIST;
				// $check = AccountModel::IP_EXIST;
			}else{
				if($isEmailExist){
					$check = $model::EMAIL_EXIST;
				}else{
					$check = true;
				}
			}
		}else{
			$check = $model::EMAIL_NULL;
		}

		// halt($check);
		return $check;
	}

	//验证profile
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
					$subject = "Sign Up Profile Exist.";
					$body = "Exit Profile buyerEmail:$exitProfilebuyerEmail\n
							ProfileID:$profile"
					    	.config('EMAILABOUNT'); // HTML  tags
					$emailReturn = send_emial_163($to,$subject,$body);//163邮箱发送邮件


					$check = $model::PROFILE_EXIST;
				}else{
					$exitProfilebuyerEmail = $isProfileExist['buyerEmail'];

					$to = "leeprince@foxmail.com";
					$subject = "Sign Up Profile Valid.";
					$body = "ProfileID:$profile\n"
					    	.config('EMAILABOUNT'); // HTML  tags
					$emailReturn = send_emial_163($to,$subject,$body);//163邮箱发送邮件
					$check = true;
				}
			}else{
				$check = $model::PROFILE_ERROR;
			}

		}else{
			$check = $model::PROFILE_NULL;
		}

		return $check;
	}

	public function account()
	{
		return $this->fetch();
	}


}