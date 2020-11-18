export const state = () => ({
  projects: [],
})

export const mutations = {
  addProject(state, payload) {
    state.projects.push(payload)
  },
}

export const actions = {
  fetchFirebase({ commit }) {
    this.$fire.firestore
      .collection('projects')
      .orderBy('date', 'desc')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const data = doc.data()
          commit('addProject', {
            id: doc.id,
            ...data,
            date: data.date.toDate().toLocaleDateString(),
          })
        })
      })
  },
}

export const getters = {
  projects(state) {
    return state.projects
  },
}
