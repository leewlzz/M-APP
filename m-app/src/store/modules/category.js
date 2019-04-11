import {api, request} from '../../ajax'

const state = {
    NavData: [],
    MenuData: []
}
const mutations = {
    setCateData(state, param) {
        state.NavData = param.NavData;
    }
}
const actions = {
    // 请求分类页面数据
    async getCateDataAction(context) {
        // let result = await request.post(api.CATE_DATA_API);
        let result = require('../../data/category.json');
        // console.log(result)
        let list = result.data.map(({category_id, category_name}) => ({category_id, category_name}));
        context.commit('setCateData', {NavData: list})
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}