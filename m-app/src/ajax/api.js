// 请求数据
// 开发环境
const DEV_HOST = 'http://localhost:8080';
// 测试环境
const SET_HOST = 'http://129.204.72.71:3000';
// 生产环境
const PRO_HOST = 'http://129.204.72.71:80';


/*
说明： 猜你喜欢商品接口
请求方式：GET
参数： goodsId
*/ 
const GOODS_GOODS_DETIAL_API = '/data/detial.json';

/*
说明： 分类页面接口
请求方式：POST
参数： 无
*/ 
const CATE_DATA_API = '/v1/home/category_v2'


export default {
    HOST: DEV_HOST,
    CATE_DATA_API,
    GOODS_GOODS_DETIAL_API
}

