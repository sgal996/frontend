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
    QTY_UP: "auth/QTY_UP",
    QTY_DOWN: "auth/QTY_DOWN",
    REMOVE_FROM_CART: "auth/REMOVE_FROM_CART",
    ORDER: "auth/ORDER",
    ORDER_SUCCESS: "auth/ORDER_SUCCESS",
    ORDER_FAILURE: "auth/ORDER_FAILURE",
    ORDER_CONFIRM: "auth/ORDER_CONFIRM",
    ORDER_CONFIRM_SUCCESS: "auth/ORDER_CONFIRM_SUCCESS",
    ORDER_CONFIRM_FAILURE: "auth/ORDER_CONFIRM_FAILURE",

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
    qtyUp: (id) => ({type: types.QTY_UP, payload: id}),
    qtyDown: (id) => ({type: types.QTY_DOWN, payload: id}),
    removeFromCart: (id) => ({type: types.REMOVE_FROM_CART, payload: id}),
    order: () => ({type:types.ORDER}),
    orderSuccess: (message) => ({type: types.ORDER_SUCCESS, payload:message}),
    orderFailure: (error) => ({type: types.ORDER_FAILURE, error:error}),
    orderConfirm: () => ({type:types.ORDER_CONFIRM}),
    orderConfirmSuccess: (message) => ({type:types.ORDER_CONFIRM_SUCCESS, payload:message}),
    orderConfirmFailure: (error) => ({type:types.ORDER_CONFIRM_FAILURE, error: error}),





}

const initialState = () => ({

    loading: true,
    authenticated: false,
    registered: false,
    cart: [],
    userInfo: null,
    error: null,
    quantity: [{}],
    orderMessage: "",
    orderConfirmedMessage: ""
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
                loading: true,
                authenticated: false,
                registered: false,
                cart: [],
                userInfo: null,
                error: null,
                orderMessage: "",
                user: {}


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


            if (state.cart.length === 0) {
                console.log("length = 1")

                return {
                    ...state,
                    cart: [{...action.payload, quantity: 1}]

                }
            }
            if (isExist(action.payload, state.cart) === false) {
                console.log(action.payload)
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity: 1}]
                }
            }
            console.log("ima ih")

            const position = isExist(action.payload, state.cart);
            let item = state.cart[position];
            item.quantity += 1;
            state.cart[position] = item;
            const newCart = state.cart;
            console.log(newCart);
            return {
                ...state,
                cart: newCart

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
        case types.QTY_UP:
            console.log(action.payload)
            let qtyUpCart = [];
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.payload) {
                    state.cart[i].quantity += 1
                }
                qtyUpCart = state.cart;

            }
            return {
                ...state,
                cart: qtyUpCart
            }
        case types.QTY_DOWN:
            let qtyDownCart = [];
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.payload) {
                    state.cart[i].quantity -= 1
                }
                qtyDownCart = state.cart;

            }
            return {
                ...state,
                cart: qtyDownCart
            }
        case types.REMOVE_FROM_CART:
            let editedCart = [];
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.payload) {
                    state.cart.splice(i,1)
                }
            }
            editedCart=state.cart;
            return {
                ...state,
                cart: editedCart
            }

        case types.ORDER:
            return {
                ...state,
                loading: true
            }
        case types.ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orderMessage: action.payload
            }
        case types.ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.ORDER_CONFIRM:
            return {
                ...state,
                loading: true
            }
        case types.ORDER_CONFIRM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.ORDER_CONFIRM_SUCCESS:
            return {
                ...state,
                loading: false,
                orderConfirmedMessage: action.payload
            }
        default:
            return state;

    }
}

function isExist(product, cart) {

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id && cart[i].size === product.size) {
            return i;
        }
    }
    return false;
}


export {
    actions as authActions
};

export default auth;