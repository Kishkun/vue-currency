import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import error from './error/error'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base: '',
    isLoading: false,
    rates: [
      {
        'EUR': 1,
        'USD': 1.09,
        'RUB': 91,
      },
      {
        'EUR': 1,
        'USD': 1.14,
        'RUB': 89,
      }
    ],
    dates: ['2020-12-01', '2020-12-02'],
    currentDate: '',
  },
  mutations: {
    SET_INFO(state, info) {
      state.base = info.base
      state.rates = [...state.rates, info.rates]
      state.dates = [...state.dates, info.date]
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    async GET_INFO({commit}) {
      commit('SET_LOADING', true);
      const key = process.env.VUE_APP_FIXER;
      try {
        const url = `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`;
        const res = await axios.get(url)
        if (res.data && res.data.success) {
          commit('SET_INFO', res.data)
        } else {
          throw (res.data.error)
        }
      } catch (e) {
        commit('error/SET_ERROR', e.type, {root: true})
      }
      commit('SET_LOADING', false);
    }
  },
  modules: {
    error
  }
})
