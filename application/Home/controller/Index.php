<?php
namespace app\home\controller;

use \think\Request;
use app\home\model\IndexModel;

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

            trace("leeprince page>>$page|filter>>$filter|ca>>$ca",'debug');

            $data = [
                'page'=>$page,
                'filter'=>$filter,
                'ca'=>$ca,
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

        // return $this->fetch();
    }

    // 点击申请产品的 Deal
    public function help()
    {

        return $this->fetch();
    }

    // 点击申请产品的 Deal
    public function contactUs()
    {
        $request = Request::instance();

        if($request->isPost()){



            return $this->fetch('Index/index');
        }else{

            return $this->fetch();
        }
    }

}
