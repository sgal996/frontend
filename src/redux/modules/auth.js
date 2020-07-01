const types = {
    LOGIN: 'auth/LOGIN',
    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
    LOGOUT: 'auth/LOGOUT',
    REGISTER: 'auth/REGISTER',
    REGISTER_SUCCESS: 'auth/REGISTER_SUCCESS',
    REGISTER_FAILURE: 'auth/REGISTER_FAILURE'

};

const actions = {
    login: () => ({type: types.LOGIN}),
    loginSuccess: (user) => ({type: types.LOGIN_SUCCESS, payload: user}),
    loginFailure: (error) => ({type: types.LOGIN_FAILURE, error: error}),
    logout: () => ({type: types.LOGOUT}),
    register: () => ({type: types.REGISTER}),
    registerSuccess: (user) => ({type: types.REGISTER_SUCCESS, payload: user}),
    registerFailure: (error) => ({type: types.REGISTER_FAILURE, payload: error})
}

const initialState = () => ({

    loading: true,
    authenticated: false,
    registered: false
});

const auth = (state = initialState(), action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                loading: true,
                error: null,
                authenticated: false
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                authenticated: true,
                registered: true
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                authenticated: false
            };
        case types.LOGOUT:
            return {
                ...state,
                loading: false,
                authenticated: false,
                error: null

            }
        case types.REGISTER:
            return {
                ...state,
                loading: true,
                error: null,
                registered: false
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                registered: true
            }
        case types.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                registered: false
            }
        default:
            return state;

    }
}

export {
    actions as authActions
};

export default auth;