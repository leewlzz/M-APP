import {api, request} from '../../ajax'

const state = {
    goodsDetail: {}
};

const mutations = {
    //设置商品详情
    setGoodsDetail(state, param){
        state.goodsDetail = param;

    }
};


const actions = {
	// 请求商品详情数据
    async getDetialData(context, {id}){
        let result = await request.get(api.GOODS_GOODS_DETIAL_API, {id});
        let data = result.data.data;
        context.commit('setGoodsDetail', {
            id : data.default_goods_id,  //商品id
            seo: data.seo,     //seo优化关键词
            name : data.goods_info[0].name,  //产品名称
            banner : data.view_content.galleryView,  //产品主图banner图片
            desc : data.view_content.descTabsView.descTabsView  //产品参数  概述
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

