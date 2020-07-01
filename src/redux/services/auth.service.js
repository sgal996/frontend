import {authActions} from "../modules/auth";
import {serverCall} from './backendCall';



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
            dispatch(authActions.registerFailure(error.response.data));
        })
};

export {
    login,
    logout,
    register
}