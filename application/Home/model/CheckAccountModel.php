<?php 
namespace app\Home\model;

use \think\Model;
use \think\Db;

class CheckAccountModel extends Model
{
	protected $tableName = 'buyer';

	const IP_EXIST = 'It seems you already have an account';
	const EMAIL_EXIST = 'This email is already';
	const EMAIL_NULL = 'Please fill in your email';
	const PROFILE_EXIST = 'This Profile url is already';

	public function checkIp($data){
		$isExist = Db::name($this->tableName)->where($data)->value('ipAddress');
		return $isExist;
	}
	public function checkEmail($data){
		$isExist = Db::name($this->tableName)->where($data)->value('buyerEmail');
		return $isExist;
	}
}




 ?>