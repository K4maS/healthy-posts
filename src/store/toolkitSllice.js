import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { MAIN_URL } from '../helpers/mainUrl';

const fetchUsersFromApi = () => axios.get(MAIN_URL + '/posts')

export function* getPostsSaga() {
    const data = yield call(fetchUsersFromApi);
    yield put(updatePosts(data.data))
}

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        posts: [],
        pageLoaded: false,
    },
    reducers: {
        updatePosts(state, action) {
            state.posts = action.payload;
        },
        addCommentsForPost(state, action) {
            state.posts[action.payload.index].comments = [action.payload.id];
        },
        updatePageLoaded(state, action) {
            state.pageLoaded = action.payload;
        }
    }
})

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);

export default toolkitSlice.reducer;
export const { updatePosts, updatePageLoaded, addCommentsForPost } = toolkitSlice.actions;

