import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import combineReducers from "./CombineReducers";
import watchGetMockyData from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchGetMockyData);

export default store;