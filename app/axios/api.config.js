let env = 'dev'
// if ((/env=online/.test(window.location.href))) {
//     env = 'online'
// } else if ((/env=dev/.test(window.location.href))) {
//     env = 'dev'
// } else {
//     env = 'dev' // 默认环境
// }
const SERVER_URL_LIST = {
    online: { // 正式环境
        SERVER_URL1: '',
        SERVER_URL2: '',
        SERVER_URL3: ''
    },
    dev: { // 测试环境
        SERVER_URL1: 'https://www.yundashi168.com/',
        SERVER_URL2: '',
        SERVER_URL3: ''
    }
}

//项目根路径
export const SERVER_URL = SERVER_URL_LIST[env].SERVER_URL1;

export const API = {
    TEST_GET: SERVER_URL + 'wxService/getParam/app/json',

    //登录接口：现在只要手机号传对就能成功登录，密码校验后面再配：http://34.92.48.253
    APP_LOGIN: SERVER_URL + 'lqdb-api/user/login/',
    //首页：/lqdb-api/goods/index/banners/
    APP_HOME: SERVER_URL + "lqdb-api/goods/index/banners/",
    //最新揭晓：/lqdb-api/goods/latest-announced/
    APP_GOODS_LATEST_ANNOUNCED: ({limit, offset}) => {
        return SERVER_URL + "lqdb-api/goods/latest-announced/?limit=" + limit + "&offset=" + offset;
    },

    //商品详情：/lqdb-api/goods/goods-fight/{goods_fight_id}/detail/
    APP_GOODS_DETAIL: (goods_fight_id) => {
        return SERVER_URL + 'lqdb-api/goods/goods-fight/' + goods_fight_id + '/detail/';
    },
    //商品详情，荣耀榜：/lqdb-api/goods/goods-fight/{goods_fight_id}/honor-list/
    APP_GOODS_HONNOR: (goods_fight_id) => {
        return SERVER_URL + "lqdb-api/goods/goods-fight/" + goods_fight_id + "/honor-list/";
    },
    //商品详情，参与记录：/lqdb-api/goods/goods-fight/{goods_fight_id}/order-list/
    APP_GOODS_ORDER_LIST: (goods_fight_id) => {
        return SERVER_URL + "lqdb-api/goods/goods-fight/" + goods_fight_id + "/order-list/";
    },
    //商品详情，夺宝号码：/lqdb-api/goods/luck-number/{order_id}/
    APP_GOODS_ORDER_ID: (order_id) => {
        return SERVER_URL + "lqdb-api/goods/luck-number/" + order_id;
    },
    //商品详情-往期揭晓：/lqdb-api/goods/goods-fight/old-list/{good_id}/
    APP_GOODS_OLD_LIST: (good_id) => {
        return SERVER_URL + "lqdb-api/goods/goods-fight/old-list/" + good_id;
    },
    //往期揭晓-根据商品id和期号查询goods_fight_id：/lqdb-api/goods/goods-fight/get-goods-fight-id-by-goods-id-and-period/
    APP_GOODS_OLD_BY_CONDITION: () => {
        return SERVER_URL + "lqdb-api/goods/goods-fight/get-goods-fight-id-by-goods-id-and-period/";
    },

    // 首页-Banner
    APP_INDEX_BANNERS: SERVER_URL + "lqdb-api/goods/index/banners/",
    //首页-4个按钮
    APP_INDEX_FOUR_BTS: SERVER_URL + "lqdb-api/goods/index/four-bts/",
    //首页-消息滚动条
    APP_INDEX_RADIOS: SERVER_URL + "lqdb-api/goods/index/radios/",
    //全部分类
    APP_GOOGS_TYPE: SERVER_URL + "lqdb-api/goods/type/list/?ordering=-order_id",
    // 晒单分享-列表
    APP_BASK_LIST: () => {
        return SERVER_URL + "lqdb-api/goods/bask/list/?ordering=-create_time";
    },

    //首页列表
    //最热：ordering=-now_people,-id
    //最新：ordering=-create_time,-id
    //首页-最快-升序: ordering=progress,-id
    //首页-最快-降序: ordering=-progress,-id
    //首页-价格-升序：ordering=good_price,-id
    //首页-价格-降序：ordering=-good_price,-id
    //十元专区：ordering=-progress,-id&ration=10
    //全部分类-右侧商品列表-{某个类型}:ordering=-progress,-id&goods_type={type_id}
    //全部分类-右侧商品列表-全部:ordering=-progress,-id
    //全部分类-搜索:ordering=-progress,-id&search={serach_name}
    APP_INDEX_GOODSLIST: ({ordering}) => {
        return SERVER_URL + "lqdb-api/goods/goods-fight/list/?status=%E8%BF%9B%E8%A1%8C%E4%B8%AD&ordering=" + ordering
    }
}

export default SERVER_URL_LIST[env]