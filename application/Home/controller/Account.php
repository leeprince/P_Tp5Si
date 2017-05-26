<?php
namespace app\Home\controller;

use \think\Controller;
use \think\Request;//Request::instance();
use app\Home\model\CheckAccountModel;
// use \think\Debug;//Request::instance();


class Account extends Controller
{

	// 买家登录,注册页面
	public function signin()
	{
		$request = Request::instance();
		if($request->isPost()){

		}else{
			// $shortProfileID = 'A3OAEFRIYGNK0L';
			// $cmd    ="python ".VENDOR_PATH."python/matchingshortprofileid.py ".$shortProfileID;
			// $handle =popen($cmd,"r");
			// $returnID   =fread($handle,500);
			// pclose($handle);
			// halt($returnID);

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

			$model = new CheckAccountModel;
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
		$model = new CheckAccountModel;

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

					$reason = "Profile is already associated with an account, please contact admin.";
					$to = "leeprince@foxmail.com";
					$cc = "";
					$subject = "Unable to sign up";
					$body = "Exit Profile buyerEmail:$exitProfilebuyerEmail<br/><br/> "
					    . "Email:$exitProfilebuyerEmail<br/><br/>"
					    . "ProfileID:$profile"
					    . "<br/><br/>Reason:$reason"; // HTML  tags
					// Send_Mail($to, $cc, $subject, $body);

					$check = $model::PROFILE_EXIST;
				}else{
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