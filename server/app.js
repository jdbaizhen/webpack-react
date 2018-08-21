const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

const app = new Koa()
const router = new Router()
const port = 3000

router.get('/', async(ctx, next)=>{
    ctx.body="Server is start"
})

const home = new Router()
const homeAdData = require('./data/home/ad.js')
const homeListData = require('./data/home/list.js')
home.get('/ad', async(ctx) => {
    try {
        ctx.body = {
            result: true,
            data: homeAdData,
            message: '获取广告列表'
        }
    } catch (error) {
        ctx.body = {
            result: false,
            message: '获取广告列表失败'
        }
    }  
})

home.post('/list', async(ctx) => {
    let req = ctx.request.body;
    console.log(req);
    try {
        ctx.body = {
            result: true,
            data: homeListData,
            message: '获取首页列表成功'
        }
    } catch (error) {
        ctx.body = {
            result: false,
            message: '获取首页列表失败'
        }
    }
})

router.use('/home',home.routes(),home.allowedMethods());

app.use(cors());
app.use(bodyParser());
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port)
console.log('server is start on '+ port);