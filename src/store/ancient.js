import api from '../api/api'

const state = {
    query: "",
    offset: 0,
    limit: 20,
    ancients: [],
    done: false,
}

const mutations = {
    setQuery(state, value) {
        state.query = value;
    },
    setOffset(state, value) {
        state.offset = value;
    },
    setDone(state, value) {
        state.done = value;
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
                if (res.data.length != state.limit) {
                    commit("setDone", true);
                }
            }
        }, err => {
            console.log(err);
        })
    },
    loadMore({ commit, state }, callback) {
        commit("setOffset", state.offset + state.limit);
        if (state.Done) {
            return;
        }
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
                if (res.data.length != state.limit) {
                    commit("setDone", true);
                }
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
