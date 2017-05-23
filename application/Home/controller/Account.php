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
		// 统一采用 \think\Request 类处理请求类型
		// $request = Request::instance();
		// $request = reqeust();//助手函数;

		// 可以使用has方法来检测一个变量参数是否设置
		// Request::instance()->has('name','post');
		// if(input('?post')){//助手函数
		// $employee = Db::table('t_rr_employee')->where(['employeeID'=>30000001])->find();//use \think\Db;
		// $employee = Db::name('employee')->where(['employeeID'=>30000001])->find();//use \think\Db;
		// $employee = db('employee')->where(['employeeID'=>30000001])->find();
        // dump($employee);
        // Debug::dump($employee);
    	// halt($employee['name']);
    	// $this->assign('employee',$employee);


		$request = Request::instance();
		if($request->isPost()){


		}else{
			// return view();//助手函数
			return $this->fetch();
		}
	}

	public function account()
	{
		return $this->fetch();
	}

}