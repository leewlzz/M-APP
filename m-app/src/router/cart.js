const route = {
    path: '/cart',
    component: () => import('../pages/cart/root'),
    children : [
        {
            path : '/detial/:goodsId' ,
            component :  ()=>import('../pages/common/goodsDetial.vue'),
            props: true
        }
    ]
}

export default route;