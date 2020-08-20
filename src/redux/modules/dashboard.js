    const types = {
    GET_CURRENT_USER: "dashboard/GET_CURRENT_USER",
    GET_CURRENT_USER_SUCCESS: "dashboard/GET_CURRENT_USER_SUCCESS",
    GET_CURRENT_USER_FAILURE: "dashboard/GET_CURRENT_USER_FAILURE"
};

const actions = {
    getCurrentUser: () => ({type: types.GET_CURRENT_USER}),
    getCurrentUserSuccess: (user) => ({type: types.GET_CURRENT_USER_SUCCESS, payload: user}),
    getCurrentUserFailure: (error) => ({type: types.GET_CURRENT_USER_FAILURE, error: error})
};

const initialState = () => ({
    loading: false,
    user: null
});

const dashboard = (state = initialState(), action) => {
    switch (action.type) {
        case types.GET_CURRENT_USER:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case types.GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export {
    actions as dashboardActions
}

export default dashboard;