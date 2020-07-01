import {serverCall} from './backendCall';
import {dashboardActions} from '../modules/dashboard';

const currentUser = () => dispatch => {

    dispatch(dashboardActions.getCurrentUser());
    return serverCall({
        method: 'GET',
        url: '/user/me'
    })
        .then(res => {
            dispatch(dashboardActions.getCurrentUserSuccess(res.data));
        })
        .catch(error => {
            dispatch(dashboardActions.getCurrentUserFailure(error));
        })
};

export {
    currentUser
}