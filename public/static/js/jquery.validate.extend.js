// 过滤国内邮箱
$.validator.addMethod('foreignEmail', function(value, element) {
    var pattern = /@(163.com|126.com|yeah.net|qq.com)$/i;
    return this.optional(element) || (!pattern.test(value));
}, 'Error detected');

// 验证profile url格式
$.validator.addMethod('profileUrlFormat', function(value, element) {
    var pattern = /(\/profile\/amzn1.account.(A)\w+)|(\/gp\/profile\/(A)\w+)/;
    return this.optional(element) || (pattern.test(value));
}, 'The profile url is not valid');

// 验证review url格式
$.validator.addMethod('isViewUrl', function(value, element) {
    var pattern = /^(\s*(https|http)?:\/\/+(www.amazon.com\/review|www.amazon.com\/gp\/customer-reviews\/|www.amazon.com\/gp\/review\/|www.amazon.com\/product-reviews\/|www.amazon.com\/gp\/cdp\/member-reviews\/|www.amazon.com\/gp\/aw\/review\/|www.amazon.com\/gp\/aw\/cr\/))[^\s]+/;
    return this.optional(element) || (pattern.test(value));
}, 'The review url is not valid');

// 验证amazon order ID格式
$.validator.addMethod('isAmazonOrderID', function(value, element) {
    var pattern = /^(\s*[0-9]{3})-[0-9]{7}-([0-9]{7}\s*)$/;
    return this.optional(element) || (pattern.test(value));
}, 'The amazon orderID is not valid');

// 重定义remote方法，使不仅仅只是返回true或false，还能根据不同的错误类型返回不同的错误信息
// 解决此问题的链接：http://blog.csdn.net/bbirdsky/article/details/50345667
jQuery.extend( jQuery.validator.methods, {
    remote: function( value, element, param ) {
        if ( this.optional( element ) ) {
            return "dependency-mismatch";
        }
        var previous = this.previousValue( element ),
            validator, data;
        if (!this.settings.messages[ element.name ] ) {
            this.settings.messages[ element.name ] = {};
        }
        previous.originalMessage = this.settings.messages[ element.name ].remote;
        this.settings.messages[ element.name ].remote = previous.message;
        param = typeof param === "string" && { url: param } || param;
        if ( previous.old === value ) {
            return previous.valid;
        }
        previous.old = value;
        validator = this;
        this.startRequest( element );
        data = {};
        data[ element.name ] = value;
        $.ajax( $.extend( true, {
            mode: "abort",
            port: "validate" + element.name,
            dataType: "json",
            data: data,
            context: validator.currentForm,
            success: function( response ) {
                var valid = response === true || response === "true",
                    errors, message, submitted;
                validator.settings.messages[ element.name ].remote = previous.originalMessage;
                if ( valid ) {
                    submitted = validator.formSubmitted;
                    validator.prepareElement( element );
                    validator.formSubmitted = submitted;
                    validator.successList.push( element );
                    delete validator.invalid[ element.name ];
                    validator.showErrors();
                } else {
                    errors = {};
                    if(typeof response == 'object') {
                        message = response.message || validator.defaultMessage( element, "remote" );
                    } else {
                        message = response || validator.defaultMessage( element, "remote" );
                    }
                    errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
                    validator.invalid[ element.name ] = true;
                    validator.showErrors( errors );
                }
                previous.valid = valid;
                validator.stopRequest( element, valid );
            }
        }, param ) );
        return "pending";
    }
});
