import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import Dashboard from '../views/Dashboard.vue';
// import store from '../store';

Vue.use(VueRouter);

const guest = (to, from, next) => {
    if (!localStorage.getItem('access_token')) {
        return next();
    } else {
        return next('/');
    }
};

const auth = (to, from, next) => {
    if (localStorage.getItem('access_token')) {
        return next();
    } else {
        return next('/signin');
    }
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
        beforeEnter: guest
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: auth
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
