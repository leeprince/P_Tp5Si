<?php
namespace app\home\model;

use \think\Model;
use \think\Db;

class IndexModel extends Model
{
	protected $tableNameOrder = 'order';

	protected $tableNameRequest = 'request';

	protected $tableNameRequestLimt = 'request_limit';

	static $joinFind = [
			['__LISTING__ l','l.ASIN=o.ASIN'],
			['__SELLER__ s','s.sellerID=o.sellerID'],
			['__CATEGORY__ c','c.categoryID=l.categoryID']
	];

	// 首页排序规则
	static private function getFilter($filter)
	{
		switch($filter){
			case 'endDate':
				$filter = 'o.endDate desc';
				break;
			case 'orderDate':
				$filter = 'o.orderDate desc';
				break;
			case 'price':
				$filter = 'o.price desc';
				break;
		}

		return $filter;
	}


	// 首页查找所有产品,不排除dailylimit,totallimit,requestLimit
	public function findAllProduct($data)
	{
		$onePageNum = 10;
		$pageNum = $data['page'];
		$filter = $data['filter'];

		$orderIdStarted = ($pageNum-1)*$onePageNum;
		$currentDate = date('Y-m-d H:i:s');

		// $filter = $this->getFilter($filter);//private function getFilter($filter)
		$filter = self::getFilter($filter);//static private function getFilter($filter) .this->getFilter($filter)也可以调用该方法,不过这不是验证静态方法访问方式

		$fieldFind = [
				'o.orderID',
				'o.price',
				'l.listingName',
				'l.smallPhoto',
				'l.photo'
		];

		$whereFind = [
				'o.endDate'=>['>=',$currentDate],
				's.endDate'=>['>=',$currentDate],
				'o.status'=>'active',
				's.balance'=>['>',0]
		];

		$joinFind = self::$joinFind;
		$orderList = Db::name($this->tableNameOrder)
					->alias('o')
					->field($fieldFind)
					->join($joinFind)
					->where($whereFind)
					->order($filter)
					->limit($orderIdStarted,$onePageNum)
					->select();

		// halt($orderList);

		if($orderList){
			foreach($orderList as $key=>$list){
				$today = date('Y-m-d');
			
				$orderID = $list['orderID'];
				$fieldO = [
					'dailyLimit',
					'totalLimit',
					'sellerID',
				];
				$whereO = [
					'orderID' => $orderID,
				];

				$orderInfo = $this->fromOrderIdO($fieldO,$whereO);
				$dailyLimit = $orderInfo['dailyLimit'];
				$totalLimit = $orderInfo['totalLimit'];
				$sellerID = $orderInfo['sellerID'];
				$buyerID = session('BUYERID');

				$whereAllR = [
					'orderID'=>$orderID,
					'status'=>['in',['taken','verifyFail','reviewed','error','rebated']],
				];
				
				// 查找该 orderID 历史共有多少个请求 requestID
				$requestAllNum = $this->fromOrderIdR($whereAllR);

				$whereR = [
					'orderID'=>$orderID,
					'status'=>['in',['taken','verifyFail','reviewed','error','rebated']],
					'date'=>$today
				];
				
				// 查找该 orderID 当天共有多少个请求 requestID
				$requestDayNum = $this->fromOrderIdR($whereR);

				// 根据 sellerID 在request_limit 表中确定登录状态的 buyerID是否被该卖家举报
				$whereLimit = [
					'sellerID'=>$sellerID,
					'buyerID'=>$buyerID,
				];

				$isReport = $this->limitRequest($whereLimit);

				if(($requestDayNum >= $dailyLimit) || ($requestAllNum >= $totalLimit) || ($isReport > 0)){
					unset($orderList[$key]);
				}

			}
		}

		// 使用日志记录的助手函数进行调试; 可在config.php 配置文件中配置日志级别
		trace("requestAllNum>>$requestAllNum |　requestDayNum>>$requestDayNum",'debug');

		return $orderList;
	}

	// 根据订单ID orderID 查找订单相关信息
	public function fromOrderIdO($field,$where)
	{
		$list = Db::name($this->tableNameOrder)->field($field)->where($where)->find();

		return $list;
	}

	// 根据订单ID orderID 查找 requst 请求个数
	public function fromOrderIdR($where)
	{
		$num = Db::name($this->tableNameRequest)->where($where)->count('requestID');

		return $num;
	}

	// 根据 sellerID 在request_limit 表中确定登录状态的 buyerID是否被该卖家举报
	public function limitRequest($where)
	{
		$num = Db::name($this->tableNameRequestLimt)->where($where)->count('limitID');

		return $num;
	}

}
