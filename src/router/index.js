import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
 import lists from '@/views/lists/lists'
import commint from '@/views/commint/commint'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/hot/',
  
  routes: [
    // { path: '*', component: NotFoundComponent },
    {
      path: '/',
      name: 'lists',
      component: lists,
      
    },
    {
      path: '/commint',
      name: 'commint',
      component: commint
    }
  ]
})
