let crypto = require('crypto');

//您自己的api_user与api_key
let API_USER = 'a77b6e82';
let API_KEY = '1f4bdc52-64d9-4b78-a975-0edb1214bd81';

function gen_md5(param_str){
    let md5 = crypto.createHash('md5');
    let res = md5.update(param_str,'utf8').digest('hex');
    return res;
}

function gen_signature(api_user, price, type, redirect, order_id, order_info){
    let param = {
        'api_user' : api_user,  
        'price': price, 
        'type': type,  
        'redirect': redirect,   
        'order_id': order_id, 
        'order_info': order_info,
    }
    let param_str = API_KEY;
    let sorted_keys = Object.keys(param).sort();
    for( let index in sorted_keys ){
        let key = sorted_keys[index];
        param_str = param_str + param[key];
    }

    let sign = gen_md5(param_str);
    return sign;
}


exports.pay_info = function(price,ua,aid){
    let api_user = API_USER;

    //用户支付成功之后, 跳转到的页面 
    let redirect = 'http://www.findc.me/v?id='+aid;

    //您系统内部生成的订单号, 唯一标识一个订单   
    let order_id = ua+"__"+aid ;

    //您自定义的用户信息, 方便在后台对账, 排查订单是由哪个用户发起的, 强烈建议加上
    let order_info = new Buffer('测试订单','utf8').toString();

    let signature = gen_signature(api_user, price, 1, redirect, order_id, order_info)

    let p = {
        'api_user': api_user, 
        'price': parseFloat(price).toFixed(1),
        'type': 1,
        'redirect': redirect,
        'order_id': order_id,
        'order_info': order_info,      
        'signature': signature,
    }


    return p;
}

