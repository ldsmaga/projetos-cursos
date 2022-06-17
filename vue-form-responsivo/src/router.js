import Vue from 'vue'
import Router from 'vue-router'
import Personal from './pages/Personal'
import Social from './pages/Social'
import Certificates from './pages/Certificates'
import Success from './pages/Success'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[{
        path: '/personal',
        component: Personal
    },
    {
        path: "/",
        redirect: "/personal",
    },{
        path: '/social',
        component: Social
    },{
        path: '/certificates',
        component: Certificates
    },{
        path: '/success',
        component: Success
    },
]
})