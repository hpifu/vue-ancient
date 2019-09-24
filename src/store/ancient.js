import api from '../api/api'

const state = {
    query: "",
    offset: 0,
    ancients: [],
    index: 0
}

const mutations = {
    setQuery(state, value) {
        state.query = value;
    },
    setOffset(state, value) {
        state.offset = value;
    },
    setIndex(state, value) {
        state.index = value;
    },
    setAncients(state, value) {
        state.ancients = value;
    }
}

const actions = {
    search({ commit, state }) {
        console.log(state.query)
        api.search({
            query: state.query,
            limit: 20,
            offset: state.offset,
        }, res => {
            console.log(res);
            if (res.status == 204) {
                // nothing to do
            }
            if (res.status == 200) {
                commit("setAncients", res.data)
                this.ancients = res.data;
            }
        }, err => {
            console.log(err);
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
