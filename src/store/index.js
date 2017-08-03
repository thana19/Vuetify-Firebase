import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://www.teawtourthai.com/accommodation-photo/Aug04171230Wd1.jpg',
        id: 'fdfdfdnfjsssj',
        title: 'Meetup in Khonkean',
        date: '2017-07-19'
      },
      {
        imageUrl: 'https://f.ptcdn.info/518/027/000/1421429743-1084884861-o.jpg',
        id: 'jjieekjbueo',
        title: 'Meetup in Maha Sarakham',
        date: '2017-07-17'
      }
    ],
    user: {
      id: 'dfjsdsffhskdfdksfas',
      registerdMeetups: ['dfsdfsfsdsdfsd']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featureMeetups (state, getters) {
      return getters.loadedMeetups.slice(0.5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
