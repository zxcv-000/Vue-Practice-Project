const state = {
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ""
}

const getters = {
  getToken(state) {
    return state.Authorization
  }
}

const mutations = {
  changeToken(state, token) {
    state.Authorization = token;
    localStorage.setItem('Authorization', token);
  },
  deleteToken(state) {
    state.Authorization = "";
    localStorage.removeItem("Authorization")
  }
}

const actions = {
  changeToken(context, token) {
    context.commit('changeToken', token);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

