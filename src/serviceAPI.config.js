const BASEURL = "https://www.easy-mock.com/mock/5d82f435e4d5197784494880/expmale/";
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShopingMallInfo : BASEURL + 'index',
    registerUser : LOCALURL + 'user/register',  //用户注册接口
    loginUser : LOCALURL + 'user/login',  //用户登录接口
    getDetailGoodsInfo : LOCALURL + 'goods/getDetailGoodsInfo',  //商品信息
    getSlidesInfo : LOCALURL + 'goods/getSlidesInfo',  //轮播图信息
    getfloorGoodsInfo : LOCALURL + 'goods/getfloorGoodsInfo'   //楼层商品

}

module.exports = URL;