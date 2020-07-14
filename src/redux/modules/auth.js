const types = {
    LOGIN: 'auth/LOGIN',
    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
    LOGOUT: 'auth/LOGOUT',
    REGISTER: 'auth/REGISTER',
    REGISTER_SUCCESS: 'auth/REGISTER_SUCCESS',
    REGISTER_FAILURE: 'auth/REGISTER_FAILURE',
    ADD_TO_CART: 'auth/ADD_TO_CART',
    EMPTY_CART: 'auth/EMPTY_CART',
    CHANGE_INFO: 'auth/CHANGE_INFO',
    CHANGE_INFO_SUCCESS: 'auth/CHANGE_INFO_SUCCESS',
    CHANGE_INFO_FAILURE: 'auth/CHANGE_INFO_FAILURE',
    GET_USER_INFO: "auth/GET_USER_INFO",
    GET_USER_INFO_SUCCESS: "auth/GET_USER_INFO_SUCCESS",
    GET_USER_INFO_FAILURE: "auth/GET_USER_INFO_FAILURE",

};

const actions = {
    login: () => ({type: types.LOGIN}),
    loginSuccess: (user) => ({type: types.LOGIN_SUCCESS, payload: user}),
    loginFailure: (error) => ({type: types.LOGIN_FAILURE, error: error}),
    logout: () => ({type: types.LOGOUT}),
    register: () => ({type: types.REGISTER}),
    registerSuccess: (user) => ({type: types.REGISTER_SUCCESS, payload: user}),
    registerFailure: (error) => ({type: types.REGISTER_FAILURE, payload: error}),
    addToCart: (product) => ({type: types.ADD_TO_CART, payload: product}),
    emptyCart: () => ({type: types.EMPTY_CART}),
    changeInfo: () => ({type: types.CHANGE_INFO}),
    changeInfoSuccess: (user) => ({type: types.CHANGE_INFO_SUCCESS, payload: user}),
    changeInfoFailure: (error) => ({type: types.CHANGE_INFO_FAILURE, error: error}),
    getUserInfo: () => ({type: types.GET_USER_INFO}),
    getUserInfoSuccess: (userInfo) => ({type: types.GET_USER_INFO_SUCCESS, payload: userInfo}),
    getUserInfoFailure: (error) => ({type: types.GET_USER_INFO_SUCCESS, error: error}),


}

const initialState = () => ({

    loading: true,
    authenticated: false,
    registered: false,
    cart: [],
    userInfo: null,
    error: null
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
                registered: false
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
                error: null,
                user: null,
                userInfo: null,
                registered: false


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

        case types.ADD_TO_CART:


            return {
                ...state,
                cart: [...state.cart, action.payload],


            };
        case types.EMPTY_CART:
            return {
                ...state,
                cart: []
            }
        case types.CHANGE_INFO:
            return {
                ...state,
                loading: true,

            }
        case types.CHANGE_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case types.CHANGE_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.GET_USER_INFO:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case types.GET_USER_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;

    }
}

export {
    actions as authActions
};

export default auth;