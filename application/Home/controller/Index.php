<?php
namespace app\home\controller;

use \think\Request;

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

    // 加载出首页产品
    public function show()
    {
        
    }









}
