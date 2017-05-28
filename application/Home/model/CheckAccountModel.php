<?php 
namespace app\home\model;

use \think\Model;
use \think\Db;

class CheckAccountModel extends Model
{
	protected $tableName = 'buyer';

	const IP_EXIST = 'It seems you already have an account';
	const EMAIL_EXIST = 'This email is already';
	const EMAIL_NULL = 'Please fill in your email';

	const PROFILE_EXIST = 'This profile url is already';
	const PROFILE_NULL = 'Please fill in profile url';
	const PROFILE_ERROR = 'This profile url is error';

	// 验证IP
	public function checkIp($data){
		$isExist = Db::name($this->tableName)->where($data)->value('ipAddress');
		return $isExist;
	}

	// 验证Email
	public function checkEmail($data){
		$isExist = Db::name($this->tableName)->where($data)->value('buyerEmail');
		return $isExist;
	}

	// 买家用短的profile注册时 ,python爬出长的profile
	public function matchShortProfile($shortProfileID){
		
		// $shortProfileID = 'A3OAEFRIYGNK0L';
		$cmd    ="python ".VENDOR_PATH."python/matchingshortprofileid.py ".$shortProfileID;//绝对路径
		// $cmd    ="python "."../vendor/python/matchingshortprofileid.py ".$shortProfileID;//绝对路径
		$handle =popen($cmd,"r");
		$returnID   =fread($handle,500);
		pclose($handle);

		$returnID = trim($returnID);
		if($returnID != 'Timed out!' && $returnID != 'Expection!' && $returnID != 'Unknown'){
			$profile = $returnID;
		}else{
			$profile = '';
		}
		return $profile;
	}

	// 验证profile
	public function checkProfile($data)
	{
		// 下列三种都可以实现验证profile是否存在,并返回Emial.存在则返回数据,返回的数据不一样,获取Email的方式也不一样. 不存在则返回空
		$isExist = Db::name($this->tableName)->field('buyerEmail')->where($data)->find();//查询一条数据(建议),存在获得Email=$isExist['buyerEmail']
		// $isExist = Db::name($this->tableName)->field('buyerEmail')->where($data)->select();//查询数据集,存在获得Email=$isExist[0]['buyerEmail']
		// $isExist = Db::name($this->tableName)->where($data)->value('buyerEmail');//某个字段的值,存在获得Email=$isExist

		return $isExist;
	}
}




 ?>