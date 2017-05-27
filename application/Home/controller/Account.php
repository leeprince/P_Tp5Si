<?php
namespace app\home\controller;

use \think\Controller;
use \think\Request;//Request::instance();
use app\home\model\CheckAccountModel;
// use \think\Debug;//Request::instance();


class Account extends Controller
{

	// 买家登录,注册页面
	public function signin()
	{
		$request = Request::instance();
		if($request->isPost()){

		}else{
			$to = "leeprince@foxmail.com";
			$subject = "Sign Up Profile Valid.";
			$body = "ProfileID:**********<br><br> "
			    . "<div><br><br></div>About:config('EMAILABOUNT')"; // HTML  tags
			$emailReturn = send_emial_163($to,$subject,$body);//163邮箱发送邮件

			// return view();//助手函数
			return $this->fetch();
		}
	}

	// 买家注册时验证IP, Email
	public function checkAccount()
	{

		$request = Request::instance();
		$buyerEmail = $request->post('account');

		if(!empty($buyerEmail)){
			$ipAddress = getRealIp();

			$data = [];
			$data = [
				'ip'=>[
					'ipAddress' => $ipAddress,
				],
				'email'=>[
					'buyerEmail' => $buyerEmail,
				],
			];

			$model = new CheckAccountModel();
			$isIpExist = $model->checkIp($data['ip']);
			$isEmailExist = $model->checkEmail($data['email']);

			if($isIpExist){
				$check = $model::IP_EXIST;
				// $check = CheckAccountModel::IP_EXIST;
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
		$model = new CheckAccountModel();

		// https://www.amazon.com/gp/profile/A3OAEFRIYGNK0L
		// profileID:AEX4YHNYKDFGWFXR67PX2FVTX7KQ
		if(!empty($profile)){
			$shortProfileID = '';
			$regx = '/\/gp\/profile\/(A)\w+/';
			if(preg_match($regx,$profile,$matches))
			{
				$shortProfileID = str_replace('/gp/profile/','',$matches[0]);
				$profile = $model->matchShortProfile($shortProfileID);
			}
			// halt($profile);

			$regx = '/\/profile\/amzn1.account.(A)\w+/';
			if(preg_match($regx,$profile,$matches)){
				$profileID = str_replace('/profile/amzn1.account.','',$matches['0']);

				$data = [];
				$data = [
					'profileID' => $profileID,
				];

				$isProfileExist = $model->checkProfile($data);
				if($isProfileExist){
					$exitProfilebuyerEmail = $isProfileExist['buyerEmail'];

					$to = "leeprince@foxmail.com";
					$subject = "Sign Up Profile Exist.";
					$body = "Exit Profile buyerEmail:$exitProfilebuyerEmail<br/><br/> "
					    . "ProfileID:$profile"
					    . "<br/><br/>About:config('EMAILABOUNT')"; // HTML  tags
					$emailReturn = send_emial_163($to,$subject,$body);//163邮箱发送邮件


					$check = $model::PROFILE_EXIST;
				}else{
					$exitProfilebuyerEmail = $isProfileExist['buyerEmail'];

					$to = "leeprince@foxmail.com";
					$subject = "Sign Up Profile Valid.";
					$body = "ProfileID:$profile<br><br> "
					    . "<br/><br/>About:config('EMAILABOUNT')"; // HTML  tags
					$emailReturn = send_emial_163($to,$subject,$body);//163邮箱发送邮件
					$check = 'successful.';
				}
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