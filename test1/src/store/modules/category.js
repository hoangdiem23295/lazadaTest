import Vue from 'vue'
import Vuex from 'vuex'
import { includes } from 'lodash'
import axiosService from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoriesList: []
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: {
    setCategoriesList (state, list) {
      if (includes(state.list), list) {
        return state.list
      }
      state.list = [...state.list, ...list]
    }
  },
  actions: {
    async getCategoryList ({ commit }, payload) {
      try {
        const result = await axiosService.get('category', data)
        if (result) {
          console.log('===>>>', result)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
})