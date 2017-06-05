$(function() {
    /**
     * 为动态添加dom重新渲染js-图片延时加载
     */
    $('img.lazy').lazyload({

        // 你的页面上可能隐藏了很多不可见的图片用作特殊用途，Lazyload默认是忽略这些图片的，如果不想忽略掉，可以这样
        skip_invisible : false,

        // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
        placeholder : "/static/images/ajax-loading.gif", //用图片提前占位

        // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        effect: "fadeIn", // 载入使用何种效果

        // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
        event: 'sporty'  // 事件触发时才加载
    });
});
/**
 *  获取coupon code
 */
function requestCoupon(obj) {

    // 评论前需登录
    if($('#buyerid').val()) {
        var $this = $(obj);
        var orderID = $this.attr('data-orderID');
        var couponUrl = $('#couponUrl').val();

        $.ajax({
            url: couponUrl,  // 获取coupon code的接口
            type: 'post',
            dataType: 'json',
            data: {'orderid': orderID},
            beforeSend: function() {

                // 等待提示
                $this.find('i').show();
            },
            success: function(resp) {
                //console.log(resp);
                // 隐藏等待提示
                $this.find('i').hide();
                $('.J_requestMsg').html(resp);
            }
        });
        return false;
    } else {

        // 未登录提示
        layer.msg('Please log in first!');
    }

}

