import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import LoginReducer from "../Reducers/loginREducer";

const Saga = createSagaMiddleware();

const store = createStore(LoginReducer, applyMiddleware(Saga));

Saga.run(rootSaga);

export default store;