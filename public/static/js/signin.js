$(function() {
    // tab切换
    new Tab({'root':$('#tab')});

    // 注册表单验证
    $('#sign-form-1').validate({
        rules: {
            account: {
                required: true,
                email: true,
                foreignEmail: true,  // 国外邮箱验证，自定义
                remote: {
                    url: "checkAccount",  // 注册账号后台验证接口
                    type: "post",
                    dataType: 'text'
                }
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: '#password'
            },
            profileUrl: {
                required: true,
                url: true,
                profileUrlFormat: true,  // profile url格式验证,自定义
                remote: {
                    url: 'checkProfileUrl',  // profile url后台验证接口
                    type: "post",
                    dataType: 'text'
                }
            }
        },
        messages: {
            account: {
                required: "Please fill in your email",
                email: "The email address is not valid"
            },
            password: {
                required: "Please fill in the password",
                minlength: $.validator.format("Use a password at least {0} characters")
            },
            confirmPassword: {
                required: "Please fill in the password again",
                minlength: $.validator.format("Use a password at least {0} characters"),
                equalTo: "The password is inconsistent"
            },
            profileUrl: {
                required: "Please fill in profile url",
                url: "The profile url is not valid"
            }
        },
        focusInvalid:false,  // 取消验证时未通过验证元素获取焦点
        onkeyup: false,  // 取消keyup时验证
        focusCleanup:true,  // 未通过验证元素获取焦点时，移除错误提示
        errorClass: 'error is-visible',  // 错误提示自定义样式
        submitHandler: function(form){
            form.submit();
        }
    });

    // 登录表单验证
    $('#signin-form').validate({
        rules: {
            account: {
                required: true,
                email: true,
                remote: {
                    url: 'check_account_login',  // 登录账号后台验证接口
                    type: "post",
                    dataType: 'text'
                }
            },
            password: {
                required: true,
                minlength: 5,
                remote: {
                    url: 'check_password_login',  // 登录密码后台验证接口
                    type: "post",
                    data: {
                        account: function() {
                            return $("#accountLogin").val();
                        },
                        password: function() {
                            return $("#passwordLogin").val();
                        }
                    },
                    dataType: 'json'
                }
            }
        },
        messages: {
            account: {
                required: "Please fill in your email",
                email: "The email address is not valid"
            },
            password: {
                required: "Please fill in the password",
                minlength: "Use a password at least {0} characters",
                remote: "Invalid Password"
            }
        },
        focusInvalid:false,  // 取消验证时未通过验证元素获取焦点
        onkeyup: false,  // 取消keyup时验证
        focusCleanup:true,  // 未通过验证元素获取焦点时，移除错误提示
        errorClass: 'error is-visible',  // 错误提示自定义样式
        submitHandler: function(form){
            form.submit();
        }
    });

    // 忘记密码弹窗
    $('.J_forgotPass').on('click', function() {
        $('.J_backdrop').css('display', 'block');
        $('.J_modalWrapper').fadeIn(500);
    });
    $('.J_close').on('click', function() {

        $('.J_modalWrapper').fadeOut(500);
        $('.J_backdrop').fadeOut(500);
    });
    // 忘记密码表单验证
    $('#forgot-form').validate({
        rules: {
            account: {
                required: true,
                email: true
            }
        },
        messages: {
            account: {
                required: "Please fill in your email",
                email: "The email address is not valid"
            }
        },
        focusInvalid:false,  // 取消验证时未通过验证元素获取焦点
        onkeyup: false,  // 取消keyup时验证
        focusCleanup:true,  // 未通过验证元素获取焦点时，移除错误提示
        errorClass: 'error is-visible',  // 错误提示自定义样式
        submitHandler: function(form){
            var oDomForgot = $('#forgot-form');
            var email = $('#forgot-account').val();
            var options = {
                url: 'forgot_password',  // 重置密码后台接口
                type: 'post',
                data: {'email': email},
                beforeSubmit: function() {
                    // 等待提示
                    oDomForgot.find('i').removeClass('hide');
                },
                success: function(msg) {
                    console.log(111);
                    console.log(msg);
                    msg = msg.replace(/\s/g,'');
                    // 关闭等待提示
                    oDomForgot.find('i').addClass('hide');
                    // 密码重置成功关闭忘记密码弹窗
                    if(msg == "reset-password-success") {
                        $('.J_modalWrapper').fadeOut(500);
                        $('.J_backdrop').fadeOut(500);
                    }
                },
                error:function(){
                    console.log(222);
                }
            };
            $(form).ajaxSubmit(options);
            return false;
        }
    });
});

// 清空之前一次验证绑定的previousValue值
function emptyValue() {
	if($('input[name="account"]').data("previousValue")) {
        $('input[name="account"]').data("previousValue").old = null;
    }
    if($('input[name="password"]').data("previousValue")) {
        $('input[name="password"]').data("previousValue").old = null;
    }
	return true;
}

// tab切换封装
function Tab(option){
    this.root=$(option.root);
    this.tabTag=this.root.find('#tabon a');//菜单栏
    this.hidden=this.root.find('.J_tabcon_item');//隐藏内容
    this.init();
}
Tab.prototype={
    init:function(){
        var that=this;
        this.tabTag.each(function(i){
            $(this).click(function(){
                that.root.find('#tabon').attr('data-active-index', i);
                that.tabTag.removeClass('active');
                $(this).addClass('active');
                that.hidden.eq(i).show().siblings().hide();
            })
        })
    }
};

// 粒子动画设置
/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#d0d0d0',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 0.9,
    size: 6,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#d0d0d0',
      opacity: 0.9,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});