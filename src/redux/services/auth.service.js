import {authActions} from "../modules/auth";
import {serverCall} from './backendCall';
import {shopActions} from "../modules/shop";


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


        })
        .catch(error => {
            dispatch(authActions.loginFailure(error.response.data));
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
    })
        .catch(error => {
            dispatch(authActions.changeInfoFailure(error))
        })
}
const getUserInfo = () => dispatch =>{
    dispatch(authActions.getUserInfo());
    return serverCall({
        method:'GET',
        url: '/user/myinfo'
    }).then(res =>{
        dispatch(authActions.getUserInfoSuccess(res.data))
    }).catch(error =>{
        dispatch(authActions.getUserInfoFailure(error))
    })
}

export {
    login,
    logout,
    register,
    addToCart,
    emptyCart,
    changeInfo,
    getUserInfo
}