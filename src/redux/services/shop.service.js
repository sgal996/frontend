import {serverCall} from "./backendCall";
import {shopActions} from "../modules/shop";

const dat = {id: 4}

const getMenProducts = (x) => dispatch => {
    dispatch(shopActions.getMenProducts());


    return serverCall({
        method: 'GET',
        url: '/products/getbyid',
        params: x

    })
        .then(
            res => {
                dispatch(shopActions.getMenProductsSuccess(res.data))
            }
        ).catch(error => {
            dispatch(shopActions.getMenProductsFailure(error))
        })


};
const addToCart = (product)=> {
    return  function  (dispatch){
        dispatch(shopActions.addToCart(product))
    }
}

export {
    getMenProducts
}