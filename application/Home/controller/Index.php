<?php
namespace app\home\controller;

// 如果继承了think\Controller类的话，可以直接调用think\View及think\Request类的方法
// use think\View;
use \think\Controller;

// class Index
class Index extends Controller
{
    public function index()
    {

        return view();



    	// $admin  = model('Employee');
    	// $admin  = new Employee();
    	// $admin->where(['employeeID'=>'30000001'])->find();
    	// dump($admin);die;
    	// $this->assign('adminInfo',$adminInfo);

    	// $employee = db('employee')->where(['employeeID'=>30000001])->find();
        // dump($employee);
    	// echo $employee['name'];
    	// this->assign('employee',$employee);

    	// 渲染模版_1(不建议)
    	// 虽然如果继承了think\Controller类的话，可以直接调用think\View及think\Request类的方法 ;但是需要使用new View()实例化视图类时,继承think\Controller是不行的,需要使用别名use think\View;
    	// use \think\View;//实例化视图类
    	// $view = new View();
    	// return $view->fetch();

    	// 渲染模版_2
    	// 虽然如果继承了think\Controller类的话，可以直接调用think\View及think\Request类的方法 ;但是需要使用$this->view实例化视图类
    	// $view = $this->view;
    	// return $view->fetch();

    	// 渲染模版_3
    	// use think\Controller;
    	// class Index extends Controller
     	// return $this->fetch();

     	// 渲染模版_4(推荐)
    	// 助手函数调用格式：
    	// view('[模板文件]'[,'模板变量（数组）'][,模板替换（数组）])
    	// 无论你是否继承think\Controller类，助手函数都可以使用，也是最方便的一种。
    	// return view();

    }
}
