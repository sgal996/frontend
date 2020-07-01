const types = {
    GET_MEN_PRODUCTS: "shop/GET_MEN_PRODUCTS",
    GET_MEN_PRODUCTS_SUCCESS: "shop/GET_MEN_PRODUCTS_SUCCESS",
    GET_MEN_PRODUCTS_FAILURE: "shop/GET_MEN_PRODUCTS_FAILURE",
    GET_WOMEN_PRODUCTS: "shop/GET_WOMEN_PRODUCTS",
    GET_WOMEN_PRODUCTS_SUCCESS: "shop/GET_WOMEN_PRODUCTS_SUCCESS",
    GET_WOMEN_PRODUCTS_FAILURE: "shop/GET_WOMEN_PRODUCTS_FAILURE",
    GET_KIDS_PRODUCTS: "shop/GET_KIDS_PRODUCTS",
    GET_KIDS_PRODUCTS_SUCCESS: "shop/GET_KIDS_PRODUCTS_SUCCESS",
    GET_KIDS_PRODUCTS_FAILURE: "shop/GET_KIDS_PRODUCTS_FAILURE",
    ADD_TO_CART: "shop/ADD_TO_CART"
};

const actions = {
    getMenProducts: () => ({type: types.GET_MEN_PRODUCTS}),
    getMenProductsSuccess: (products) => ({type: types.GET_MEN_PRODUCTS_SUCCESS, payload: products}),
    getMenProductsFailure: (error) => ({type: types.GET_MEN_PRODUCTS_FAILURE, error: error}),
    getWomenProducts: () => ({type: types.GET_WOMEN_PRODUCTS}),
    getWomenProductsSuccess: (products) => ({type: types.GET_WOMEN_PRODUCTS_SUCCESS, payload: products}),
    getWomenProductsFailure: (error) => ({type: types.GET_WOMEN_PRODUCTS_FAILURE, error: error}),
    getKidsProducts: () => ({type: types.GET_KIDS_PRODUCTS}),
    getKidsProductsSuccess: (products) => ({type: types.GET_KIDS_PRODUCTS, payload: products}),
    getKidsProductsFailure: (error) => ({type: types.GET_KIDS_PRODUCTS_FAILURE, error: error}),
    addToCart: (product) => ({type: types.ADD_TO_CART, payload: product})

}
const initialState = () => (
    {
        loading: false,
        products: [],
        error: null,
        cart: []
    }
)

const shop = (state = initialState(), action) => {
    switch (action.type) {
        case types.GET_MEN_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.GET_MEN_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case types.GET_MEN_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                error: action.error
            };
        case types.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload
            ]
            }
        default:
            return state;

    }
}
export {actions as shopActions}

export default shop;