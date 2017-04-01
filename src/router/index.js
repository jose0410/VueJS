import Vue from 'vue'
import Router from 'vue-router'
import Inbox from '@/components/Inbox'
import Archive from '@/components/Archive'
import emailSent from '@/components/emailSent'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Inbox
    },

    {
      path: '/archive',
      component: Archive
    },

    {
      path: '/emailSent',
      component: emailSent
    }
  ]
})
