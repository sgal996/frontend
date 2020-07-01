import axios from 'axios';

const URL = 'http://localhost:8081';
const APP_PATH = 'http://localhost:3000'

export const serverCall = (config) => {

    const auth = JSON.parse(localStorage.getItem('auth'))
    if (auth && auth.accessToken) {
        config.headers = {
            ...config.headers,
            'authorization': auth.accessToken
        };
    }
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        function (error) {
            if (!error.response) {
                error.response = {
                    data: 'Network Error',
                    status: 500
                }

            }

        if (error.response.status === 401) {
        if (config.url !== '/auth/login') {
            localStorage.removeItem('auth');
            window.location = APP_PATH + '/login';
            throw error;
        }
    }
    return Promise.reject(error);
});
config.baseURL = URL;
return axios(config);

};