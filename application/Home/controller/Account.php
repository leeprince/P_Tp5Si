<?php
namespace app\Home\controller;

use \think\Controller;
use \think\Request;//Request::instance();
use app\Home\model\CheckAccountModel;
// use \think\Db;//Request::instance();
// use \think\Debug;//Request::instance();

// vendor("python");

class Account extends Controller
{
	public function signin()
	{
		$request = Request::instance();
		if($request->isPost()){

		}else{
			$shortProfileID = 'A3OAEFRIYGNK0L';
			$cmd    ="python python/matchingshortprofileid.py ".$shortProfileID;
			$data = exec($cmd);
			// $data = system($cmd);
			halt($data);
			// return view();//助手函数
			return $this->fetch();
		}
	}

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

	public function checkProfileUrl()
	{
		$request = Request::instance();
		$profile = $request->post('profileUrl');

		if(!empty($profileUrl)){
			$shortProfileID = 'A3OAEFRIYGNK0L';
			$cmd    ="python python/matchingshortprofileid.py ".$shortProfileID;
			$data = system($cmd);
			halt($data);

		}else{

		}

		return $check;
	}

	public function account()
	{
		return $this->fetch();
	}

}