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
    GET_SUBCATEGORIES: "auth/GET_SUBCATEGORIES",
    GET_SUBCATEGORIES_SUCCESS: "auth/GET_SUBCATEGORIES_SUCCESS",
    GET_SUBCATEGORIES_FAILURE: "auth/GET_SUBCATEGORIES_FAILURE",
    ADD_SUBCATEGORIES: "auth/ADD_SUBCATEGORIES",
    ADD_SUBCATEGORIES_SUCCESS: "auth/ADD_SUBCATEGORIES_SUCCESS",
    ADD_SUBCATEGORIES_FAILURE: "auth/ADD_SUBCATEGORIES_FAILURE",
    GET_ALL_USERS: "auth/GET_ALL_USERS",
    GET_ALL_USERS_SUCCESS: "auth/GET_ALL_USERS_SUCCESS",
    GET_ALL_USERS_FAILURE: "auth/GET_ALL_USERS_FAILURE",
    DEACTIVATE_USER: "auth/DEACTIVATE_USER",
    DEACTIVATE_USER_SUCCESS: "auth/DEACTIVATE_USER_SUCCESS",
    DEACTIVATE_USER_FAILURE: "auth/DEACTIVATE_USER_FAILURE",

    ORDER_DELIVERED: "auth/ORDER_DELIVERED",
    ORDER_DELIVERED_SUCCESS: "auth/ORDER_DELIVERED_SUCCESS",
    ORDER_DELIVERED_FAILURE: "auth/ORDER_DELIVERED_FAILURE",

    ORDER_CANCELED: "auth/ORDER_CANCELED",
    ORDER_CANCELED_SUCCESS: "auth/ORDER_CANCELED_SUCCESS",
    ORDER_CANCELED_FAILURE: "auth/ORDER_CANCELED_FAILURE",

    DELETE_SUBCATEGORY: "auth/DELETE_SUBCATEGORY",
    DELETE_SUBCATEGORY_SUCCESS: "auth/DELETE_SUBCATEGORY_SUCCESS",
    DELETE_SUBCATEGORY_FAILURE: "auth/DELETE_SUBCATEGORY_FAILURE",

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
    order: () => ({type: types.ORDER}),
    orderSuccess: (message) => ({type: types.ORDER_SUCCESS, payload: message}),
    orderFailure: (error) => ({type: types.ORDER_FAILURE, error: error}),
    orderConfirm: () => ({type: types.ORDER_CONFIRM}),
    orderConfirmSuccess: (message) => ({type: types.ORDER_CONFIRM_SUCCESS, payload: message}),
    orderConfirmFailure: (error) => ({type: types.ORDER_CONFIRM_FAILURE, error: error}),
    getSubcategories: () => ({type: types.GET_SUBCATEGORIES}),
    getSubcategoriesSuccess: (data) => ({type: types.GET_SUBCATEGORIES_SUCCESS, payload: data}),
    getSubcategoriesFailure: (error) => ({type: types.GET_SUBCATEGORIES_FAILURE, error: error}),
    addSubcategories: () => ({type: types.ADD_SUBCATEGORIES}),
    addSubcategoriesSuccess: (data) => ({type: types.ADD_SUBCATEGORIES_SUCCESS, payload: data}),
    addSubcategoriesFailure: (error) => ({type: types.ADD_SUBCATEGORIES_FAILURE, error: error}),
    getAllUsers: () => ({type: types.GET_ALL_USERS}),
    getAllUsersSuccess: (data) => ({type: types.GET_ALL_USERS_SUCCESS, payload: data}),
    getAllUsersFailure: (error) => ({type: types.GET_ALL_USERS_FAILURE, payload: error}),
    deactivateUser: () => ({type: types.DEACTIVATE_USER}),
    deactivateUserSuccess: (user) => ({type: types.DEACTIVATE_USER_SUCCESS, payload: user}),
    deactivateUserFailure: (error) => ({type: types.DEACTIVATE_USER_FAILURE, payload: error}),
    orderDelivered: () => ({type: types.ORDER_DELIVERED}),
    orderDeliveredSuccess: (data) => ({type: types.ORDER_DELIVERED_SUCCESS, payload: data}),
    orderDeliveredFailure: (error) => ({type: types.ORDER_DELIVERED_FAILURE, payload: error}),
    orderCanceled: () => ({type: types.ORDER_CANCELED}),
    orderCanceledSuccess: (data) => ({type: types.ORDER_CANCELED_SUCCESS, payload: data}),
    orderCanceledFailure: (error) => ({type: types.ORDER_CANCELED_FAILURE, payload: error}),
    deleteSubcategory: () => ({type: types.DELETE_SUBCATEGORY}),
    deleteSubcategorySuccess: (message) => ({type: types.DELETE_SUBCATEGORY_SUCCESS, payload: message}),
    deleteSubcategoryFailure: (error) => ({type: types.DELETE_SUBCATEGORY_FAILURE, error: error})


}


const initialState = () => ({

    loading: false,
    authenticated: false,
    registered: false,
    cart: [],
    userInfo: null,
    error: null,
    quantity: [{}],
    orderMessage: "",
    orderConfirmedMessage: "",
    subcategories: [],
    user: {roles: []},
    allUsers: null
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
                user: {roles: []}


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
                    state.cart.splice(i, 1)
                }
            }
            editedCart = state.cart;
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
        case types.GET_SUBCATEGORIES:
            return {
                ...state,
                loading: true
            }
        case types.GET_SUBCATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                subcategories: action.payload
            }
        case types.GET_SUBCATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.ADD_SUBCATEGORIES:
            return {
                ...state,
                loading: true,

            }
        case types.ADD_SUBCATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                subcategories: [...state.subcategories, {...action.payload}]
            }
        case types.ADD_SUBCATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.GET_ALL_USERS:
            return {
                ...state,
                loading: true
            }
        case types.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                allUsers: action.payload
            }
        case types.GET_ALL_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.DEACTIVATE_USER:
            return {
                ...state,
                loading: true
            }
        case types.DEACTIVATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case types.DEACTIVATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case types.ORDER_DELIVERED:
            return {
                ...state,
                loading: true
            }
        case types.ORDER_DELIVERED_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case types.ORDER_DELIVERED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.ORDER_CANCELED:
            return {
                ...state,
                loading: true
            }
        case types.ORDER_CANCELED_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.ORDER_CANCELED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case types.DELETE_SUBCATEGORY:
            return {
                ...state,
                loading: true
            }
        case types.DELETE_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                subcategoryMessage: action.payload
            }
        case types.DELETE_SUBCATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
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
    actions as authActions,


};

export default auth;