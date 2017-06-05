<?php
namespace app\home\model;

use \think\Model;
use \think\Db;

class IndexModel extends Model
{
	protected $tableNameOrder = 'order';

	// static $tableJoin = [
	// 		['__LISTING__ l',using('ASIN')],
	// 		['__SELLER__ s',using('sellerID')],
	// 		['__CATEGORY__ c',using('categoryID')],
	// ];

	private static function getFilter($filter)
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
		$filter = self::getFilter($filter);

		$fieldFind = [
				'o.orderID',
				'o.price',
				'l.listingName',
				'l.smallPhoto',
				'l.photo'
		];

		$joinFind = [
				['__LISTING__ l','l.ASIN=o.ASIN'],
				['__SELLER__ s','s.sellerID=o.sellerID'],
				['__CATEGORY__ c','c.categoryID=l.categoryID']
		];

		$WhereFind = [
				'o.endDate'=>['>=',$currentDate],
				's.endDate'=>['>=',$currentDate],
				'o.status'=>'active',
				's.balance'=>['>',0]
		];

		$orderList = Db::name($this->tableNameOrder)
					->alias('o')
					->field($fieldFind)
					->join($joinFind)
					->where($WhereFind)
					->order($filter)
					->limit($orderIdStarted,$onePageNum)
					->select();

		return $orderList;
	}

}
