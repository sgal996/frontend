const types = {
    GET_PRODUCTS: "shop/GET_PRODUCTS",
    GET_PRODUCTS_SUCCESS: "shop/GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAILURE: "shop/GET_PRODUCTS_FAILURE",
    ADD_TO_CART: "shop/ADD_TO_CART",
    GET_ORDERS: "shop/GET_ORDERS",
    GET_ORDERS_SUCCESS: "shop/GET_ORDERS_SUCCESS",
    GET_ORDERS_FAILURE: "shop/GET_ORDERS_FAILURE",

    ADD_PRODUCT: "shop/ADD_PRODUCT",
    ADD_PRODUCT_SUCCESS: "shop/ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_FAILURE: "shop/ADD_PRODUCT_FAILURE",

    DELETE_PRODUCT: "shop/DELETE_PRODUCT",
    DELETE_PRODUCT_SUCCESS: "shop/DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAILURE: "shop/DELETE_PRODUCT_FAILURE"
};

const actions = {
    getProducts: () => ({type: types.GET_PRODUCTS}),
    getProductsSuccess: (products) => ({type: types.GET_PRODUCTS_SUCCESS, payload: products}),
    getProductsFailure: (error) => ({type: types.GET_PRODUCTS_FAILURE, error: error}),


    getOrders: () => ({type: types.GET_ORDERS}),
    getOrdersSuccess: (orders) => ({type: types.GET_ORDERS_SUCCESS, payload: orders}),
    getOrdersFailure: (error) => ({type: types.GET_ORDERS_FAILURE, error: error}),

    addProduct: () => ({type: types.ADD_PRODUCT}),
    addProductSuccess: (product) => ({type: types.ADD_PRODUCT_SUCCESS, payload: product}),
    addProductFailure: (error) => ({type: types.ADD_PRODUCT_FAILURE, error: error}),

    deleteProduct: () => ({type: types.DELETE_PRODUCT}),
    deleteProductSuccess: (message) => ({type: types.DELETE_PRODUCT_SUCCESS, payload: message}),
    deleteProductFailure: (error) => ({type: types.DELETE_PRODUCT_FAILURE, error: error}),



}
const initialState = () => (
    {
        loading: false,
        products: [],
        error: null,
        orders: [],
        message: null

    }
)

const shop = (state = initialState(), action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                error: action.error
            };

        case types.GET_ORDERS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case types.GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case types.ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case types.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case types.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case types.DELETE_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case types.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case types.DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;

    }
}
export {actions as shopActions}

export default shop;