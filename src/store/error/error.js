const state = () => ({
  error: null
});

const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  }
};

export default {
  namespaced: true,
  state,
  mutations
}
