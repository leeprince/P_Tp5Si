<?php
namespace app\Home\controller;

use \think\Controller;
use \think\Request;//Request::instance();
// use \think\Db;//Request::instance();
// use \think\Debug;//Request::instance();

class Account extends Controller
{
	public function signin()
	{
		$request = Request::instance();
		if($request->isPost()){

		}else{
			// return view();//助手函数
			return $this->fetch();
		}
	}

	public function check_account()
	{
		// $request = Request::instance();
		$buyerEmail = Request::instance()->post('account');
		// halt($buyerEmail);
		return $buyerEmail;


	}

	public function account()
	{
		return $this->fetch();
	}

}