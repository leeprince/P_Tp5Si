<?php
namespace app\home\validate;

use \think\Validate;

class AccountValidate extends Validate
{
	// 验证规则
	protected $rule =[
		'buyerEmail'=> 'require|email',
		'password'=>'require|min:6',
		'paypalAccount'=>'require|email',
	];

	// 报错信息
	protected $message = [
		'buyerEmail.require'=>'Please fill in your account',
		'buyerEmail.email'=>'Invalid email',
		'password.require'=>'Please fill in the new password',
		'password.min'=>'Use a password at least 8 characters',
		'paypalAccount.require'=>'Please fill in your paypal account',
		'paypalAccount.email'=>'Invalid email',
	];

	// 验证场景
	protected $scene = [
		'account' => ['buyerEmail','password','paypalAccount'],
	];
}