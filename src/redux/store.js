import React from "react";
import {createStore, applyMiddleware, combineReducers, compose} from "redux"
//import defaultLogger, {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import auth from "./modules/auth";
import logger from "redux-logger"
import dashboard from "./modules/dashboard";
import shop from "./modules/shop";
import {persistStore, persistReducer, persistCombineReducers} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    auth,
    shop,
    dashboard


});
const persistConfig = {
    key: 'root',
    storage,




}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const newPersistedReducer = persistCombineReducers(persistConfig, {auth, shop, dashboard});
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk),
    // other store enhancers if any
);

    let store = createStore(persistedReducer, enhancer)
    let persistor = persistStore(store)

export {persistor as persistorr
}
export default store;

