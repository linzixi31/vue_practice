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
                path:'user',
                component:(resolve) => require(['./components/usercomponent/user.vue'], resolve)
            },

        ]
    }
];
export default routers;