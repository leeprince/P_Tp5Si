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
    public function show()
    {
        $request = Request::instance();
        $model = new IndexModel();

        $page = $request->post('page',1);
        $filter = $request->post('cond','orderDate');
        $data = [
            'onePageNum'=>10,
            'page'=>$page,
            'filter'=>$filter,
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
                'errorInfo'=>'查询失败'
            ];
        }
        return $result;
        
    }

    // 加载点击图片的产品详情
    public function product()
    {

        return $this->fetch();
    }








}
