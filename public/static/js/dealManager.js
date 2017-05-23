$(function() {

    /**
     * 图片延时加载
     */
    $('img.lazy').lazyload({

        // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
        placeholder : "/Public/images/white.gif", //用图片提前占位

        // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        effect: "fadeIn", // 载入使用何种效果

        // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
        threshold: 300, // 提前开始加载

        // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
        event: 'click',  // 事件触发时才加载

        // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
        container: $("#container"),  // 对某容器中的图片实现效果

        // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
        failurelimit : 10 // 图片排序混乱时
    });

    /**
     *  订单操作
     */
    $('.J_order').on('click', function(e) {
        var e =window.event || e;
        var target = e.target || e.srcElement;
        var $target = $(target);
        var $currentOrder = $(this);

        // 获取点击对应的订单orderID
        var orderID = $currentOrder.attr('data-orderID');
        var requestID = $currentOrder.attr('data-requestID');

        // ====================
        // 删除订单操作
        // ====================
        if($target.hasClass('J_btnDel')) {

            // 点击提交
            var $modalDelete = $('#modal-delete');
            $('.J_submitDelete').on('click', function() {
                var _this = this;
                var deleteUrl = $('#delete-url').val();
                $.ajax({
                    url: deleteUrl,  // 删除订单后台接口
                    data: {requestID: requestID},
                    dataType: 'json',
                    type: 'post',
                    beforeSend: function() {

                        // 等待提示
                        $(_this).find('i').removeClass('hide');
                    },
                    success: function(resp) {
                        if(resp) {

                            // 隐藏等待提示
                            $(_this).find('i').addClass('hide');

                            // 删除订单
                            $currentOrder.remove();
                            $modalDelete.modal('hide');
                        }
                    }
                });
            });

            // 关闭模态框时清空数据
            $modalDelete.on('hide.bs.modal', function() {
                var $this = $(this);

                // 隐藏等待信息
                $this.find('i').addClass('hide');
            });
        }

        // ====================
        // 点击I haven't reviewed,订单状态跳转为taken
        // ====================
        else if($target.hasClass('J_btnNotReview')) {
            var notReviewUrl = $('#not-review-url').val();
            var params = {"requestID": requestID};
            $.ajax({
                url: notReviewUrl,
                type: 'post',
                data: params,
                success: function(resp) {
                    if(resp) {

                        // 订单状态改为Approved
                        $currentOrder.find('.J_approvedStatus').parent().addClass('active').siblings().removeClass('active');

                        // 显示Approved状态下的操作按钮
                        $currentOrder.find('.J_notReview').addClass("hide").siblings().addClass("hide").siblings(".J_cancel").removeClass("hide").siblings(".J_submitReview").removeClass("hide").siblings(".J_statusTaken").removeClass("hide").siblings(".J_buy").removeClass("hide");
                    }
                }
            });
        }

        // ====================
        // 点击delete archive,隐藏订单
        // ====================
        else if($target.hasClass('J_btnArchive')) {
            var $modalArchieve = $('#modal-archive');
            $(".J_btnDelArchive").on("click", function() {
                var _this = this;
                var archieveUrl = $('#archive-url').val();
                var params = {"requestID": requestID};
                $.ajax({
                    url: archieveUrl,
                    type: 'post',
                    data: params,
                    beforeSend: function() {

                        // 等待提示
                        $(_this).find('i').removeClass('hide');
                    },
                    success: function(resp) {
                        if(resp) {
                            // 隐藏等待提示
                            $(_this).find('i').addClass('hide');

                            // 删除订单
                            $currentOrder.remove();
                            $modalArchieve.modal('hide');
                        }
                    }
                });
            });

            // 关闭模态框时清空数据
            $modalArchieve.on('hide.bs.modal', function() {
                var $this = $(this);

                // 隐藏等待信息
                $this.find('i').addClass('hide');
            });
        }

        // ====================
        // 点击submit review
        // ====================
        else if($target.hasClass('J_btnSubmitReview') || $target.hasClass('J_btnReenterLink')) {
            var $modalReview = $('#modal-submitReview');
            var orderExpires = $currentOrder.attr('data-expires');
            var orderExpiresMessage = $currentOrder.attr('data-expires-message');

            // 添加requstID到弹窗
            $modalReview.find('.J_getRequestID').val(requestID);

            //领取折扣码,24h内不让提交review
            if(orderExpires != 0) {

                // 让表单项变为不可编辑
                $modalReview.find('input').attr('disabled', 'disabled');
                $modalReview.find('[type=submit]').attr('disabled', 'disabled').css('border', '2px solid #8d8d8d');

                // 显示报错信息
                $modalReview.find('.J_toolTip span').eq(0).addClass('text-danger').next().html(orderExpiresMessage).addClass('text-danger');
            } else {

                // submit review表单验证
                $('#form-review').validate({
                    rules: {
                        posterLink: {
                            required: true,
                            isViewUrl: true
                        },
                        paypalAccount: {
                            required: true,
                            email: true
                        },
                        amazonOrderID: {
                            required: true,
                            isAmazonOrderID: true
                        }
                    },
                    messages: {
                        posterLink: {
                            required: "Please fill in your name",
                            isViewUrl: "The format is wrong"
                        },
                        paypalAccount: {
                            required: "Please fill in your paypal",
                            email: "Your paypal is not valid"
                        },
                        amazonOrderID: {
                            required: "Please fill in your amazon order ID",
                            isAmazonOrderID: "Your amazon orderID is not valid"
                        }
                    },
                    focusInvalid:false,  // 取消验证时未通过验证元素获取焦点
                    onkeyup: false,  // 取消keyup时验证
                    focusCleanup:true,  // 未通过验证元素获取焦点时，移除错误提示
                    errorClass: 'error is-visible',  // 错误提示自定义样式
                    submitHandler: function(form){
                        var $posterError = $('#posterLink').next();
                        var reviewUrl = $('#review-url').val();
                        var $formReview = $('#form-review');
                        var params = $formReview.serialize();
                        var options = {
                            url: reviewUrl,  // 更改paypal后台接口
                            type: 'post',
                            data: params,
                            beforeSend: function() {

                                // 等待提示
                                $formReview.find('i').removeClass('hide');
                            },
                            success: function(resp) {
                                console.log(resp);
                                if(resp == 'REVIEW-VALID') {

                                    // 清空报错
                                    $posterError.html('').hide();

                                    // 取消等待
                                    $formReview.find('i').addClass('hide');

                                    // 关闭modal
                                    $modalReview.modal("hide");

                                    // 订单状态改为Reviewed
                                    $currentOrder.find('.J_reviewedStatus').parent().addClass('active').siblings().removeClass('active');

                                    // 显示Reviewed状态下的操作按钮
                                    $currentOrder.find('.J_statusSoon').removeClass("hide").siblings().addClass("hide");

                                } else {
                                    var errorMsg = '';
                                    if(resp == 'ASIN-WRONG') {

                                        // 报错信息
                                        errorMsg = 'Oops, the review is not for this product';

                                    } else if(resp == 'PROFILE-WRONG') {

                                        // 报错信息
                                        errorMsg = 'Oops, the review is not written by you';
                                    } else if(resp == 'SIGN-WRONG') {

                                        // 报错信息
                                        errorMsg = 'Oops, the review is not verified purchase';
                                    } else if(resp == 'CHECK-WRONG') {

                                        // 报错信息
                                        errorMsg = 'Oops, We can`t verify it this monment,Please try later';
                                    } else if(resp == 'DATE-WRONG') {

                                        // 报错信息
                                        errorMsg = 'Oops, the review date is earlier than request date';
                                    } else if(resp == 'FORMAT-WRONG') {

                                        //  报错信息
                                        errorMsg = 'Oops, the review url is invalid';
                                    }

                                    // 取消等待
                                    $formReview.find('i').addClass('hide');

                                    // 显示后台报错信息
                                    $posterError.html(errorMsg).show();

                                    // 订单状态改为Reviewed
                                    if(resp != 'DATE-WRONG' && resp != 'FORMAT-WRONG') {
                                        $currentOrder.find('.J_reviewedStatus').parent().addClass('active').siblings().removeClass('active');
                                    }

                                    // 显示Reviewed状态下的操作按钮
                                    $currentOrder.find('.J_notReview').removeClass("hide").siblings().addClass("hide").siblings(".J_reenterLink").removeClass("hide").siblings(".J_support").removeClass("hide").siblings(".J_statusInvalidlink").removeClass("hide");
                                }
                            }
                        };
                        $(form).ajaxSubmit(options);
                        return false;
                    }
                });
            }

            // 关闭模态框时清空数据
            $modalReview.on('hide.bs.modal', function() {
                var $this = $(this);

                // 隐藏报错信息
                $this.find('label.error').hide();

                // 隐藏等待提示
                $this.find('i').addClass('hide');

                // 恢复表单可编辑状态，清空表单数据
                $this.find('input').removeAttr('disabled');
                $this.find('input:not(#paypalAccount)').val('');
                $this.find('[type=submit]').removeAttr('disabled').css('border', '2px solid #4f234e');
                $this.find('.J_toolTip span').eq(0).removeClass('text-danger').next().html("Please make sure no typo in your paypal account, otherwise we can't pay you.").removeClass('text-danger');
            });
        }

        // ====================
        // 点击get support
        // ====================
        else if($target.hasClass('J_btnSupport')) {
            var $modalGetSupport = $('#modal-getSupport');

            // 添加requstID到get support弹窗
            $modalGetSupport.find('.J_getRequestID').val(requestID);

            // get support表单验证
            $('#form-support').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true,
                        minlength: 10
                    },
                    message: {
                        required: true,
                        minlength: 30
                    }
                },
                messages: {
                    name: {
                        required: "Please fill in your name",
                        minlength: $.validator.format("at least {0} characters")
                    },
                    email: {
                        required: "Please fill in your email",
                        email: "The email is not valid"
                    },
                    subject: {
                        required: "Please fill in your subject",
                        minlength: $.validator.format("at least {0} characters")
                    },
                    message: {
                        required: "Please fill in your message",
                        minlength: $.validator.format("at least {0} characters")
                    }
                },
                focusInvalid:false,  // 取消验证时未通过验证元素获取焦点
                onkeyup: false,  // 取消keyup时验证
                focusCleanup:true,  // 未通过验证元素获取焦点时，移除错误提示
                errorClass: 'error is-visible',  // 错误提示自定义样式
                submitHandler: function(form){
                    var supportUrl = $('#support-url').val();
                    var $formSupport = $('#form-support');
                    var params = $formSupport.serialize();
                    var options = {
                        url: supportUrl,  //联系我们
                        type: 'post',
                        data: params,
                        beforeSend: function() {
                            // 等待提示
                            $formSupport.find('i').removeClass('hide');
                        },
                        success: function(resp) {
                            if(resp) {

                                // 取消等待
                                $formSupport.find('i').addClass('hide');

                                // 关闭modal
                                $modalGetSupport.modal("hide");

                                //提示提交成功
                                layer.msg("Your message was sent successfully. I'll get back to you shortly, thanks.");
                            }
                        }
                    };
                    $(form).ajaxSubmit(options);
                    return false;
                }
            });

            // 关闭模态框时清空数据
            $modalGetSupport.on('hide.bs.modal', function() {
                var $this = $(this);

                // 隐藏等待提示
                $this.find('i').addClass('hide');

                // 清空表单数据、报错信息
                $this.find('input').val('');
                $this.find('textarea').val('');
                $this.find('label.error').remove();
            });
        }

        // ====================
        // change paypal账号
        // ====================
        else if($target.hasClass('J_btnChangePaypal')) {
            var $modalPaypal = $('#modal-changePaypal');

            // 更改paypal表单验证
            $('#form-paypal').validate({
                rules: {
                    paypalAccount: {
                        required: true,
                        email: true,
                        foreignEmail: true  // 国外邮箱验证，自定义
                    }
                },
                messages: {
                    paypalAccount: {
                        required: "Please fill in your paypal",
                        email: "The paypal is not valid"
                    }
                },
                focusInvalid:false,  // 取消验证时未通过验证元素获取焦点
                onkeyup: false,  // 取消keyup时验证
                focusCleanup:true,  // 未通过验证元素获取焦点时，移除错误提示
                errorClass: 'error is-visible',  // 错误提示自定义样式
                submitHandler: function(form){
                    var paypalUrl = $('#paypal-url').val();
                    var $formPaypal = $('#form-paypal');
                    var paypal = $('#paypalAccountNew').val();
                    var options = {
                        url: paypalUrl,  // 更改paypal后台接口
                        type: 'post',
                        data: {'paypal': paypal,'requestID':requestID},
                        beforeSend: function() {
                            // 等待提示
                            $formPaypal.find('i').removeClass('hide');
                        },
                        success: function(resp) {

                            // 关闭等待提示
                            $formPaypal.find('i').addClass('hide');

                            // 关闭modal弹窗
                            $modalPaypal.modal('hide');

                            // 提示更改成功
                            layer.msg('Your paypal updated successfully');

                            // 订单状态改为Reviewed
                            $currentOrder.find('.J_reviewedStatus').parent().addClass('active').siblings().removeClass('active');

                            // 显示Reviewed状态下的操作按钮
                            $currentOrder.find('.J_statusSoon').removeClass("hide").siblings().addClass("hide");
                        }
                    };
                    $(form).ajaxSubmit(options);
                    return false;
                }
            });

            // 关闭模态框时清空数据
            $modalPaypal.on('hide.bs.modal', function() {
                var $this = $(this);

                // 隐藏等待提示
                $this.find('i').addClass('hide');

                // 清空表单数据、报错信息
                $this.find('input').val('');
                $this.find('textarea').val('');
                $this.find('label.error').remove();
            });
        }
    });
});

