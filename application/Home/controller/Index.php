<?php
namespace app\home\controller;

use \think\Request;
use app\home\model\IndexModel;
use app\home\validate\AccountValidate;
USE think\Loader;

class Index extends Base
{
	// 首页
	public function index()
	{
		$request = Request::instance();

		$ch = $request->has('ch','get')?$request->get('ch'):'';
		if(!empty($ch)&& strlen($ch)){
			session('CH',$ch);
		}else{
			session('CH','');
		}

		return $this->fetch();

	}

	// 加载首页产品
	public function allProduct()
	{
		$request = Request::instance();
		$model = new IndexModel();

		if($request->isPost()){
			$page = $request->post('page/d',1);
			$filter = $request->post('cond','orderDate');
			$ca = $request->post('ca');
			$search = $request->post('search');

			trace("leeprince debug:page>>$page|filter>>$filter|ca>>$ca|search>>$search",'debug');

			$data = [
				'page'=>$page,
				'filter'=>$filter,
				'ca'=>$ca,
				'search'=>$search,
			];

			$allProduct = $model->findAllProduct($data);

			if($allProduct){
				$result = [
					'error'=>0,
					'data'=>$allProduct
				];
			}else{
				$result = [
					'error'=>1,
					'errorInfo'=>'Query Failed.'
				];
			}
		}else{
			$result = [
				'error'=>1,
				'errorInfo'=>'Query Failed.'
			];
		}

		return $result;
	}

	// 加载点击图片的产品详情
	public function productDetail()
	{
		$request = Request::instance();

		$orderID = $request->param('orderid/d');
		// trace("leeprince orderID>>$orderID",'debug');

		$model = new IndexModel();

		$oneProductInfo = $model->oneProduct($orderID);

		if($oneProductInfo){
			$this->assign('products',$oneProductInfo);

			return $this->fetch();
		}else{
			$this->redirect('index');
		}

	}

	// 点击申请产品的 Deal
	public function requestDeal()
	{
		// Request::instance() 的助手函数为:request()
		if(request()->isPost()){

			// Request::instance() 的助手函数为:request();
			// Request::instance()->请求类型('变量名'); =>使用助手函数为:request()->请求类型('变量名'); =>使用助手函数为:input('请求类型.变量名'); 或者input('变量名');[input函数默认就采用PARAM变量读取方式。param 获取当前请求的变量]
			$orderID = input('orderid');

			$model = new IndexModel();
			$requestInfo = $model -> requestProduct($orderID);

		}else{
			$requestInfo = IndexModel::DEAL_FAILED;
		}
		return $requestInfo;
	}

	// 网站的帮助页面
	public function help()
	{

		return $this->fetch();
	}

	// 点击申请产品的 Deal
	public function contactUs()
	{
		$request = Request::instance();

		if($request->isPost()){
			$name = input('name');
			$email = input('email');
			$subject = input('subject');
			$requestID = input('request');
			$message = input('message');

			$data['name'] = $name;
			$data['email'] = $email;
			$data['subject'] = $subject;
			$data['request'] = $request;
			$data['message'] = $message;

			$buyerID = session('BUYERID');

			$validate = Loader::validate('AccountValidate');
			$isValid = $validate->scene('contact')->check($data);

			if($isValid !== true){
				$errorMsg = $validate->getError();

				$this -> assign('errorMsg',$errorMsg);
				// trace("data invalid>>$errorMsg",'debug');

				return $this->fetch();
			}else{
				$to = $email;
				$cc = 'leeprince@foxmail.com';
				$subject = $data['subject'];
				$body = "buyerID:$buyerID\n
						name:$name\n
						requestID:$request\n
						message:$message"
						.config('EMAILABOUNT'); // HTML  tags
				$emailReturn = send_emial_163($to,$cc,$subject,$body);//163邮箱发送邮件

				// trace("data valid.",'debug');
				return $this->fetch('index');
			}

		}else{

			return $this->fetch();
		}
	}

	// 网站介绍
	public function introduce()
	{
		return $this->fetch();
	}

}
