import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { MAIN_URL } from '../helpers/mainUrl';


// Запрос для получения постов
const fetchPostsFromApi = () => axios.get(MAIN_URL + '/posts')
// Запрос для получения комментариев 
const fetchCommentsFromApi = () => axios.get(MAIN_URL + '/comments')
// Запрос для получения юзеров 
const fetchUsersFromApi = () => axios.get(MAIN_URL + '/users')

// Сага воркер для поста
export function* getPostsSaga() {
    const data = yield call(fetchPostsFromApi);
    yield put(updatePosts(data.data))
}
// Сага воркер для комментариев
export function* getCommentsSaga() {
    const data = yield call(fetchCommentsFromApi);
    yield put(updateComments(data.data))
}
// Сага воркер для юзеров
export function* getUsersSaga() {
    const data = yield call(fetchUsersFromApi);
    yield put(updateUsers(data.data))
}

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        posts: [],
        comments: [],
        users: [],
        pageLoaded: false,
        commentsLoaded: false,
    },
    reducers: {
        // Обновление списка постов
        updatePosts(state, action) {
            action.payload.forEach(element => {
                element.comments = false
            });
            state.posts = action.payload;
        },
        // Обновление списка комментариев
        updateComments(state, action) {
            state.comments = action.payload;
        },
        // Обновление списка юзеров
        updateUsers(state, action) {
            action.payload.forEach(element => {
                element.avatar = 'http://static.physoc.org/app/uploads/2019/10/09133258/Honorary-Members-placeholder.jpg';
            });
            state.users = action.payload;
        },
        // Открытие и закрытие блока комментов для поста
        openCommentsForPost(state, action) {
            state.posts[action.payload.index].comments = true;
        },
        closeCommentsForPost(state, action) {
            state.posts[action.payload.index].comments = false;
        },

        updatePageLoaded(state, action) {
            state.pageLoaded = action.payload;
        },
        updateCommentsLoaded(state, action) {
            state.commentsLoaded = action.payload;
        }
    }
})

// Экспорт данных для ватчера
export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);

export const GET_COMMENTS = 'posts/getComments';
export const getComments = createAction(GET_COMMENTS);

export const GET_USERS = 'posts/getComments';
export const getUsers = createAction(GET_USERS);

export default toolkitSlice.reducer;
export const {
    updatePosts,
    updateComments,
    updateUsers,
    updatePageLoaded,
    updateCommentsLoaded,
    openCommentsForPost,
    closeCommentsForPost
} = toolkitSlice.actions;

