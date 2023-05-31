import { MAIN_URL } from "./mainUrl";
import axios from "axios";
import { updatePosts } from "../store/toolkitSllice";
import createReducer from "../store/toolkitSllice";

export const loadPosts = () => {
    return (dispatch) => {
        axios.get(MAIN_URL + '/posts')
            .then((res) => dispatch(createReducer(updatePosts, res.data)))
    }
}
