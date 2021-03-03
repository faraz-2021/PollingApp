import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../saga/rootSaga";
import rootReducer from "../reducer/rootReducer";

const Saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(Saga));

Saga.run(rootSaga);

export default store;
