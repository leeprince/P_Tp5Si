<?php
namespace app\home\model;

use \think\Model;
use \think\Db;

class IndexModel extends Model
{
	// 定义需要的表,配置文件中已设置好表前缀
	protected $tableNameOrder = 'order';
	protected $tableNameRequest = 'request';
	protected $tableNameRequestLimt = 'request_limit';
	protected $tableNameBuyer = 'buyer';
	protected $tableNameBuyerRank = 'buyerrank';

	// 定义首页一次性加载的产品数量的常量
	const ONE_PAGE_NUM = 10;

	// 同一个买家 buyer 每天能领取同一个卖家 seller的多个产品的上限
	const SAME_SELLER_LIMIT = 2;

	// // 自定义设置 buyer 能够领取该产品 totalLimit 的倍数
	const FINAL_MULTIPLE = 1;

	static protected $tody = "date('Y-m-d')";

	static protected $currentDate = "date('Y-m-d H:i:s')";

	// 查找首页全部产品的 join 数组形式的静态属性
	static $joinFind = [
			['__LISTING__ l','l.ASIN=o.ASIN'],
			['__SELLER__ s','s.sellerID=o.sellerID'],
			['__CATEGORY__ c','c.categoryID=l.categoryID']
	];

	// 查找产品详情的 join 数组形式的静态属性
	static $joinDetail = [
			['__LISTING__ l','l.ASIN=o.ASIN'],
			['__STORE__ s','s.storeID=o.storeID'],
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
			default:
				$filter = 'o.orderDate desc';
		}

