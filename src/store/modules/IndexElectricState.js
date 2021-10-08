import {INDEX_ELECTRICITY} from "../../ultils/constants"
import callApi from "../../fetchAPIs/callAPIs"

const {
    GET_INDEX_ELECTRICITY_REQUEST,
    GET_INDEX_ELECTRICITY_SUCCESS,
    GET_INDEX_ELECTRICITY_FAILURE
} = INDEX_ELECTRICITY

const state = {
    listData: [],
    isFetching: false,
    error: null,
    notification: false,
}

const mutations = {
    GET_INDEX_ELECTRICITY_REQUEST: (state) => {
        state.isFetching = true
    },
    GET_INDEX_ELECTRICITY_SUCCESS: (state, payload) => {
        state.isFetching = false;
        state.listData = payload;
    },
    GET_INDEX_ELECTRICITY_FAILURE: (state, payload) => {
        state.isFetching = false;
        state.error = payload;
    },
}

const actions = {
    async getRequest({commit}) {
        commit(GET_INDEX_ELECTRICITY_REQUEST);
        const getAPi = await callApi({method: "GET", url: '/customer', body: ''});
        if (getAPi.error) {
            return commit(GET_INDEX_ELECTRICITY_FAILURE, getAPi.error);
        }
        setTimeout(() => commit(GET_INDEX_ELECTRICITY_SUCCESS, getAPi.data), 2000)
    }
}

const getter = {

}

export default {
    state,
    mutations,
    actions,
    getter
}
