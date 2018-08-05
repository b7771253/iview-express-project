import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'

//引入后端路由
import APIRouter from './router/ServerRouter'

// 引入history模块
import history from 'connect-history-api-fallback'

// 正式环境时，下面两个模块不需要引入
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../build/webpack.dev.conf'

const app = express()

const mongoose = require('mongoose')

// 连接mongodb
// mongoose.connect('mongodb://leoric:test@119.28.88.83:27017/test') //test是数据库名称
// // 实例化连接对象
// const db = mongoose.connection
// db.on('error', console.error.bind(console, '连接错误：'))
// db.once('open', (callback) => {
//     console.log('MongoDB连接成功！！')
// })

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

//https
import fs from 'fs';
let http = require('http');
let https = require('https');
let privateKey  = fs.readFileSync('./config/private.pem', 'utf8');
let certificate = fs.readFileSync('./config/file.crt', 'utf8');
let credentials = {key: privateKey, cert: certificate};

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);
httpServer.listen(80, function() {
    console.log('HTTP Server is running on: http://localhost:%s', 80);
});
httpsServer.listen(443, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', 443);
});

// 引入history模式让浏览器支持
// app.use(history())
app.use(history({
    rewrites: [
        {
            from: /^\/api/,
            to: function(context) {
                return context.parsedUrl.pathname;
            }
        }
    ]
}))

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler))


app.use(express.static(path.join(__dirname, 'views')))

app.use('/api', APIRouter)

app.get('/', function (req, res) {
    res.sendFile('./views/index.html')
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
// will print stacktrace
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.send(err.message)
})

//app.listen(4000)

export default app
