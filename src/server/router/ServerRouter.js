var express = require('express');
var router = express.Router();
var models =  require('../model/models')
var User = models.User

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '2487115675@qq.com',
        pass: 'mgzlljngcjwneaej' //授权码,通过QQ获取
    }
});
router.get('/', function(req, res, next) {
    res.send('ok')
});

router.get('/test', function(req, res, next) {
    res.send('test')
});

router.get('/save', function (req, res, next) {
    var user = new User({
        email: 'a@qq.com',
        name: 'leoric'
    });
    user.save();
    res.send('Data inited');
});


router.get('/send', function(req, res, next) {
    var mailOptions = {
        from: '2487115675@qq.com', // 发送者
        to: '897339736@qq.com', // 接受者,可以同时发送多个,以逗号隔开
        subject: 'leoric的测试邮件', // 标题
        //text: 'Hello world', // 文本
        html: `<h3>~~~~~~~</h3>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.send(err);
            return;
        }
        res.send("success");
    });

});

router.get('/sendMail',function (req, res, next) {

    var c = req.query.content
    var title = req.query.title
    var to = req.query.to

    var mailOptions = {
        from: '2487115675@qq.com', // 发送者
        to: to, // 接受者,可以同时发送多个,以逗号隔开
        subject: '今日已售 '+title+' (点击查看详情)', // 标题
        //text: 'Hello world', // 文本
        html: c
    };

    console.log(mailOptions)

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.send("console.log('err')")
            return;
        }
        res.send("console.log('OK')")
    });
})

module.exports = router;