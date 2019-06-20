import {sendGet, sendPost} from './axiosUtils'
import {API} from './api.config'

export const login = () => sendPost({
    url: API.APP_LOGIN,
    params: {user_tel: '18995848321', password: '111111', client_type: 'H5'}
})

//商品列表
export const goodsList = ({ordering}) => {
    return sendGet({url: API.APP_INDEX_GOODSLIST({ordering})})
}

//最新揭晓 ?limit=10&offset=20
export const latestAnnounced = ({limit, offset}) =>
    sendGet({url: API.APP_GOODS_LATEST_ANNOUNCED({limit, offset})})

//商品详情,商品信息
export const goodsDetail = (goods_fight_id) => {
    return sendGet({url: API.APP_GOODS_DETAIL(goods_fight_id)});
}

//商品详情，荣耀榜
export const goodsHonnor = (goods_fight_id) => sendGet({url: API.APP_GOODS_HONNOR(goods_fight_id)})

//商品详情，参与记录
export const goodsOrderList = (goods_fight_id) => sendGet({url: API.APP_GOODS_ORDER_LIST(goods_fight_id)})

// 商品详情，夺宝号码
export const goodsOrderId = (order_id) => sendGet({url: API.APP_GOODS_ORDER_ID(order_id)})

//商品详情-往期揭晓
export const goodsOldList = (good_id) => sendGet({url: API.APP_GOODS_OLD_LIST(good_id)})

//商品详情-往期揭晓-根据商品id和期号查询goods_fight_id
export const goodsOldOne = () => sendGet({url: API.APP_GOODS_OLD_BY_CONDITION()})