<?php
namespace app\home\validate;

use \think\Validate;

class AccountValidate extends Validate
{
	// 验证规则
	protected $rule =[
		// 买家buyer 修改账户信息后台验证
		'buyerEmail'=> 'require|email',
		'password'=>'require|min:6',
		'paypalAccount'=>'require|email',
		'paypalAccount'=>'require|email',

		// 买家buyer 联系我们后台验证
		'name' => 'require|min:2',
		'email' => 'require|email',
		'subject' => 'require|min:6',
		'message' => 'require|min:10',
	];

	// 报错信息
	protected $message = [
		// 买家buyer 修改账户信息后台验证的报错信息
		'buyerEmail.require'=>'Please fill in your account',
		'buyerEmail.email'=>'Invalid email',
		'password.require'=>'Please fill in the new password',
		'password.min'=>'Use a password at least 8 characters',
		'paypalAccount.require'=>'Please fill in your paypal account',
		'paypalAccount.email'=>'Invalid email',

		// 买家buyer 联系我们后台验证的报错信息
		'name.require'=>'Please fill in your name',
		'name.min'=>'The message at least 2 characters',
		'email.require'=>'Please fill in your Email',
		'email.email'=>'Invalid Email Format',
		'subject.require'=>'Please fill in your subject',
		'subject.min'=>'The message at least 6 characters',
		'message.require'=>'Please fill in the message',
		'message.min'=>'The message at least 10 characters',
	];

	// 验证场景
	protected $scene = [
		// // 买家buyer 修改账户信息后台验证的验证场景
		'account' => ['buyerEmail','password','paypalAccount'],

		// 买家buyer 联系我们后台验证的验证场景
		'contact' => ['name','email','subject','message'],
	];
}