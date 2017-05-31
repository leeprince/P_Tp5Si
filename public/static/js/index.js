/**
 * 头部导航
 */
function Header() {
    var self = this;
    $.extend(self, {
        menus: {
            "user": {
                selector: $('#userSubMenu'),
                visible: {
                    right: 0
                },
                offset: 0,
                offsetDirection: 'right',
                buttonSelector: $('a#userNavLink'),
                hidden: {
                    right: -600
                }
            },
            "deal": {
                selector: $('#dealCategoryMenu'),
                visible: {
                    left: -12
                },
                offset: 200,
                offsetDirection: 'left',
                buttonSelector: $('a#dealMenuButton'),
                hidden: {
                    left: -600
                }
            },
            "coupon": {
                selector: $('#couponCategoryMenu'),
                visible: {
                    left: -12
                },
                offset: 250,
                offsetDirection: 'left',
                buttonSelector: $('a#couponMenuButton'),
                hidden: {
                    left: -600
                }
            },
            "blog": {
                selector: $('#blogMenu'),
                visible: {
                    left: -12
                },
                offset: 250,
                offsetDirection: 'left',
                buttonSelector: $('a#blogMenuButton'),
                hidden: {
                    left: -600
                }
            },
            "category": {
                selector: $('#categoryMenu'),
                visible: {
                    left: -12
                },
                offset: 0,
                offsetDirection: 'left',
                buttonSelector: $('a#menuButtonMore'),
                hidden: {
                    left: -600
                }
            }
        },
        init: function() {
            self.registerEvents();
            self.registerBodyEvents();
            $(window).resize(self.registerEvents);
        },
        registerEvents: function() {
            if (self.isMobile()) {
                $('#menuButton').off();
                $('#menuButton').on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self.toggleMenu(e, self.menus.category);
                });
                $('#categoryMenu').off('hover');
                $('#userNavLink, #userSubMenu').off();
                $('#userNavLink').on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self.toggleMenu(e, self.menus.user);
                });
                $('.menuMask').off();
                $('.menuMask').on('click', self.hideMenus);
            } else {
                $('#menuButtonMore, #categoryMenu').off();
                $('#menuButtonMore, #categoryMenu').on('hover', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var forceHide = (e.type == 'mouseleave');
                    self.toggleMenu(e, self.menus.category, forceHide);
                });
                $('#menuButtonMore').on('click', function(e) {
                    return false;
                });
                $('#menuButton').off('click');
                $('#dealMenuButton, #dealCategoryMenu').off();
                $('#dealMenuButton, #dealCategoryMenu').on('hover', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var forceHide = (e.type == 'mouseleave');
                    self.toggleMenu(e, self.menus.deal, forceHide);
                });
                $('#couponMenuButton, #couponCategoryMenu').off();
                $('#couponMenuButton, #couponCategoryMenu').on('hover', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var forceHide = (e.type == 'mouseleave');
                    self.toggleMenu(e, self.menus.coupon, forceHide);
                });
                $('#blogMenuButton, #blogMenu').off();
                $('#blogMenuButton, #blogMenu').on('hover', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var forceHide = (e.type == 'mouseleave');
                    self.toggleMenu(e, self.menus.blog, forceHide);
                });
                $('#userNavLink, #userSubMenu').off();
                $('#userNavLink, #userSubMenu').on('hover', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $(this).off('click');
                    var forceHide = (e.type == 'mouseleave');
                    self.toggleMenu(e, self.menus.user, forceHide);
                });
                $('.menuMask').off();
            }
        },
        registerBodyEvents: function() {
            $('body').on('click', '#addDealLink, #addLinkLink', self.showURL).on('click', '#addToDPBack', self.showDPButtons).on('submit', '#addToDPUrlForm', self.getWebsiteInfo).on('click', '.deals-accordion-toggle, .coupons-accordion-toggle', self.toggleAccordion).on('click', '.closeCategoryAccordion', function(e) {
                self.toggleMenu(e, self.menus.category, true)
            });
        },
        toggleAccordion: function() {
            $(this).parent().find('.accordion-links').slideToggle();
            $(this).find('span').toggleClass('icon-font-down icon-font-up');
        },
        isMobile: function() {
            return $(window).width() <= 785;
        },
        toggleMenu: function(e, menu, forceHide) {
            forceHide = forceHide || false;
            $('.menu').each(function() {
                if ("#" + $(this).attr('id') != menu.selector.selector) {
                    $(this).removeClass('visible').hide();
                }
            });
            if (menu.selector.hasClass('visible') || forceHide) {
                menu.selector.removeClass('visible');
                if (self.isMobile()) {
                    menu.selector.animate(menu.hidden, {
                        duration: 300,
                        queue: false,
                        complete: function() {
                            if (!menu.selector.hasClass('visible')) {
                                menu.selector.hide();
                            }
                        }
                    });
                } else {
                    menu.selector.hide();
                }
                if (!$('.menu.visible').length) {
                    $('.menuMask').hide();
                }
            } else {
                menu.selector.addClass('visible').show();
                if (self.isMobile()) {
                    menu.selector.animate(menu.visible, {
                        duration: 300,
                        queue: false
                    });
                }
                $('.menuMask').show();
            }
        },
        hideMenus: function(e) {
            var target = $(e.target);
            if (target.hasClass('menu') || target.parents('.menu').length) {
                return;
            }
            $.each(self.menus, function(key, menu) {
                self.toggleMenu(e, menu, true);
            });
        },
        showURL: function(e) {
            var type = $(this).attr('data-type');
            if (!type) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            $('#addToDPSubmitType').val(type);
            $('#addToDPButtons').hide();
            $('#addToDPUrl').show();
            $('#addToDPSubmitURL').focus();
        },
        showDPButtons: function() {
            $('#addToDPButtons').show();
            $('#addToDPUrl').hide();
        },
        getWebsiteInfo: function() {
            var urlInput = $('#addToDPSubmitURL');
            var url = urlInput.val();
            var type = $('#addToDPSubmitType').val();
            var interestId = $('#addToDPSubmitButton').attr('data-interest-id');
            if (interestId) {
                var interestString = '?interestId=' + interestId;
            } else {
                var interestString = '';
            }
            var error = $('#addToDPUrlError');
            if (!url) {
                error.text('A URL is required to continue.').show();
                urlInput.focus();
                return;
            }
            error.hide();
            var dpURL = $('#addToDPUrl');
            var dpLoader = $('#addToDPLoader');
            dpURL.hide();
            dpLoader.show();
            var timer = setTimeout(function() {
                dpLoader.find('.loadingText').hide();
                dpLoader.find('.skipContainer').show();
            }, 10000);
            $.get('/Submit/getProduct' + interestString, {
                url: url,
                type: type
            }, function(res) {
                clearTimeout(timer);
                dpLoader.find('.loadingText').show();
                dpLoader.find('.skipContainer').hide();
                if (res.error) {
                    if (res.errorCode == 200) {
                        window.location = res.data;
                        return;
                    }
                    dpLoader.hide();
                    dpURL.show();
                    error.html(res.errorMessage).show();
                } else {
                    if (res.data) {
                        window.location = res.data;
                    } else {
                        dpLoader.hide();
                        dpURL.show();
                        error.text('Something went wrong. Please try again later.').show();
                    }
                }
            });
        }
    });
    self.init();
}
$(document).ready(function() {
    new Header();
});

