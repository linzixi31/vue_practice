const routers = [
    {
        path: '/index/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            {
                path:'product',
                component:(resolve) => require(['./components/productcomponent/product.vue'], resolve)
            },
            {
                path:'addproduct',
                component:(resolve) => require(['./components/productcomponent/addproduct.vue'], resolve)
            },
            {
                path:'sreach',
                component:(resolve) => require(['./components/sreachcomponent/sreach.vue'], resolve)
            },
            {
                path:'redact',
                component:(resolve) => require(['./components/redactcomponent/redact.vue'], resolve)
            },

        ]
    }
];
export default routers;