		return $filter;
	}

	// 申请产品 Deal 的常量定义
	// 申请产品Deal应满足的限制条件:1.历史没有申请过该产品;2.不超过买家等级限制的申请数量;3.不超过卖家设置当天能申请的Deal数量;4:不超过卖家设置总共的review数量;5:当天最多能申请同一个卖家2个Deal
	const DEAL_EXIST = "<p class='m-ack'>Oops，you already have this deal.</p>";
	const DEAL_EXIST_MSG = "This Product Exist";
	const DEAL_RANK_LIMIT = "<p class='m-ack'>Oops, your already approved deal num which exceed your rank limit. Please finish them first</p>";
	const DEAL_RANK_LIMIT_MSG = "Exceeding Buyer Rank limit";
	const DEAL_SELLER_DAILY_LIMIT = "<p class='m-ack'>Oops, there are too many people requested it. Total approval exceed the daily limit. Please check it tomorrow</p>";
	const DEAL_SELLER_DAILY_LIMIT_MSG = "Exceeding Seller Daily Limit";
	const DEAL_SELLER_TOTAL_LIMIT = "<p class='m-ack'>Oops, too many people requested it and the quota is out. Please check other deals</p>";
	const DEAL_SELLER_TOTAL_LIMIT_MSG = "Exceeding Seller Total Limit";
	const DEAL_SAME_SELLER_LIMIT = "<p class='m-ack'>Oops, You have already requested two products of this seller. Please check other deals</p>";
	const DEAL_SAME_SELLER_LIMIT_MSG = "Exceeding Same Seller Request Max Limit";
	const DEAL_SUCCESS = "<p class='m-ack pb10'>Yep!!! Application approved. Buy it ,write a review and submit review link then get full price rebate.</p><a href='dealManager'>Submit review link</a>";
	const DEAL_FAILED = "<p class='m-ack'>Illgal Operation!</p>";

	// 首页选择分类
	static private function getCategory($ca)
	{
		switch($ca){
			case 'fashion':
				$category = 'l.categoryID in (2,3,20,23,30)';
				break;
			case 'electronic':
				$category = 'l.categoryID in (7,8,9,12,14,16,17,18,27,29)';
				break;
			case 'sports':
				$category = 'l.categoryID in (19,21)';
				break;
			case 'home':
				$category = 'l.categoryID in (1,6,11,12,15,16,22)';
				break;
			case 'momBaby':
				$category = 'l.categoryID in (13,25)';
				break;
			case 'health':
				$category = 'l.categoryID = 5';
				break;
			default:
				$category = 1;
		}

		return $category;
	}


	// 首页查找所有产品,并排除不符合条件:dailylimit,totallimit,requestLimit的产品
	public function findAllProduct($data)
	{
		$onePageNum = self::ONE_PAGE_NUM;
		$pageNum = $data['page'];
		$filter = $data['filter'];
		$ca = $data['ca'];
		$search = $data['search'];

		$orderIdStarted = ($pageNum-1)*$onePageNum;
		$currentDate = date('Y-m-d H:i:s');

		// $filter = $this->getFilter($filter);//private function getFilter($filter)
		$filter = self::getFilter($filter);//static private function getFilter($filter) .this->getFilter($filter)也可以调用该方法,不过严格标准中这不是验证静态方法访问方式

		$whereCate = self::getCategory($ca);

		if(!empty($search)){
			$whereSearch = [
				'o.ASIN|l.listingName'=>['like',"%$search%"],
			];
		}else{
			$whereSearch = 1;
		}


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

		$join = self::$joinFind;

		// trace("leeprince debug:filter>>$filter|whereCate>>$whereCate",'debug');
		// trace($whereSearch,'debug');

		$orderList = Db::name($this->tableNameOrder)
					->alias('o')
					->field($fieldFind)
					->join($join)
					->where($whereFind)
					->where($whereCate)
					->where($whereSearch)
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
					"DATE_FORMAT(`date`,'%Y-%m-%d')"=>$today,
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
		// trace("leeprince debug:requestAllNum>>$requestAllNum |　requestDayNum>>$requestDayNum",'debug');

		return $orderList;
	}

	// 根据订单ID orderID 在 order 表查找产品相关信息
	public function fromOrderIdO($field,$where)
	{
		$list = Db::name($this->tableNameOrder)->field($field)->where($where)->find();

		return $list;
	}

	// 查找 requst 请求的个数
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

	// 根据 orderID 在order,listing,store表中联查出产品相关信息
	public function oneProduct($orderID)
	{
		$field = [
			'o.orderID',
			'o.ASIN',
			'o.price',
			'l.photo',
			'l.listingName',
			'l.description',
			'l.feature0',
			'l.feature1',
			'l.feature2',
			'l.feature3',
			'l.feature4',
			'l.reviewRank',
		];
		$join = self::$joinDetail;
		$where = [
			'o.orderID'=>$orderID,
			'o.status'=>'active',
		];
		$num = Db::name($this->tableNameOrder)
			 ->alias('o')
			 ->field($field)
			 ->join($join)
			 ->where($where)
			 ->find();

		return $num;
	}

	// 申请产品 Deal 不超过卖家设置总共的review数量 当天最多能申请同一个卖家2个Deal
	// 申请产品Deal应满足的限制条件:1.历史没有申请过该产品;2.不超过买家等级限制的申请数量;3.不超过卖家设置当天能申请的Deal数量;4:不超过卖家设置总共的review数量;5:当天最多能申请同一个卖家2个Deal
	public function requestProduct($orderID){
		$buyerID = session('BUYERID');

		$fieldO = [
			'sellerID',
			'ASIN',
			'dailyLimit',
			'totalLimit',
		];
		$whereO = [
			'orderID'=>$orderID,
		];

		// 获取订单信息
		$orderInfo = $this->fromOrderIdO($fieldO,$whereO);
		$sellerID = $orderInfo['sellerID'];
		$ASIN = $orderInfo['ASIN'];
		$dailyLimit = $orderInfo['dailyLimit'];//限制条件3
		$totalLimit = $orderInfo['totalLimit'];

		$sameSellerLimit = self::SAME_SELLER_LIMIT;//限制条件5

		// 自定义设置 buyer 能够领取该产品 totalLimit 的倍数,也就是这个产品的总共review数量;//限制条件4
		$finalLimit = $totalLimit*(self::FINAL_MULTIPLE);

		// 获取买家等级
		$buyerInfo = $this->findBuyerInfo($buyerID);

		$rank = $buyerInfo['rank'];

		// 根据等级确定能获得的 Deal 数量
		$buyerTotalLimit = $this->determineRankNum($rank);//限制条件2

		// 买家历史是否领取过此产品
		// 限制条件1
		$whereR = [
			'buyerID'=>$buyerID,
			'orderID'=>$orderID,
			'status'=>['in',['taken' ,'reviewed','verifyFail','error','rebated']],
		];
		$isExistNum = $this -> fromOrderIdR($whereR);

		// 买家历史总共申请的数量
		$whereR = [
			'buyerID'=>$buyerID,
			'status'=>['in',['taken','verifyFail','error']]
		];
		$buyerRequestNum = $this -> fromOrderIdR($whereR);

		// 今天该产品被申请(领取)的数量
		$whereR = [
			'orderID'=>$orderID,
			'status'=>'taken',
			"DATE_FORMAT(date,'%Y-%m-%d')"=>self::$tody
		];
		$daliyRequestNum = $this -> fromOrderIdR($whereR);

		// 历史该产品总共被申请(领取)的数量
		$whereR = [
			'orderID'=>$orderID,
			'status'=>['in',['taken','reviewed','verifyFail','error','rebated']]
		];
		$allRequestNum = $this -> fromOrderIdR($whereR);

		// 该买家当天领取该产品卖家一共多少个产品,最多为2
		$sameSellerNum = $this -> requestSameSellerNum($buyerID,$sellerID);

		trace("leeprince debug:isExistNum>>$isExistNum",'debug');

		if(($isExistNum == 0) && ($buyerTotalLimit > $buyerRequestNum) && ($dailyLimit > $daliyRequestNum) && ($finalLimit > $allRequestNum) && ($sameSellerLimit > $sameSellerNum)){
			$status = 'taken';
			$rejectedMessage = '';

			$requestReturn = self::DEAL_SUCCESS;
		}elseif($isExistNum > 0){
			$status = 'reject';
			$rejectedMessage = self::DEAL_EXIST_MSG;

			$requestReturn = self::DEAL_EXIST;
		}elseif($buyerTotalLimit <= $buyerRequestNum){
			$status = 'reject';
			$rejectedMessage = self::DEAL_RANK_LIMIT_MSG;

			$requestReturn = self::DEAL_RANK_LIMIT;
		}elseif($dailyLimit <= $daliyRequestNum){
			$status = 'reject';
			$rejectedMessage = self::DEAL_SELLER_DAILY_LIMIT_MSG;

			$requestReturn = self::DEAL_SELLER_DAILY_LIMIT;
		}elseif($finalLimit <= $allRequestNum){
			$status = 'reject';
			$rejectedMessage = self::DEAL_SELLER_TOTAL_LIMIT_MSG;

			$requestReturn = self::DEAL_SELLER_TOTAL_LIMIT;
		}elseif($sameSellerLimit > $sameSellerNum){
			$status = 'reject';
			$rejectedMessage = self::DEAL_SAME_SELLER_LIMIT_MSG;

			$requestReturn = self::DEAL_SAME_SELLER_LIMIT;
		}else{
			$status = '';
			$requestReturn = self::DEAL_FAILED;
		}

		if(!empyty($status)){
			
		}

		return $requestReturn;

	}

	// 根据买家 buyerID 在 t_rr_buyer 表中查询买家信息
	public function findBuyerInfo($buyerID)
	{
		$fieldB = [
			'rank',
		];

		$whereB = [
			'buyerID'=>$buyerID,
		];

		// table方法必须指定完整的数据表名
		// $info = Db::table('t_rr_buyer')->field($fieldB)->where($whereB)->find();
		// // 如果设置了数据表前缀参数的话，可以使用
		// $info = Db::name('buyer')->field($fieldB)->where($whereB)->find();

		//使用助手函数
		$info = db($this->tableNameBuyer)->field($fieldB)->where($whereB)->find();

		return $info;
	}

	// 根据等级 rank 在 t_rr_buyerrank 表中确定等级对应的 Deal 限制limit
	public function determineRankNum($rank)
	{
		//使用助手函数
		$num = db($this->tableNameBuyerRank)->where(['rank'=>$rank])->value('maxLimit');

		return $num;
	}

	// 同一个买家 buyer 当天领取该产品的卖家多少个产品
	public function requestSameSellerNum($buyerID,$sellerID)
	{
		$joinR = [
			['__ORDER__ o','o.orderID=r.orderID'],
		];

		$whereR = [
			'o.sellerID'=>$sellerID,
			'r.buyerID'=>$buyerID,
			"DATE_FORMAT(r.date,'%Y-%m-%d')"=>self::$tody,
			"r.status"=>'taken',
		];

		//使用助手函数
		$num = db($this->tableNameRequest)
				->alias('r')
				->join($joinR)
				->where($whereR)
				->count('r.requestID');

		return $num;
	}

}
