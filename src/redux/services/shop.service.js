import {serverCall} from "./backendCall";
import {shopActions} from "../modules/shop";

const dat = {id: 4}

const getProducts = () => dispatch => {
    dispatch(shopActions.getProducts());
    return serverCall({
        method: 'GET',
        url: '/products/all',
    })
        .then(
            res => {
                dispatch(shopActions.getProductsSuccess(res.data))
            }
        ).catch(error => {
            dispatch(shopActions.getProductsFailure(error))
        })

};


const getOrders = () => dispatch =>{
    dispatch(shopActions.getOrders());
    return serverCall({
        method: 'GET',
        url: '/orders/getorders'
    }).then(res => {
        dispatch(shopActions.getOrdersSuccess(res.data))
    }).catch(error =>{
        dispatch(shopActions.getOrdersFailure(error))
    } )
}



const addProduct = (product) =>dispatch =>{
    dispatch(shopActions.addProduct());
    return serverCall({
        method:'POST',
        url: '/admin/add',
        data: product
    }
    ).then(res=>{
        dispatch(shopActions.addProductSuccess(res.data))
        dispatch(getProducts())
    }).catch(error=>{
        dispatch(shopActions.addProductFailure(error))
    })
}

const deleteProduct = (product) => dispatch =>{
    dispatch(shopActions.deleteProduct());
    return serverCall({
        method: 'POST',
        url: 'products/deleteproduct',
        data: product
    }).then(res=>{
        dispatch(shopActions.deleteProductSuccess(res.data))
        dispatch(getProducts())

        }
    ).catch(error=>{
        dispatch(shopActions.deleteProductFailure(error))
    })
}

export {
    getProducts,
    getOrders,

    addProduct,
    deleteProduct
}