import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSllice, { GET_COMMENTS, GET_POSTS, GET_USERS, getCommentsSaga, getPostsSaga, getUsersSaga } from "./toolkitSllice";
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from "redux-saga/effects";


const sagaMiddleware = createSagaMiddleware();
// Объединение ватчеров для саги
function* sagas() {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(GET_COMMENTS, getCommentsSaga)
    yield takeEvery(GET_USERS, getUsersSaga)
}

const rootReducer = combineReducers({
    toolkit: toolkitSllice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)