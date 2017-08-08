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
        date: '2017-07-19',
        location: 'Khonkean',
        description: 'ขอนแก่น เย่ เย่'
      },
      {
        imageUrl: 'https://f.ptcdn.info/518/027/000/1421429743-1084884861-o.jpg',
        id: 'jjieekjbueo',
        title: 'Meetup in Maha Sarakham',
        date: '2017-07-17',
        location: 'Maha Sarakham',
        description: 'สารคาม เมืองตักศิลา'
      }
    ],
    user: {
      id: 'dfjsdsffhskdfdksfas',
      registerdMeetups: ['dfsdfsfsdsdfsd']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'jfkdjfdfjdlkc'
      }
      // Reach out to firebase and store
      commit('createMeetup', meetup)
    }
  },
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
