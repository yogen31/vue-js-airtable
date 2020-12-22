import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/airtable/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Navbar
    }
  ]
})
