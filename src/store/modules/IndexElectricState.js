import {INDEX_ELECTRICITY, NOTIFICATION, SETUP_TIME_TO_CALL_ACTION} from "../../ultils/constants"
import callApi from "../../fetchAPIs/callAPIs"

const {
    GET_INDEX_ELECTRICITY_REQUEST,
    GET_INDEX_ELECTRICITY_SUCCESS,
    GET_INDEX_ELECTRICITY_FAILURE
} = INDEX_ELECTRICITY;

const {
    GET_NOTIFY_REQUEST,
    GET_NOTIFY_SUCCESS,
    // GET_NOTIFY_FAILURE,
    TURN_OFF_NOTIFY
} = NOTIFICATION

const {
    UPDATE_TIME_TO_CALL_REQUEST,
    UPDATE_TIME_TO_CALL_SUCCESS
} = SETUP_TIME_TO_CALL_ACTION
const state = {
    listData: [],
    isFetching: false,
    error: null,
    notification: {
        status: false,
        message: '',
        data: []
    },
    timeSetting: {
        callData: 0, // equal 30 minutes
        callNotify: 0,
        adjustment: false
    }
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

    //NOTIFICATION
    GET_NOTIFY_REQUEST: (state) => {
        state.notification.status = false
    },
    TURN_OFF_NOTIFY: (state) => {
        state.notification.status = false
        state.notification.message = 'CLOSE_NOTIFICATION'
    },
    GET_NOTIFY_SUCCESS: (state) => {
        state.notification.status = true
    },
    GET_NOTIFY_FAILURE: (state) => {
        state.notification.status = false
    },

    //UPDATE TIME TO CALL REQUEST
    UPDATE_TIME_TO_CALL_REQUEST: (state, payload) => {
        state.timeSetting.callData = payload.timeCallData;
        state.timeSetting.callNotify = payload.timeCallNotify;
        state.timeSetting.adjustment = true;
    },
    UPDATE_TIME_TO_CALL_SUCCESS: (state) => {
        state.timeSetting.adjustment = false
    }
}

const actions = {
    async getIdxElectricRequest({commit}) {
        commit(GET_INDEX_ELECTRICITY_REQUEST);
        const getAPi = await callApi({
                method: "GET",
                url: '/customer',
            }
        );
        if (getAPi.error) {
            return commit(GET_INDEX_ELECTRICITY_FAILURE, getAPi.error);
        }
        setTimeout(() => commit(GET_INDEX_ELECTRICITY_SUCCESS, getAPi.data), 2000)
    },

    //Notification
    getNotifyRequest({commit}) {
        commit(GET_NOTIFY_REQUEST);
        setTimeout(() => commit(GET_NOTIFY_SUCCESS), 2000)
    },
    turnOffNotify({commit}) {
        commit(TURN_OFF_NOTIFY);
    },

    //Set time out
    updateTimeRequest({commit}, payload) {
        commit(UPDATE_TIME_TO_CALL_REQUEST, payload);
    },

    updateTimeSuccess({commit}){
        commit(UPDATE_TIME_TO_CALL_SUCCESS);
    }
    //
}

const getter = {}

export default {
    state,
    mutations,
    actions,
    getter
}
