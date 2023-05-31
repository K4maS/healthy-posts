import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSllice, { GET_POSTS, getPostsSaga } from "./toolkitSllice";
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from "redux-saga/effects";


const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    yield takeEvery(GET_POSTS, getPostsSaga)
}

const rootReducer = combineReducers({
    toolkit: toolkitSllice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)