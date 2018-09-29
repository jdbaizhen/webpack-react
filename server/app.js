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
const search = new Router()
const homeAdData = require('./data/home/ad.js')
const homeListData = require('./data/home/list.js')
const searchListData = require('./data/search/list.js')

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

search.post('/list', async(ctx) => {
    try { 
        let req = ctx.request.body;
        console.log(req)
        ctx.body = {
            result: true,
            data: searchListData,
            message: '搜索成功'
        }
    }catch (error) {
        ctx.body = {
            result: false,
            message: '搜索失败'
        }
    }  
})

router.use('/home',home.routes(),home.allowedMethods());
router.use('/search',search.routes(),search.allowedMethods());

const city = new Router()
const cityList = ['北京','上海','广州','深圳','东莞','西安','大连','吉林','辽宁','黑龙江','云南','大理','晋中','太原','漠河','无锡','常州','苏州','杭州','泰州','丹阳','昆山','雄安','贵阳','成都'];

city.get('/list', async(ctx) => {
    try {
        ctx.body = {
            result: true,
            data: cityList,
            message: '获取城市列表成功'
        }
    } catch (error) {
        ctx.body = {
            result: false,
            message: '获取城市列表失败'
        }
    }
})

router.use('/city',city.routes(),city.allowedMethods());

app.use(cors());
app.use(bodyParser());
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port)
console.log('server is start on '+ port);