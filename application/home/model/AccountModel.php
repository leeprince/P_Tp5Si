<?php 
namespace app\home\model;

use \think\Model;
use \think\Db;

class AccountModel extends Model
{
	protected $tableName = 'buyer';
	protected $tableNameIp = 'buyer_whitelist';

	/*注册常量定义*/
	const IP_EXIST               = 'It seems you already have an account';
	const EMAIL_EXIST            = 'This email is already';
	const EMAIL_NULL             = 'Please fill in your email';
	
	const PROFILE_EXIST          = 'This profile url is already';
	const PROFILE_NULL           = 'Please fill in profile url';
	const PROFILE_ERROR          = 'This profile url is error';
	
	/*登录常量定义*/
	const EMAIL_NO_EXIST         = 'This account does not exist';
	const EMAIL_NO_ACTIVED       = 'This account is not actived';
	const PASSWORD_NULL          = 'Please fill in your password';
	
	/*忘记密码常量定义*/
	const RESET_SUCCESS          =  'reset-password-success';
	const RESET_FAILED           =  'reset-password-faild';
	const RESET_EMAIL_NO_ACTIVED =  'not-actived';	
	
	/*更新账户信息常量定义*/
	const PROCESS_SUCCESS        = [
										'error'                      =>0,
										'errorInfo'                  =>'update-failed'
	];
	const PROCESS_FAIDED         = [
										'error'                      =>1,
										'errorInfo'                  =>'update-success'
								   ];

	// 注册_验证IP
	public function checkIp($data)
	{
		$isExist = Db::name($this->tableName)->where($data)->value('ipAddress');
		return $isExist;
	}

	// 注册_验证Email
	public function checkEmail($data)
	{
		$isExist = Db::name($this->tableName)->where($data)->value('buyerID');
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
		$isValid = Db::name($this->tableName)->where($data)->value('buyerID');
		// halt(Db::getLastsql());

		return $isValid;
	}

	// 登录_检测密码是否有效
	public function checkPasswordValid($data)
	{
		$isValid = Db::name($this->tableName)->where($data)->value('buyerID');
		// halt(Db::getLastsql());

		return $isValid;
	}

	// 登录_更新账户信息
	public function updateAccount($data,$up)
	{
		$isOk = Db::name($this->tableName)->where($data)->update($up);
		// halt(Db::getLastsql());

		return $isOk;
	}

	// 登录_登录成功后添加IP白名单
	public function setWhiteIp($dataIp,$dataId)
	{
		
		$ipAddress = $dataIp['ip'];
		$buyerID = $dataId['buyerID'];
		$ipResult = Db::name($this->tableNameIp)->field('ip')->where($dataId)->select();
		// halt($ipResult);
		$jugmentIp = '';
		foreach($ipResult as $ipList){
			$ip = $ipList['ip'];
			if($ip == $ipAddress){
				$jugmentIp = 'SAME';
				break;
			}
		}
		if($jugmentIp != 'SAME'){

			$ipCountry = get_country_from_ip($ipAddress);

			$dataIp['buyerID'] = $buyerID;
			$dataIp['country'] = $ipCountry;
			$ipIns = Db::name($this->tableNameIp)->insertGetId($dataIp);
		}else{
			$ipIns = 0;
		}

		return $ipIns;
	}

	//查询buyer个人信息
	public function findAccount($field,$where)
	{
		$rows = Db::name($this->tableName)->field($field)->where($where)->find();

		return $rows;
	}

}




