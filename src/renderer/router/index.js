import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'home', component: ()=> import('@/view//home')},
        {path: '/suspension', name: 'suspension', component: ()=> import('@/view/components/suspension')}
    ]
})