(function($) {
    var $container = $('#container');

    /**
     *  产品列表弹出层，利用lightbox插件magnificPopup将单页面以弹出层方式显示
     */
    var ourl = '';
    $container.magnificPopup({
        delegate: 'div.itemTile a',
        type: 'ajax',
        gallery: {
            enabled: false
        },
        callbacks: {
            beforeOpen: function() {

                // 保存原始url地址，用的全局变量
                ourl = window.location.href;

                var e = getEvent();
                var target = e.target || e.srcElement;

                // 保存被点击的产品列表节点, 用的全局变量
                $currentProductNode = $(target).parents('.J_itemTile');

                // 弹出层显示后，将url显示为弹出层相应的url地址
                var urlc = $currentProductNode.find(".J_listingDetail").attr("href");
                replaceUrl(urlc);
            },
            beforeClose: function() {

                // 关闭弹出层后，url地址改为原始地址
                replaceUrl(ourl);
            },
            parseAjax: function(mfpResponse) {
                mfpResponse.data = $(mfpResponse.data).find('.post');
                // console.log('Ajax content loaded:', mfpResponse);
            },
            ajaxContentAdded: function() {

                // 弹出层界面加载完毕后，执行成功的回调函数，界面上所需的js需放在回调函数中重新渲染
                /**
                 * 为动态添加dom重新渲染js-图片延时加载
                 */
                $('img.lazy').lazyload({

                    // 你的页面上可能隐藏了很多不可见的图片用作特殊用途，Lazyload默认是忽略这些图片的，如果不想忽略掉，可以这样
                    skip_invisible : false,

                    // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
                    placeholder : "/Public/images/ajax-loading.gif", //用图片提前占位

                    // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
                    effect: "fadeIn", // 载入使用何种效果

                    // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
                    event: 'sporty'  // 事件触发时才加载
                });
            }
        }
    });

    // 修改当前url地址
    function replaceUrl(name) {
        var obj = new Object();
        obj.rand = Math.random();
        history.replaceState(obj, '',name);
    }
})(jQuery);

