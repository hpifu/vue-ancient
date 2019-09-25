import api from '../api/api'

const state = {
    query: "",
    offset: 0,
    limit: 20,
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
    },
    appendAncients(state, as) {
        state.ancients.push(...as);
    }
}

const actions = {
    search({ commit, state }) {
        api.search({
            query: state.query,
            limit: state.limit,
            offset: state.offset,
        }, res => {
            if (res.status == 204) {
                // nothing to do
            }
            if (res.status == 200) {
                commit("setAncients", res.data);
            }
        }, err => {
            console.log(err);
        })
    },
    loadMore({ commit, state }, callback) {
        commit("setOffset", state.offset + state.limit);
        api.search({
            query: state.query,
            limit: state.limit,
            offset: state.offset,
        }, res => {
            if (res.status == 204) {
                // nothing to do
            }
            if (res.status == 200) {
                commit("appendAncients", res.data);
            }
            callback()
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
