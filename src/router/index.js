import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetups from '@/components/Meetup/CreateMeetups'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Test2 from '@/components/Text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetups',
      component: CreateMeetups
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/test',
      name: 'test',
      component: Test2
    }
  ],
  mode: 'history'
})
