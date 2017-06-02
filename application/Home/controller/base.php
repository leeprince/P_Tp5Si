<?php 
namespace app\home\controller;

use \think\Controller;

class Base extends Controller
{
	// 控制器初始化
	public function _initialize()
	{
		// parent::_initialize();//parent::method调用父类方法;这是调用父类Controller的初始化_initialize方法. 因为base继承官方封装的\think\Controller类,所以这里需要调用;
		$buyerID = session('BUYERID');
		$buyerEmail = session('BUYEREMAIL');
		$this->checkIsLogin($buyerID,$buyerEmail);//检查buyer是否登录
	}

	private function checkIsLogin($buyerID,$buyerEmail)
	{
		if($buyerID == '' || $buyerEmail == ''){
			if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH'])=='xmlhttprequest'){
				$ret['code'] = 800;
				$ret['msg'] = '登录异常，请重新登录!';
				return $ret;die;
			}else{
				$this->redirect('Account/signin');
			}
		}
	}
}