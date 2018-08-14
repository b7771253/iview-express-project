let express = require('express');
let router = express.Router();

let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'gz-cdb-ll2c22jx.sql.tencentcdb.com',
    user     : 'root',
    password : 'b7771253',
    database : 'test',
    port:'62166'
});


connection.connect();


router.get('/', function(req, res, next) {
    res.send('ok')
});

router.get('/getArticle', function(req, res, next) {
    let aid = req.query.id
    let ua = req.query.ua

    if (!aid || !ua){
        res.send({code:-1})
        return;
    }

    let sql = 'SELECT id FROM user where ua=?'
    let param = [ua]


    connection.query(sql, param ,function (error, results) {

        if (error) {
            res.send({code:-2})
            return;
        }

        if (!results[0] || !results[0].id){
            sql = 'INSERT INTO user VALUES(?,null)'
            param = [ua]
            connection.query(sql, param,null)
            res.send({code:1,data:ua})
            return
        }

        let  uid= results[0].id

        sql = 'SELECT * FROM user where uid=? and aid=?'
        param = [uid,aid]

        connection.query(sql, param,function (error, results) {

            if (error || !results[0] || !results[0].id) {
                res.send({code:-5,data:uid})
                return;
            }

            res.send({code:0})

        })

    });


});

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     service: 'qq',
//     auth: {
//         user: '2487115675@qq.com',
//         pass: 'mgzlljngcjwneaej' //授权码,通过QQ获取
//     }
// });

// router.get('/save', function (req, res, next) {
//     var user = new User({
//         email: 'a@qq.com',
//         name: 'leoric'
//     });
//     user.save();
//     res.send('Data inited');
// });
//
//
// router.get('/send', function(req, res, next) {
//     var mailOptions = {
//         from: '2487115675@qq.com', // 发送者
//         to: '897339736@qq.com', // 接受者,可以同时发送多个,以逗号隔开
//         subject: 'leoric的测试邮件', // 标题
//         //text: 'Hello world', // 文本
//         html: `<h3>~~~~~~~</h3>`
//     };
//
//     transporter.sendMail(mailOptions, function (err, info) {
//         if (err) {
//             res.send(err);
//             return;
//         }
//         res.send("success");
//     });
//
// });
//
// router.get('/sendMail',function (req, res, next) {
//
//     var c = req.query.content
//     var title = req.query.title
//     var to = req.query.to
//
//     var mailOptions = {
//         from: '2487115675@qq.com', // 发送者
//         to: to, // 接受者,可以同时发送多个,以逗号隔开
//         subject: '今日已售 '+title+' (点击查看详情)', // 标题
//         //text: 'Hello world', // 文本
//         html: c
//     };
//
//     console.log(mailOptions)
//
//     transporter.sendMail(mailOptions, function (err, info) {
//         if (err) {
//             res.send("console.log('err')")
//             return;
//         }
//         res.send("console.log('OK')")
//     });
// })

module.exports = router;