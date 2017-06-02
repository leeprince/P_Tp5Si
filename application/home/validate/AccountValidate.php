<?php
namespace app\home\validate;

use \think\Validate;

class AccountValidate extends Validate
{
	protected $rule =[
		'buyerEmail'=> 'require|email',
		'password'=>'require|min:8',
		'paypalAccount'=>'require|email',
	];
}