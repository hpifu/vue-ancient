import api from '../api/api'

const state = {
    author: "",
    offset: 0,
    ancients: [],
    index: 0
}

const mutations = {
    setAuthor(state, value) {
        state.author = value;
    },
    setOffset(state, value) {
        state.offset = value;
    },
    setIndex(state, value) {
        state.index = value;
    },
    ancients(state, value) {
        state.ancients = value;
    }
}

const actions = {
    async currAncient({ state }) {
        if (!state.ancients || state.index >= state.ancients.length) {
            state.index = 0;
            state.offset += state.ancients.length;
            if (state.author) {
                const res = await api.author(state.author, state.offset, 20)
                state.ancients = res.data
            } else {
                const res = await api.ancients(state.offset, 20)
                state.ancients = res.data
            }
        }
        if (state.index < 0) {
            state.index = 19;
            state.offset -= 20;
            if (state.offset < 0) {
                state.offset = 0;
                state.index = 0;
            }
            if (state.author) {
                const res = await api.author(state.author, state.offset, 20)
                state.ancients = res.data
            } else {
                const res = await api.ancients(state.offset, 20)
                state.ancients = res.data
            }
        }
        const res = await api.ancient(state.ancients[state.index].id);
        return res.data;
    },
    async nextAncient({ state }) {
        state.index++;
    },
    async prevAncient({ state }) {
        state.index--;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
