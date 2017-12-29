import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { uniqueId } from 'lodash'

Vue.use(Vuex)

const state = {
  count: 0,
  questions: []
}

const mutations = {
  SET_QUESTIONS: (state, { questions }) => {
    console.log(questions)
    state.questions = questions
  }
}

const actions = {
  LOAD_QUESTIONS: function ({ commit }) {
    axios.get(`https://opentdb.com/api.php?amount=10`).then(response => {
      commit('SET_QUESTIONS', {
        questions: response.data.results.map(question => {
          question.id = uniqueId()
          return question
        })
      })
    }, err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
