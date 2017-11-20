import Vuex from 'vuex'
import wp from '~/lib/wp'

// Mutation Types
export const types = {
  SITE_DATA_UPDATE: 'SITE_DATA_UPDATE'
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      site_data: {}
    },
    mutations: {
      [types.SITE_DATA_UPDATE] (state, payload) {
        state.site_data = { ...payload }
      }
    },
    actions: {
      nuxtServerInit ({ commit }) {
        return wp.siteData()
          .then(res => {
            commit(types.SITE_DATA_UPDATE, res.site_data)
          })
      }
    }
  })
}

export default createStore
