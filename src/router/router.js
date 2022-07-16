import { createRouter, createWebHashHistory  } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: 'default',
        },
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/index.vue")
    },
    {
        path: '/nProduct',
        name: 'NewProduct',
        meta: {
            layout: 'default',
        },
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/addProduct.vue")
    },
    {
        path: '/orders',
        name: 'Order',
        meta: {
            layout: 'default',
        },
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/order.vue")
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'auth'
        },
        component: () =>
        import(/* webpackChunkName: "register" */ "../views/register.vue")
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'auth'
        },
        component: () =>
        import(/* webpackChunkName: "login" */ "../views/login.vue")
    },
    {
        path: '/user',
        name: 'User',
        meta: {
            layout: 'default'
        },
        component: () =>
        import(/* webpackChunkName: "login" */ "../views/user.vue")
    },
    {
        path: '/admin',
        name: 'Admin',
        meta: {
            layout: 'default'
        },
        component: () =>
        import(/* webpackChunkName: "login" */ "../views/admin.vue")
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;