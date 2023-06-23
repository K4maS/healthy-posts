import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { MAIN_URL } from '../api/mainUrl';
import { aboutCreator } from "../api/aboutCreator";

// Запрос для получения постов
const fetchPostsFromApi = () => axios.get(MAIN_URL + '/posts')
// Запрос для получения комментариев 
const fetchCommentsFromApi = (id) => axios.get(MAIN_URL + '/comments?postId=' + id)
// Запрос для получения юзеров 
const fetchUsersFromApi = () => axios.get(MAIN_URL + '/users')

// Сага воркер для поста
export function* getPostsSaga() {
    yield put(updateLoadingPocess(true));
    yield put(updateLoadingError(false));
    try {
        const data = yield call(fetchPostsFromApi);
        yield put(updatePosts(data.data))
    }
    catch (er) {
        console.log(er)
        yield put(updateLoadingError(true));
    }
    finally {
        yield put(updateLoadingPocess(false));
    }
}
// Сага воркер для комментариев
export function* getCommentsSaga(payload) {
    yield put(updateLoadingPocess(true));
    yield put(updateLoadingError(false));
    try {
        const data = yield call(fetchCommentsFromApi, payload.id);
        yield put(updateComments(data.data))
    }
    catch (er) {
        console.log(er)
        yield put(updateLoadingError(true));
    }
    finally {
        yield put(updateLoadingPocess(false));
    }
}
// Сага воркер для юзеров
export function* getUsersSaga() {
    yield put(updateLoadingPocess(true));
    yield put(updateLoadingError(false));
    try {
        const data = yield call(fetchUsersFromApi);
        yield put(updateUsers(data.data))
    }
    catch (er) {
        console.log(er)
        yield put(updateLoadingError(true));
    }
    finally {
        yield put(updateLoadingPocess(false));
    }
}

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        posts: [],
        postsFiltered: [],
        postsPaged: [],
        comments: [],
        users: [],
        searchValue: '',
        currentPage: 0,
        aboutCreator,
        pageLoaded: false,
        loadingProcess: false,
        loadingError: false,
        menuIsActive: false,
    },
    reducers: {
        // Изменение статуса меню
        updateMenuIsActive(state, action) {
            state.menuIsActive = action.payload;
        },
        // Изменение статуса загрузки
        updateLoadingPocess(state, action) {
            state.loadingProcess = action.payload;
        },
        // Изменение статуса ошибки
        updateLoadingError(state, action) {
            state.loadingError = action.payload;
        },
        // Обновление списка постов
        updatePosts(state, action) {
            action.payload.forEach(element => {
                element.comments = false
            });
            state.posts = action.payload;
            state.postsFiltered = state.posts;
            state.searchValue = '';
            getPagedPosts(state);
        },
        // Обновление списка комментариев
        updateComments(state, action) {
            state.comments = [...state.comments, ...action.payload];
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
            state.postsFiltered.find((post) => post.id === action.payload.id).comments = true;
            getPagedPosts(state)
        },
        closeCommentsForPost(state, action) {
            state.postsFiltered.find((post) => post.id === action.payload.id).comments = false;
            state.comments = state.comments.filter((elem) => elem.postId !== action.payload.id)
            getPagedPosts(state)
        },
        //  Проверка на первую загрузку
        updatePageLoaded(state, action) {
            state.pageLoaded = action.payload;
        },
        // Проверка на загрузку комментариев
        updateCommentsLoaded(state, action) {
            state.commentsLoaded = action.payload;
        },
        // Обновление данных поиска
        updateSearching(state, action) {
            state.searchValue = action.payload;
            state.postsFiltered = state.posts.filter((elem) => {
                const title = elem.title.toUpperCase()
                const vlaue = action.payload.toUpperCase()
                if (title.includes(vlaue)) {
                    return elem;
                }

            })
            getPagedPosts(state)
            state.currentPage = 0;
        },
        // Сортировка постов
        postsSorting(state, action) {
            if (action.payload === true) {
                state.postsFiltered.sort((a, b) => a.title > b.title ? 1 : -1)
            }
            else {
                state.postsFiltered.sort((a, b) => a.title > b.title ? -1 : 1)
            }
            getPagedPosts(state)
        },
        updageCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    },
});

// Разделение целого списка по страницам
function getPagedPosts(state) {
    let pageCount = 10;
    const l = state.postsFiltered.length;
    let page = 1;
    state.postsPaged = [];
    for (let i = 0; i < l; i += 1) {
        if (i % pageCount === 0) {
            state.postsPaged.push({ page, data: state.postsFiltered.slice(i, i + pageCount) });
            page += 1;
        }

    }
}


export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);

export const GET_COMMENTS = 'posts/getComments';
export const getComments = createAction((id) => { return { type: GET_COMMENTS, id } });

export const GET_USERS = 'posts/getComments';
export const getUsers = createAction(GET_USERS);

export default toolkitSlice.reducer;
export const {
    pagingPosts,
    updatePosts,
    updateComments,
    updateUsers,
    updatePageLoaded,
    updateCommentsLoaded,
    openCommentsForPost,
    closeCommentsForPost,
    updateSearching,
    postsSorting,
    updageCurrentPage,
    updateLoadingPocess,
    updateLoadingError,
    updateMenuIsActive,
} = toolkitSlice.actions;

