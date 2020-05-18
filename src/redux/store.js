import React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux"
//import defaultLogger, {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import auth from "./modules/auth";
import logger from "redux-logger"
import dashboard from "./modules/dashboard";

const combinedReducers = combineReducers({
    auth,
    dashboard

});

let store =createStore(combinedReducers, applyMiddleware(logger, thunk))

export default store;