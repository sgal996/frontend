import {authActions} from "../modules/auth";
import {serverCall} from './backendCall';
import {shopActions} from "../modules/shop";
import {getOrders} from "./shop.service"
import {cartCalc} from "../modules/auth";


const APP_PATH = 'http://localhost:3000'

const login = (request) => dispatch => {
    dispatch(authActions.login());


    return serverCall({
        method: 'POST',
        url: '/auth/login',
        data: request
    })
        .then(res => {
            localStorage.setItem('auth', JSON.stringify(res.data));
            dispatch(authActions.loginSuccess(res.data));
            dispatch(getSubcategories());
            dispatch(getAllUsers());


        })
        .catch(error => {
            dispatch(authActions.loginFailure(error));
        })

};
const addToCart = (product) => dispatch => {

    dispatch(authActions.addToCart(product))

}

const logout = () => dispatch => {
    dispatch(authActions.logout());
    localStorage.removeItem('auth');

};

const register = (request) => dispatch => {
    dispatch(authActions.register());
    return serverCall({
        method: 'POST',
        url: '/auth/register',
        data: request
    })
        .then(res => {
            dispatch(authActions.registerSuccess(res.data));
        })
        .catch(error => {
            dispatch(authActions.registerFailure(error));
        })
};
const emptyCart = () => dispatch => {
    return dispatch(authActions.emptyCart());
}
const changeInfo = (info) => dispatch => {
    dispatch(authActions.changeInfo())
    return serverCall({
        method: 'PUT',
        url: '/user/updateinfo',
        data: info
    }).then(res => {
        dispatch(authActions.changeInfoSuccess(res.data))
        dispatch(getUserInfo())
    })
        .catch(error => {
            dispatch(authActions.changeInfoFailure(error))
        })
}
const getUserInfo = () => dispatch => {
    dispatch(authActions.getUserInfo());
    return serverCall({
        method: 'GET',
        url: '/user/myinfo'
    }).then(res => {
        dispatch(authActions.getUserInfoSuccess(res.data))
    }).catch(error => {
        dispatch(authActions.getUserInfoFailure(error))
    })
}

const qtyUp = (id) => dispatch => {

    dispatch(authActions.qtyUp(id))

}
const qtyDown = (id) => dispatch => {
    dispatch(authActions.qtyDown(id))
}


const removeFromCart = (id) => dispatch => {
    dispatch(authActions.removeFromCart(id));
}

const order = (data) => dispatch => {
    dispatch(authActions.order());
    return serverCall({
        method: "POST",
        url: "/orders/saveorder",
        data: data
    }).then(res => {
        dispatch(authActions.orderSuccess(res.data))
        dispatch(getOrders())
        dispatch(emptyCart())
    }).catch(error => {
        dispatch(authActions.orderFailure(error))
    })

}

const confirmOrder = (orderId) => dispatch => {
    dispatch(authActions.orderConfirm())
    return serverCall({
        method: "POST",
        url: "/orders/confirmorder",
        data: orderId
    }).then(res => {
        dispatch(authActions.orderConfirmSuccess(res.data))
        dispatch(getOrders());
    }).catch(error => {
        dispatch(authActions.orderConfirmFailure(error))
    })

}

const getSubcategories = () => dispatch => {
    dispatch(authActions.getSubcategories())
    return serverCall({
        method: "GET",
        url: '/products/getsubcategories'
    }).then(res => {
            dispatch(authActions.getSubcategoriesSuccess(res.data))
        }
    ).catch(error => {
            dispatch(authActions.getSubcategoriesFailure(error))
        }
    )
}

const addSubcategory = (string) => dispatch => {
    dispatch(authActions.addSubcategories());

    return serverCall({
        method: 'POST',
        url: '/products/addsubcategory',
        data: string
    }).then(res => {
            dispatch(authActions.addSubcategoriesSuccess(res.data))
        }
    ).catch(error => {
            dispatch(authActions.addSubcategoriesFailure(error))
        }
    )
}



const getAllUsers = () => dispatch =>{
    dispatch(authActions.getAllUsers())
    return serverCall({
        method: 'GET',
        url: '/admin/allusers'
    }).then(res=>{
        dispatch(authActions.getAllUsersSuccess(res.data))


    }).catch(error =>{
        dispatch(authActions.getAllUsersFailure(error))

    })
}

const deactivateUser = (data) => dispatch =>{

    dispatch(authActions.deactivateUser())
    return serverCall({
        method: 'PUT',
        url: '/auth/activestatus',
        data: data
    }).then(res=>{
        dispatch(authActions.deactivateUserSuccess(res.data))
        dispatch(getAllUsers())

    }).catch(error =>{
        dispatch(authActions.deactivateUserFailure(error))
    })
}

const orderDelivered = (data) => dispatch =>{
    dispatch(authActions.orderDelivered())
    return serverCall({
        method: 'PUT',
        url: '/orders/delivered',
        data: data
    }).then(res =>{
        dispatch(authActions.orderDeliveredSuccess(res.data))
        dispatch(getOrders())
        }

    ).catch(error => {
        dispatch(authActions.orderDeliveredFailure(error))
    })

}


const orderCanceled = (data) => dispatch =>{
    dispatch(authActions.orderCanceled())
    return serverCall({
        method: 'PUT',
        url: '/orders/cancel',
        data: data
    }).then(res =>{
            dispatch(authActions.orderCanceledSuccess(res.data))
            dispatch(getOrders())
        }

    ).catch(error => {
        dispatch(authActions.orderCanceledFailure(error))
    })

}

const deleteSubcategory = (string) => dispatch =>{
    dispatch(authActions.deleteSubcategory())
    return serverCall({
        method: 'POST',
        url: '/products/deletesubcategory',
        data: string
    }).then(res => {
        dispatch(authActions.deleteSubcategorySuccess(res.data))
        dispatch(getSubcategories())

    }).catch(error => {
        dispatch(authActions.deleteSubcategoryFailure(error))

    })
}

export {
    login,
    logout,
    register,
    addToCart,
    emptyCart,
    changeInfo,
    getUserInfo,
    qtyUp,
    qtyDown,
    removeFromCart,
    order,
    confirmOrder,
    addSubcategory,
    getSubcategories,
    getAllUsers,
    deactivateUser,
    orderDelivered,
    orderCanceled,
    deleteSubcategory
}