/**
 * 瀑布流wookmark
 */
function waterfall(options, condition) {
    var handler = null;
    var page = 1;
    var isLoading = false;
    var $loadingInfo = $('#loading-info');

    // 滚动到底部时，加载更多
    function onScroll() {
        // Only check when we're not still waiting for data.
        if(!isLoading) {
            // Check if we're within 100 pixels of the bottom edge of the broser window.
            var closeToBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - 500);
            if(closeToBottom) {
                loadData(condition);
            }
        }
    }

    // 加载数据
    function loadData(param) {
        isLoading = true;
        $loadingInfo.show();
        var productUrl = $('#productUrl').val();
        var params = param ? param : {};
        params.page = page;
        $.ajax({
            url: productUrl,  // 加载产品列表后台接口
            dataType: 'json',
            data: params, // Page parameter to make sure we load new data
            success: onLoadData
        });
    }

    // ajax成功回调函数
    function onLoadData(resp) {
        if(resp.error == 0) {
            isLoading = false;
            $loadingInfo.hide();
            // Increment page index for future calls.
            page++;
            // 数据拼接html
            loadAjax(resp.data);
            // Apply layout.
            applyLayout();
        } else if(resp.error == 1) {
            $loadingInfo.html('No more products can be loaded...');
        }

        /**
         * 为动态添加dom重新渲染js-图片延时加载
         */
        $('img.lazy').lazyload({

            // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
            placeholder : "/Public/images/ajax-loading.gif", //用图片提前占位

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
    }

    // 数据拼接html
    function loadAjax(msg) {
        var productDetailUrl = $('#productDetailUrl').val();
        $.each(msg, function(i,item){
            var content = '<div class="J_itemTile item itemTile bounceIn animated animate-delay-05 animate-name-bounceIn"><div class="itemImg hasWhiteBG"><a href="'+ productDetailUrl + '?orderid=' + item.orderid +  '" class="J_listingDetail listing-detail img-auto"><img class="lazy" data-original="' + item.smallphoto + '"  alt="" ></a></div><div class="itemContent"><div class="itemTitle"><div class="tileDealPrice"><span class="currentPrice">Free </span><span class="originalPrice">$' + item.price + '</span></div><a href="'+ productDetailUrl + '?orderid=' + item.orderid + '" class="listing-detail">' + item.listingname + '</a></div></div></div>';
            $('#container').append(content);
        });
    }

    // 图片重新布局
    function applyLayout() {
        options.container.imagesLoaded(function() {
            // Create a new layout handler when images have loaded.
            handler = $('.J_itemTile');
            handler.wookmark(options);
        });
    }

    // 触发滚动事件
    $(window).bind('scroll.wookmark', onScroll);

    // 第一次自动加载数据
    loadData(condition);
}

/**
 * 获取事件对象函数封装
 */
function getEvent(){
    if(window.event){
        return window.event;
    }
    var f = arguments.callee.caller;
    do{
        var e = f.arguments[0];
        if(e && (e.constructor === Event || e.constructor===MouseEvent || e.constructor===KeyboardEvent)){
            return e;
        }
    }while(f=f.caller);
}

/**
 * 截取url中的参数
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
}

