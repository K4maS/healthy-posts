import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const posts = createAction('POSTS');

export default createReducer(
    initialState,{
    [posts]: function (state, action) {
        state.posts = action.payload;
    }
})