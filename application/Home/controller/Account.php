<?php
namespace app\Home\controller;

use \think\Controller;
use \think\Request;//Request::instance();

class Account extends Controller
{

	public function signin()
	{
		// 统一采用 \think\Request 类处理请求类型
		$request = Request::instance();
		// $request = reqeust();//助手函数;

		if($request->isPost()){

		}else{
			return view();
		}
	}

}