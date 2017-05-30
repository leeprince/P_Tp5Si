<?php 
namespace app\home\model;

use \think\Model;
use \think\Db;

class AccountModel extends Model
{
	protected $tableName = 'buyer';

	/*注册常量定义*/
	const IP_EXIST = 'It seems you already have an account';
	const EMAIL_EXIST = 'This email is already';
	const EMAIL_NULL = 'Please fill in your email';

	const PROFILE_EXIST = 'This profile url is already';
	const PROFILE_NULL = 'Please fill in profile url';
	const PROFILE_ERROR = 'This profile url is error';

	/*登录常量定义*/
	const EMAIL_NO_EXIST = 'This account does not exist';
	const EMAIL_NO_ACTICED = 'This account is not actived';

	// 注册_验证IP
	public function checkIp($data)
	{
		$isExist = Db::name($this->tableName)->where($data)->value('ipAddress');
		return $isExist;
	}

	// 注册_验证Email
	public function checkEmail($data)
	{
		$isExist = Db::name($this->tableName)->where($data)->value('buyerEmail');
		return $isExist;
	}

	// 注册_买家用短的profile注册时 ,python爬出长的profile
	public function matchShortProfile($shortProfileID)
	{
		
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

	// 注册_验证profile
	public function checkProfile($data)
	{
		// 下列三种都可以实现验证profile是否存在,并返回Emial.存在则返回数据,返回的数据不一样,获取Email的方式也不一样. 不存在则返回空
		$isExist = Db::name($this->tableName)->field('buyerEmail')->where($data)->find();//查询一条数据(建议),存在获得Email=$isExist['buyerEmail']
		// $isExist = Db::name($this->tableName)->field('buyerEmail')->where($data)->select();//查询数据集,存在获得Email=$isExist[0]['buyerEmail']
		// $isExist = Db::name($this->tableName)->where($data)->value('buyerEmail');//某个字段的值,存在获得Email=$isExist

		return $isExist;
	}

	// 注册_保存注册信息
	public function insSignupData($data)
	{	
		// $isOk = Db::name($this->tableName)->insert($data);//insert 方法添加数据成功返回添加成功的条数，insert 正常情况返回 1;添加数据后如果需要返回新增数据的自增主键，可以使用getLastInsID方法：
		$InsID = Db::name($this->tableName)->insertGetId($data);//insertGetId 方法添加数据成功返回添加数据的自增主键

		return $InsID;
	}

	// 登录_检测帐号是否有效
	public function checkAccountValid($data)
	{
		$data['actived'] = 1;
		$data['disabled'] = 0;
		$data['buyerID'] = [['>=',config('BUYERIDSTART')],['<=',config('BUYERIDEND')]];
		$isValid = Db::name($this->tableName)->where($data)->value('buyerEmail');
		// halt(Db::getLastsql());

		return $isValid;
	}

}




